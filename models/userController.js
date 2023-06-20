const asyncHandler=require('express-async-handler')
const User =require('./userModel')
const registerUser=asyncHandler (async(req,res)=>{
    const {name,email,password,pic}= req.body
if (!name || !email || !email ){
    res.status(400)
    throw new Error('please enter all the fields')
}
const useExists=await User.findone({email})
if(useExists){
    res.status(400)
    throw new Error ('user already exist ')
}
const user= await User.create({
    name,email,password,pic
})
if(user){
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        pic:user.pic
    })
}
else{
    res.status(400)
    throw new Error ("failed to create the user ")
}
})

module.exports={registerUser}