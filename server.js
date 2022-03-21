const express = require('express');
const dotenv = require('dotenv');
const connectDB =require('./config/db');
dotenv.config({ path: './config/config.env' });
connectDB();
const logger = require('./middleware/logger')
const items = require('./routes/items')
const users = require('./routes/users')
const grocerylist = require('./routes/grocerylist')
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;


app.use(logger);
app.get('/', (req, res) => {
    res.send("Hello From Express")
});
app.use('/api/v1/items', items);
app.use('/api/v1/users', users);
app.use('/api/v1/grocerylist', grocerylist);

const server= app.listen(PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`)
);
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`)
    server.close(()=>process.exit(1));
});

