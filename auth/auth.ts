import * as jwt from 'jsonwebtoken';
import Config from '../utils/Config';

class Auth {
    
    validate(req, res, next) {
        Config
        const token = req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, Config.secret, (e, decoded) => {
                if (e) {
                    return res.status(403).send({
                        success: false,
                        message: '401 - Token:::Invalid'
                    });
                } else {
                    next();
                }
            });
        } else {
            return res.status(401).send({
                success: false,
                message: '401 - Token:::Invalid'
            });
        }
    }
}

export default new Auth();