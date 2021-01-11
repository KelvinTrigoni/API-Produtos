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
                preco: Joi.number()
                    .required(),
                id: Joi.string()
                    .allow(null)
                    .allow('')
                    .optional()
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
                preco: Joi.number()
                    .required(),
                    path: Joi.string()
                    .allow(null)
                    .allow('')
                    .optional()
            }),
        }
        return ProdutoValidate;
    }
}