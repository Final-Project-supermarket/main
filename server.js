const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose")
dotenv.config({ path: './config/config.env' });
const logger = require('./middleware/logger')
const items = require('./routes/items')
const users = require('./routes/users')
const grocerylist = require('./routes/grocerylist')
const app = express();
const PORT = process.env.PORT || 5000;


const mongoString = "mongodb+srv://nadav:nadav123@cluster0.gfmrz.mongodb.net/Supermarket?retryWrites=true&w=majority"
mongoose.connect(mongoString, { useNewUrlParser: true })
mongoose.connection.on("error", function (error) {
    console.log(error)
})
mongoose.connection.on("open", function () {
    console.log("Connected to MongoDB database.")
})

app.use(logger);
app.get('/', (req, res) => {
    res.send("Hello From Express")
});
app.use('/api/v1/items', items);
app.use('/api/v1/users', users);
app.use('/api/v1/grocerylist', grocerylist);

app.listen(PORT, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`);
});
