// SUgZZmrFmH5RLcf8
// mystylinlife223
const express= require('express')
const cors= require('cors')

const userRoutes=require('././models/userRoutes')

// const jwt = require('jsonwebtoken');
// const stripe=require('stripe')(process.env.PAYMENT_KEY)
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const connectTodb = require('./models/db');

const app=express();
app.use(express.json()); //to accept json
const port= process.env.PORT || 5000  

require('dotenv').config()


app.use(cors())
connectTodb()
// const corsConfig = {
//   origin: '',
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE']
// }
// app.use(cors(corsConfig))
// app.options("", cors(corsConfig))

app.use(express.json())



// const verifyJWT = (req, res, next) => {
//   const authorization = req.headers.authorization;
//   if (!authorization) {
//     return res.status(401).send({ error: true, message: 'unauthorized access' });
//   }
//   // bearer token
//   const token = authorization.split(' ')[1];

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).send({ error: true, message: 'unauthorized access' })
//     }
//     req.decoded = decoded;
//     next();
//   })
// }




// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0xqymst.mongodb.net/?retryWrites=true&w=majority`;
// // const uri = "mongodb+srv://mystylinlife223:<password>@cluster0.0xqymst.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     // await client.connect();
  



// app.get('/chat/api',(req,res)=>{
//     res.send('this is funtastic')
// })


app.use('/api/user',userRoutes)


// app.use("/api/chat",chat)
// app.post('/api/chat', async (req,res)=>{
//     const response=body.req
//     const result = await Users.inserOne


// })




//     // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('coffe makign')
})

app.listen(port,()=>{
    console.log(`coffee server is running on port ${port}`)
})  // const db=client.db("musicClass");
    // const favouriteClass=db.collection("carts") //favourite class

    // const studentsCollection=db.collection("allStudents") //all user
    // const classCollection=db.collection("allClass") // all class
    // const allinstructorsDb=db.collection("instructor")
    // const Users=db.collection("snapUser")