import { Webhook } from "svix"
import userModel from "../models/userModel.js"

//api controller function to manage clerk user with database
const clerkWebhooks=async (req,res)=>{
    try {
        //create svix anstance wth clerk webhook secretsvix-id
        const Whook =new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        await Whook.verify(JSON.stringify(req.body),{
            "":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"],
        })

        const{data,type}=req.body
        console.log("Webhook Payload:", JSON.stringify(req.body, null, 2));
        switch (type) {
            case "user.created": {
              const userData = {
                clerkId: data.id,
                email: data.email_addresses[0].email_address,
                firstName: data.first_name || "",
                lastName: data.last_name || "",
                photo: data.image_url,
              };
              await userModel.create(userData);
              res.status(200).json({ success: true });
              break;
            }
            case "user.updated": {
              const userData = {
                email: data.email_addresses[0].email_address,
                firstName: data.first_name || "",
                lastName: data.last_name || "",
                photo: data.image_url,
              };
              await userModel.findOneAndUpdate(
                { clerkId: data.id },
                userData,
                { new: true }
              );
              res.status(200).json({ success: true });
              break;
            }
            case "user.deleted": {
              await userModel.findOneAndDelete({ clerkId: data.id });
              res.status(200).json({ success: true });
              break;
            }
            default:
              res.status(200).json({ success: true }); // Acknowledge unhandled events
          }
    } catch (error) {
        console.log(error.messsage);
        res.json({success:false,messsage:error.messsage})
        
    }

}
export {clerkWebhooks}