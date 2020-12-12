import express from 'express';
import body from 'body-parser';
import cors from 'cors';
import { ValidationError } from 'express-validation';
import routers from './routers.js'

const app = express();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use('/', routers);

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    console.log(err.details.body);
    return res.status(err.statusCode).json(err.details.body)
  }
  console.log(err);
  return res.status(500).json(err)
})

app.listen(8081);