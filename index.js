const express = require('express');
const userRouter = require('./src/routes/userRoute');
const productRouter = require('./src/routes/productRoute');
const port = 6000;
const app = express();



app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});