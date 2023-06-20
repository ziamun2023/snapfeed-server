const  mongoose=require ('mongoose')
const userSchema =mongoose.Schema({
    name:{type:String, required:true},
    email: {type:String,required:true,unique:true },
    password:{type:String,required:true},
    pic:{type:String, default: "https://th.bing.com/th/id/R.892bb645c09c766efcc5bc4d0c93094a?rik=slmcvUaa5yToAw&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f12%2fNature-Lake-Bled.-Desktop-background-image.jpg&ehk=c2raFC95S12P3OL0%2fwdM60ro3oUxsSEajkuGEN%2fsjbo%3d&risl=1&pid=ImgRaw&r=0"}, 
},{
    timestamps:true
})

userSchema.pre('save',async function(next){
    if(!this.modify){
        next()
    }
    const salt =await bcrypt.genSalt(10)
})

const User =mongoose.model('user',userSchema)

module.exports=User
