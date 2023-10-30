import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {return res.status(404).send("User not found");}

            if (req.userId!== user._id.toString()) {
                return res.status(403).send("You can only delete your account");
            }
            await User.findByIdAndDelete(req.params.id);
            res.status(204).send("Successfully deleted"); 
    }
     catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
