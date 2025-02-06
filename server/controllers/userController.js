import { Webhook } from "svix"
import userModel from "../models/userModel.js"

//api controller function to manage clerk user with database
const clerkWebhooks=async (req,res)=>{
    try {
        //create svix anstance wth clerk webhook secret
        const Whook =new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        await Whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"],
        })

        const{data,type}=req.body
        console.log("Webhook Payload:", JSON.stringify(req.body, null, 2));
       switch (type) {
        case "user.created": {
            // ...
            try {
              await userModel.create(userData);
              console.log("User created:", userData); // Log success
              res.status(200).json({ success: true });
            } catch (dbError) {
              console.log("Database Error:", dbError.message);
              res.status(500).json({ success: false, message: dbError.message });
            }
            break;
          }
        case "user.updated":{
            const userData={
                email:data.email_addresses[0].email_address,
                firstName:data.first_name,
                lastName:data.last_name,
                photo:data.image_url
            }
            await userModel.findOneAndUpdate({clerkId:data.id},userData)
            res.status(200).json({ success: true });
            break;
        }
        case "user.deleted":{
            await userModel.findOneAndDelete({clerkId:data.id})
            res.status(200).json({ success: true });
            break;
        }
        default:
            break;
       }
    } catch (error) {
        console.log(error.messsage);
        res.json({success:false,messsage:error.messsage})
        
    }

}
export {clerkWebhooks}