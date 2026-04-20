const { default: mongoose } = require("mongoose");

const connectDB =()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/REX')
        .then(()=>console.log("Database Connected Successfully"))
        .catch(()=>console.log("Not Connected"))
}

module.exports = connectDB;


