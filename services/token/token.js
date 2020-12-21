import jwt from "jsonwebtoken";
import crypto from "crypto";


export default {
    generateToken: function () {
        try {
            let token = 'APIJWTTOKEN';
            let tokenJtw = jwt.sign({ token: 'APIJWTTOKEN' }, token);
            return {token: tokenJtw};

        } catch (error) {
            throw error;
        }
    }
}