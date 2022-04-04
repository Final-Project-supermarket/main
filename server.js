const express = require('express');
const dotenv = require('dotenv');
const connectDB =require('./config/db');
dotenv.config({ path: './config/config.env' });
connectDB();
const logger = require('./middleware/logger')

const items = require('./routes/items1')
const items2 = require('./routes/items2')
const users = require('./routes/users')
const grocerylist = require('./routes/grocerylist')
const auth = require('./routes/auth')

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;


app.use(logger);
app.get('/', (req, res) => {
    res.send("Hello From Express")
});
app.use('/api/v1/items', items);
app.use('/api/v1/items2', items2);
app.use('/api/v1/users', users);
app.use('/api/v1/grocerylist', grocerylist);
app.use('/api/v1/auth', auth);

const server= app.listen(PORT,
    console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`)
);
process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`)
    server.close(()=>process.exit(1));
});

