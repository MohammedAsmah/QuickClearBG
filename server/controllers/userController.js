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