import express from 'express';
import body from 'body-parser';
import cors from 'cors';
import { ValidationError } from 'express-validation';
import expressJwt from "express-jwt";
import jwt from "jsonwebtoken";
import routers from './routers.js'

const app = express();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

function verifyJWT(err, req, res, next) {
  const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : undefined;
  if (req.originalUrl.split('/')[1] == 'documents') {
    // req.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IkFQSUpXVFRPS0VOIiwiaWF0IjoxNjA4NTAzNDYzfQ.XsifugCt0Bvk7arjfln6HqH2CFHktuq4alnLNy8ezpM';
    next();
  } else
    if (!token) {
      res.status(401).json(err);
    } else {
      jwt.verify(token, 'APIJWTTOKEN', function (err, decoded) {

        if (err) res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        if (decoded.token == 'APIJWTTOKEN') {
          next();
        } else {
          res.status(401).json({ auth: false, message: 'Token invalido.' });
        }
      });
    }
}

app.use(cors(corsOptions))
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
//app.use(expressJwt({ secret: 'APIJWTTOKEN', algorithms: ['H256'] }).unless({ path: ['/token', '/documents'] }));
//app.use(verifyJWT);
app.use('/', routers);

app.listen(8081);