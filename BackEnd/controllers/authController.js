import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req,res)=>{
    try{
        // console.log(req.body);
        
        const { fullName, username, password, confirmPassword, gender} = req.body

        // console.log(fullName, username, password, confirmPassword, gender)
        

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords do not match"})
        }

        const user = await User.findOne({username})
       

        if(user){
            return res.status(400).json({error:"Username already exist"})
        }
        // Hash Password

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)


        //  Https://avtar-placeholder.iran.liara.run/avatar/200/200/any

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilepic: gender ==="male" ? boyProfilePic: girlProfilePic,
        })

        // console.log(newUser);
        
        if(newUser){
            //  Generate JWT Token Here
            console.log(newUser._id);
            
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                _id: newUser._id,
                fullName:newUser.fullName,
                username:newUser.username,
                ProfilePic: newUser.profilepic
            })
        }else{
            res.status(400).json({error:"Invalid user data"})
        }

    }catch(error){
        console.log('Error in Signup controller',error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const loginUser = async(req,res) =>{
    try{

        const {username,password} = req.body
        const user = await User.findOne({username})
        
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid Credentials"})
        }

        generateTokenAndSetCookie(user._id, res)
        
        res.status(200).json({
                _id: user._id,
                fullName:user.fullName,
                username:user.username,
                ProfilePic: user.profilepic,
        })

    }catch(error){
        console.log('Error in Login controller',error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const LogoutUser = (req,res)=>{
    try{
        res.cookie('jwt','',{maxAge:0})
        res.status(200).json({message:"Logged out Successfully"})
    }catch(error){
        console.log('Error in Login controller',error.message);
        res.status(500).json({error:"Internal Server Error"})
    }

}
