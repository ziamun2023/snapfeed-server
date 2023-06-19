const mongoose=require('mongoose')

const chatModel=mongoose.Schema(
    {
        chatName:{type:String, trim:true},
        isGroupChat:{type:boolean, default:false},
        users:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],
    latestMessage:{type:mongoose.Schema.Types.ObjectId,
    ref:"Message"},
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

},{
   timestamps:true ,
}


)


const chat=mongoose.model('chat', chatModel)

module.exports=chat;