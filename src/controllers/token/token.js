import serviceToken from '../../services/token/token.js'

export default{
    generateToken: function () {
        try {
            return new Promise((ressolve, reject) => {
                ressolve(serviceToken.generateToken()); 
            })
        } catch (error) {
            throw erro;
        }
    }
}