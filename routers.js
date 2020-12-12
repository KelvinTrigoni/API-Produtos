import express from 'express';
import { validate } from 'express-validation';
import _ from 'underscore';
import servicesProdutos from './services/produtos/produtos.js'

const router = express.Router();

router.get('/produtos', (req, res) => {
    console.log('req');
    servicesProdutos.produtoGet().then(response => {
        res.json(response);
    }).catch((erro) => {
        res.status(500).json(erro);
        console.log(erro)
    });
})

export default router;