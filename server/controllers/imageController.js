import userModel from "../models/userModel";

export const generateImage=async(req,res)=>{
    try {
        const {userId,prompt}=req.body;
        const user = await userModel.findById(userId);
        if (!user||!prompt) {
            return res.json({ success:false,message: "Missing Details" });
        }
        if(user.creditBalance===0||userModel.creditBalance<0){
            return res.json({ success:false,message: "Insufficient Credit",creditBalance:user.creditBalance });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ success:false,message: error.message });
        
    }
} 