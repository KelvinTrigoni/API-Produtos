import Guid from 'guid'
import serviceProdutos from '../../services/produtos/produtos.js'


export default {
    produtoGet: function () {
        try {
            return new Promise((ressolve, reject) => {
                serviceProdutos.produtoGet().then(response => {
                    ressolve(response);
                }).catch((erro) => {
                    reject(erro);
                    console.log(erro)
                });
            })
        } catch (error) {
            throw erro;
        }
    },
    produtoGetById: function (id) {
        try {
            return new Promise((ressolve, reject) => {
                serviceProdutos.produtoGetById(id).then(response => {
                    ressolve(response);
                }).catch((erro) => {
                    reject(erro);
                    console.log(erro)
                });
            })
        } catch (error) {
            throw erro;
        }
    },
    produtoPost: function (produto) {
        try {
            return new Promise((ressolve, reject) => {
                produto.id = Guid.raw();

                serviceProdutos.produtoPost(produto).then(response => {
                    ressolve(response);
                }).catch((erro) => {
                    reject(erro);
                    console.log(erro)
                });
            })
        } catch (error) {
            throw erro;
        }
    },
    produtoPut: function (produto) {
        try {
            return new Promise((ressolve, reject) => {
                serviceProdutos.produtoPut(produto).then(response => {
                    ressolve(response);
                }).catch((erro) => {
                    reject(erro);
                    console.log(erro)
                });
            })
        } catch (error) {
            throw erro;
        }
    },
    produtoDelete: function (id) {
        try {
            return new Promise((ressolve, reject) => {
                serviceProdutos.produtoDelete(id).then(response => {
                    ressolve(response);
                }).catch((erro) => {
                    reject(erro);
                    console.log(erro)
                });
            })
        } catch (error) {
            throw erro;
        }
    },
    
}