import User from "../models/userModel.js";

export const getUsersForSideBar = async (req, res)=>{
    try {

        const loggedInUserId = req.user._id

        const filteredUser = await User.find({_id: {$ne: loggedInUserId}}).select("-password")

        res.status(200).json(filteredUser)

        // {_id: {$ne: loggedInUserId}}  remove it from find() if you  want to send message to yourself
        
    } catch (error) {
        console.log('Error in getUserForSideBar', error.message);
        res.status(500).json({error:"Internal server error"})
    }
}