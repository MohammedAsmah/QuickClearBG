const clerkWebhooks = async (req, res) => {
    try {
        const Whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        
        await Whook.verify(JSON.stringify(req.body), {
            'svix-id': req.headers["svix-id"],
            'svix-timestamp': req.headers["svix-timestamp"],
            'svix-signature': req.headers["svix-signature"],
        });

        const { data, type } = req.body;

        switch (type) {
            case "user.created": {
                const userData = {
                    clerkId: data?.id,
                    email: data?.email_addresses?.[0]?.email_address,
                    firstName: data?.first_name,
                    lastName: data?.last_name,
                    photo: data?.image_url
                };
                await userModel.create(userData);
                return res.status(200).json({ success: true });
            }
            case "user.updated": {
                const userData = {
                    email: data?.email_addresses?.[0]?.email_address,
                    firstName: data?.first_name,
                    lastName: data?.last_name,
                    photo: data?.image_url
                };
                await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
                return res.status(200).json({ success: true });
            }
            case "user.deleted": {
                await userModel.findOneAndDelete({ clerkId: data.id });
                return res.status(200).json({ success: true });
            }
            default:
                return res.status(400).json({ success: false, message: 'Unknown webhook type' });
        }
    } catch (error) {
        console.error('Webhook error:', error);
        return res.status(500).json({ success: false, message: error.message });
    }
};