import firebase from 'firebase';
import firebaseConfig from '../../firebase-config.js';

firebase.initializeApp(firebaseConfig.config());

const database = firebase.database();


export default {
    produtoGet: function () {
        try {
            return new Promise((ressolve, reject) => {
                database.ref('produtos').once('value')
                    .then(snapshot => {
                        ressolve(snapshot.val() == null ? {} : snapshot.val());
                    }, error => {
                        reject(error);
                    })
            })
        } catch (erro) {
            throw erro;
        }
    },
    produtoGetById: function (id) {
        try {
            return new Promise((ressolve, reject) => {
                database.ref('produtos').once('value')
                    .then(snapshot => {
                        let index = snapshot.val().map(function (e) { return e.id; }).indexOf(id);
                        database.ref(`produtos/${index}`).once('value')
                            .then(snapshot => {
                                ressolve(snapshot.val() == null ? {} : snapshot.val());
                            }, error => {
                                reject(error);
                            })
                    }, error => {
                        reject(error);
                    })
            })
        } catch (erro) {
            throw erro;
        }
    },
    produtoPost: function (produto) {
        try {
            return new Promise((ressolve, reject) => {
                let obj = produto;
                let retorno;

                database.ref('produtos').once('value')
                    .then(snapshot => {
                        retorno = snapshot.val();
                        console.log(obj);
                        retorno == null ? retorno = [obj] : retorno.push(obj);

                        database.ref("produtos").set(retorno, error => {
                            if (error) {
                                reject(error);
                                console.log("Failed with error: " + error)
                            } else {
                                ressolve({ mensagem: 'Produto cadastrodo com sucesso.' });
                                console.log("success")
                            }
                        })
                    }, error => {
                        reject(error);
                    })
            })
        } catch (erro) {
            throw erro;
        }
    },
    produtoPut: function (produto) {
        try {
            return new Promise((ressolve, reject) => {

                database.ref('produtos').once('value')
                    .then(snapshot => {
                        let index = snapshot.val().map(function (e) { return e.id; }).indexOf(produto.id);

                        database.ref(`produtos/${index}`).set(produto, error => {
                            if (error) {
                                reject(error);
                                console.log("Failed with error: " + error)
                            } else {
                                ressolve({ mensagem: 'Produto alterado com sucesso.' });
                                console.log("success")
                            }
                        })
                    }, error => {
                        reject(error);
                    })
            })
        } catch (erro) {
            throw erro;
        }
    },
    produtoDelete: function (id) {
        try {
            return new Promise((ressolve, reject) => {
                database.ref('produtos').once('value')
                    .then(snapshot => {
                        let index = snapshot.val().map(function (e) { return e.id; }).indexOf(id);
                        database.ref(`produtos/${index}`).remove();
                        ressolve({ mensagem: 'Produto excluido com sucesso.' });
                    }, error => {
                        reject(error);
                    })
            })
        } catch (erro) {
            throw erro;
        }
    }
}