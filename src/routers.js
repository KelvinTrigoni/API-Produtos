import express from 'express';
import { validate } from 'express-validation';


// import formidable from 'formidable';

// import { promisify } from 'util';
// import { randomInt } from 'crypto';


import controllerProdutos from './controllers/produtos/produto.js';
import controllerToken from './controllers/token/token.js';
import modelProd from './models/produtos.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
// import * as specs from './swagger.js';

// const randomIntAsync = promisify(randomInt);

// const form = new formidable.IncomingForm();
// form.uploadDir = './uploads';
// form.on('fileBegin', async function(name, file) {
//     file.path = form.uploadDir + "/" + randomIntAsync(500) + file.name;
// })

const router = express.Router();

router.use('/documents', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.get('/produtos/imagem', (req, res) => {
    form.parse(req, function(erro, fields, files) {
        let obj = {};
        if (erro) {
          console.error(erro.message);
          res.status(500).json(erro);
          return;
        }
        obj.nome = fields.nome;
        obj.descricao = fields.descricao;
        obj.quantidade = fields.quantidade;
        obj.preco = fields.preco;
        obj.path = files.file.path;

        console.log(obj);
        // services.enviarComAnexo(obj).then(response => {
        //     res.json({menssagem: response});
        // }).catch((erro) => {
        //     res.status(500).json(erro);
        //     console.log(erro)
        // });
    });
})

router.get('/token', (req, res) => {
    controllerToken.generateToken().then(response => {
        res.json(response);
    }).catch((erro) => {
        res.status(500).json(erro);
        console.log(erro)
    });
})

router.get('/produtos', (req, res) => {
    console.log('aqui');
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