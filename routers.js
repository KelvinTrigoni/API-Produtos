import express from 'express';
import { validate } from 'express-validation';
import controllerProdutos from './controllers/produtos/produto.js';
import controllerToken from './controllers/token/token.js';
import modelProd from './models/produtos.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
// import * as specs from './swagger.js';

const router = express.Router();

var options = {
    swaggerOptions: {
        authAction: { JWT: { name: "JWT", schema: { type: "apiKey", in: "header", name: "Authorization", description: "" }, value: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IkFQSUpXVFRPS0VOIiwiaWF0IjoxNjA4NTAzNDYzfQ.XsifugCt0Bvk7arjfln6HqH2CFHktuq4alnLNy8ezpM" } }
    }
};

router.use('/documents', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

router.get('/token', (req, res) => {
    controllerToken.generateToken().then(response => {
        res.json(response);
    }).catch((erro) => {
        res.status(500).json(erro);
        console.log(erro)
    });
})

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