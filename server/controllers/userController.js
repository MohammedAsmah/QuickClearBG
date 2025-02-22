import { Webhook } from "svix";
import userModel from "../models/userModel.js";

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
        console.log("👤 Handling user creation");
        const userData = {
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address || "no-email@example.com",
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "default.jpg",
        };
        
        const newUser = await userModel.create(userData);
        console.log("✅ User created:", newUser._id);
        return res.status(200).json({ success: true });
      }

      case "user.updated": {
        console.log("🔄 Handling user update for:", data.id);
        const updateData = {
          email: data.email_addresses?.[0]?.email_address,
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "default.jpg",
        };

        const updatedUser = await userModel.findOneAndUpdate(
          { clerkId: data.id },
          updateData,
          { new: true, runValidators: true }
        );

        if (!updatedUser) {
          console.log("⚠️ User not found for update:", data.id);
          return res.status(404).json({ success: false, message: "User not found" });
        }

        console.log("✅ User updated:", updatedUser._id);
        return res.status(200).json({ success: true });
      }

      case "user.deleted": {
        console.log("🗑️ Handling user deletion for:", data.id);
        const deletedUser = await userModel.findOneAndDelete({ clerkId: data.id });

        if (!deletedUser) {
          console.log("⚠️ User not found for deletion:", data.id);
          return res.status(404).json({ success: false, message: "User not found" });
        }

        console.log("✅ User deleted:", deletedUser._id);
        return res.status(200).json({ success: true });
      }

      default:
        console.log("🔔 Unhandled event type:", type);
        return res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
    console.error("Stack trace:", error.stack);
    return res.status(500).json({ 
      success: false,
      message: error.message,
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    });
  }
};

export { clerkWebhooks };