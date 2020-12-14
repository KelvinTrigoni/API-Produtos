import express from 'express';
import { validate } from 'express-validation';
import _ from 'underscore';
import controllerProdutos from './controllers/produtos/produto.js'
import modelProd from './models/produtos.js';

const router = express.Router();

router.get('/produtos', (req, res) => {
    controllerProdutos.produtoGet().then(response => {
        res.json(response);
    }).catch((erro) => {
        res.status(500).json(erro);
        console.log(erro)
    });
})

router.get('/produtos/:id', (req, res) => {
    controllerProdutos.produtoGetById(req.params.id).then(response => {
        res.json(response);
    }).catch((erro) => {
        res.status(500).json(erro);
        console.log(erro)
    });
})

router.post('/produtos', validate(modelProd.ProdutoPost(), {}, {}), (req, res) => {
    controllerProdutos.produtoPost(req.body).then(response => {
        res.json(response);
    }).catch((erro) => {
        res.status(500).json(erro);
        console.log(erro)
    });
})

router.put('/produtos', validate(modelProd.ProdutoPut(), {}, {}), (req, res) => {
    controllerProdutos.produtoPut(req.body).then(response => {
        res.json(response);
    }).catch((erro) => {
        res.status(500).json(erro);
        console.log(erro)
    });
})

router.delete('/produtos/:id', (req, res) => {
    controllerProdutos.produtoDelete(req.params.id).then(response => {
        res.json(response);
    }).catch((erro) => {
        res.status(500).json(erro);
        console.log(erro)
    });
})

export default router;