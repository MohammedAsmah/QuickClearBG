import { Webhook } from "svix"
import userModel from "../models/userModel.js"

const clerkWebhooks = async (req, res) => {
  try {
    // Log raw request data
    console.log("📦 Raw Payload:", req.body);
    console.log("🔑 Headers:", req.headers);

    // Verify webhook signature
    const Whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    await Whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    console.log("🔒 Webhook verification passed");
    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        // Log extracted data
        console.log("👤 Data from Clerk:", data);
        
        // Build userData with fallbacks
        const userData = {
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address || "no-email@example.com",
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "default.jpg",
        };

        console.log("📝 User data to save:", userData);
        
        // Save to DB
        const newUser = await userModel.create(userData);
        console.log("✅ User saved:", newUser);
        
        res.status(200).json({ success: true });
        break;
      }
      default:
        res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error("❌ Error:", error.message); // <-- Critical: Log the actual error
    res.status(500).json({ success: false, message: error.message });
  }
};
export {clerkWebhooks}