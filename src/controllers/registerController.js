import User from "../models/userModel.js";

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const exitingUser = await User.findOne({ username });
        if (exitingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ username, password });
        await user.save();

        res.status(201).json({ message: "User is registered" });
    } catch (error) {
        res.status(500).json({ message: "Failed registration", error });
    }
};