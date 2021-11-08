require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

// connect to MongoDb
const URI = process.env.MONGO_URL;

// mongoose.connect(URI, {
//     userCreateIndex:true,
//     useFindAndModify:false,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },(err) => {
//     if (err) throw err;
//         else{
//             return console.log(`monogo db connected yes!!!`)

//     }
// })
mongoose.connect(URI,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

//routes 
app.use('/user', require('./routes/userRouter'));
app.use('/', require('./routes/aboutRouter'));
app.use('/', require('./routes/educationRouter'));
app.use('/', require('./routes/experienceRouter'));



PORT =process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server listening on port:${PORT}`);
})