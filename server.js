const express = require('express');
const mongoose = require("mongoose")
const app = express();
const port = 3000;

const mongoString = "mongodb+srv://nadav:nadav123@cluster0.gfmrz.mongodb.net/Supermarket?retryWrites=true&w=majority"
mongoose.connect(mongoString, {useNewUrlParser: true})
mongoose.connection.on("error", function(error) {
  console.log(error)
})
mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})

app.get('/items',(req,res) =>{
    res.status(200).json({
        status:'Success',
        data: {
            items
        }
    });
});

app.listen(port,()=> {
    console.log(`App Running on port ${port}`);
});
