import Joi from 'joi';


export default {
    ProdutoPost: function () {
        const ProdutoValidate = {
            body: Joi.object({
                descricao: Joi.string()
                    .required(),
                nome: Joi.string()
                    .required(),
                quantidade: Joi.number().integer()
                    .required(),
                preco: Joi.number().integer()
                    .required(),
            }),
        }
        return ProdutoValidate;
    },
    ProdutoPut: function () {
        const ProdutoValidate = {
            body: Joi.object({
                id: Joi.string()
                    .required(),
                descricao: Joi.string()
                    .required(),
                nome: Joi.string()
                    .required(),
                quantidade: Joi.number().integer()
                    .required(),
                preco: Joi.number().integer()
                    .required(),
            }),
        }
        return ProdutoValidate;
    }
}