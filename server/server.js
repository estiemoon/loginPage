const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(1234, () => console.log('Server is running on port 1234'));