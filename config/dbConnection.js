const mongoose = require('mongoose');
const connectDB = async () =>{
    try{
        const connect = await mongoose.connect('mongodb+srv://Node:nodedatabase44@cluster0.j1buerp.mongodb.net/urls?retryWrites=true&w=majority', 
        {useNewUrlParser:true, useUnifiedTopology:true});
        console.log("The database connection is established",
        connect.connection.host,
        connect.connection.name)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};
module.exports = connectDB;