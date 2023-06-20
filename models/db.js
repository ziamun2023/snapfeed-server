const mongoose=require ('mongoose')

const connectTodb=async()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify: true,
          
        });

        console.log(`mongo db connected ${conn.connection.host}`)
    }catch (error) {
        console.log(`error: ${error.message}`)
        process.exit()
    }


}

module.exports=connectTodb