import express from 'express'
import cors from 'cors';
import 'dotenv/config'
import bodyParser  from 'body-parser';
import db from './dataBase.js';
import { productRouter } from './route/product.js';
import { customerRouter } from './route/customer.js';



 
const app = express();
const PORT = 3020;

db


app.use(bodyParser.json())
app.use(cors());
app.use('/product', productRouter)
app.use('/customer', customerRouter)

app.listen(PORT , () => {
    console.log(`Server is running in ${PORT}`);
})