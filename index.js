const express = require("express")
const { check } = require("./middlewares/authMiddleware")
const app = express()

app.use(express.json())

app.post("/shofi", check, (req, res) => {
    res.send("done")
})


app.listen(8000, () => {
    console.log("Surver running")
})

//----------------------------------------------------------------

// const check = (req, res, next)=>{
//     let pass = req.headers.authorization

//     if (pass == 123456){
//         next()
//     } else {
//         res.send("h a u")
//     }
// }

// module.exports = {check}

//------------------------------------------------------------------

// ======== token ========

// const jwt = require('jsonwebtoken');

// const check = (req, res, next)=>{
//     let token = req.headers.authorization

//     jwt.verify(token, "abcdefg", function(err, decoded){
//         if(!err){
//             next()
//         } else {
//             res.send("w a you")
//         }
//     })

//     // next()
// }
// module.exports = check




// const jwt = require('jsonwebtoken');

// const homeController = (req, res)=>{
//     let token = jwt.sign({tintina:"nodejs"}, "abcdefg", {
//         expiresIn : "1m"
//     })
//     console.log(token)

//     res.send("ggg")
// }
// module.exports = homeController

//-------------------------------------------------------------------------------

// ===== validation ======

// const express = require("express")
// const app = express()

// app.use(express.json())

// app.post("/shofi", (req, res) => {
//     const { username, email, password } = req.body

//     if (!username) {
//         return res.send({ message: "Username Required" })
//     }

//     if (!email) {
//         return res.send({ message: "email required" })
//     }

//     if (!password) {
//         return res.send({ message: "password required" })
//     }


//     res.send("done")
// })

// app.listen(8000, () => {
//     console.log("Surver Run")
// })







// const express = require("express")
// const app = express()

// app.use(express.json())

// app.post("/shofi", (req, res) => {
//     const { username, email, password } = req.body

//     const errors = []

//     if (!username) {
//         errors.push({
//             errorType: "username",
//             message: "username Reqyured"
//         })
//     }

//     if (!email) {
//         errors.push({
//             errorType: "email",
//             message: "email required"
//         })
//     }


//     if (!password) {
//         errors.push({
//             errorType: "password",
//             message: "password required"
//         })
//     }


//     res.send({
//         success: errors.length == 0 ? true : false,
//         message: errors.length == 0 ? "Registration Done" : "Registration fail",
//         errors: errors.length == 0 ? null : errors
//     })
// })

// app.listen(8000, () => {
//     console.log("Surver Run")
// })

//----------------------------------------------------------------------------------------------

// const express = require ("express")
// const mongoose = require("mongoose")
// const { authController } = require("./controllers/authController")
// const app = express()

// app.use(express.json())

// mongoose.connect('mongodb+srv://sho:epDdbDHi7451sTXk@cluster0.y5jhrmm.mongodb.net/exam?appName=Cluster0').then(()=>{
//     console.log("database connected")
// })

// app.post("/shofi", authController)

// app.listen(8000, ()=>{
//     console.log("Surver Run")
// })






// const mongoose = require("mongoose")

// const {Schema} = mongoose

// const authSchema = new Schema({
//     username: String,
//     email: String,
//     password: String
// })

// module.exports = mongoose.model("User", authSchema)





// const User = require("../models/authModel")

// const authController = (req, res)=>{
//     const {username, email, password} = req.body;

//     new User({
//         username: username,
//         email: email,
//         password: password
//     }).save()

//     res.status(201).send("User Created")
// }

// module.exports = {authController}

// ---------------------------------------------------------------------------------

// ==========Find delete===========

// const express = require("express")
// const mongoose = require("mongoose")
// const { authController } = require("./controllers/authController")
// const User = require("./models/authModel")
// const app = express()



// app.use(express.json())

// mongoose.connect('mongodb+srv://sho:epDdbDHi7451sTXk@cluster0.y5jhrmm.mongodb.net/exam?appName=Cluster0').then(() => {
//     console.log("database connected")
// })

// app.post("/shofi", authController)




// app.get("/userlist", async (req, res) => {
//     let user = await User.find({})
//     console.log(user)
//     res.send(user)
// })

// app.post("/userinfo", async (req, res) => {
//     const { email } = req.body
//     let user = await User.findOne({ email: email })
//     res.send(user)
// })

// app.delete('/userdelete', async (req, res) => {
//     const { id } = req.body
//     await User.findByIdAndDelete(id)
//     res.send("Deleted")
// })




// app.listen(8000, () => {
//     console.log("Surver Run")
// })

//---------------------------------------------------------------------------------

// image upload

// const express = require("express")
// const multer = require("multer")
// const app = express()

// app.use('/uploads', express.static('uploads'))



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, uniqueSuffix + '-' + file.originalname)
//     }
// })

// const upload = multer({ storage: storage })


// app.post("/shofi", upload.single("avatar"), (req, res) => {
//     res.send("done")
// })

// app.listen(8000, () => {
//     console.log("Server Running")
// })



