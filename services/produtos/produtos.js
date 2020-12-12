

export default {
    produtoGet: function () {
        try {
            return new Promise((ressolve, reject) =>  {
                let obj = [{
                    id: 69,
                    nome: 'Adauau',
                    preco: 69,
                    quantidade: 10,
                    descricao: 'hihihihiho'
                },
                {
                    id: 69,
                    nome: 'Adauau',
                    preco: 69,
                    quantidade: 10,
                    descricao: 'hihihihiho'
                },
                {
                    id: 69,
                    nome: 'Adauau',
                    preco: 69,
                    quantidade: 10,
                    descricao: 'hihihihiho'
                }];


                ressolve(obj);
            })
        } catch (erro) {
            throw erro;
        }
    }
}