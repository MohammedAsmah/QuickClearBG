import { Webhook } from "svix"
import userModel from "../models/userModel.js"
const clerkWebhooks = async (req, res) => {
    try {
      console.log("✅ Webhook received. Headers:", req.headers);
      console.log("📦 Payload:", JSON.stringify(req.body, null, 2));
  
      const Whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
      await Whook.verify(JSON.stringify(req.body), {
        "svix-id": req.headers["svix-id"],
        "svix-timestamp": req.headers["svix-timestamp"],
        "svix-signature": req.headers["svix-signature"],
      });
  
      console.log("🔒 Webhook verification successful");
      const { data, type } = req.body;
      console.log("🎯 Event type:", type);
  
      switch (type) {
        case "user.created": {
          const userData = {
            clerkId: data.id,
            email: data.email_addresses[0].email_address,
            firstName: data.first_name,
            lastName: data.last_name,
            photo: data.image_url,
          };
          console.log("📝 User data to create:", userData);
          await userModel.create(userData);
          console.log("🎉 User created successfully");
          res.status(200).json({ success: true });
          break;
        }
        default:
          console.log("⚠️ Unhandled event type:", type);
          res.status(200).json({ success: true });
      }
    } catch (error) {
      console.log("❌ Error:", error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  };
export {clerkWebhooks}