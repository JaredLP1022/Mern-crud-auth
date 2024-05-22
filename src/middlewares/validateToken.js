//Imports 
import jwt from 'jsonwebtoken' //Se trae esta libreria para crear un token 
import { TOKEN_SECRET } from "../config.js";//aqui importamos de nuestro archivo la palabra secreta

//nombre de la funcion para permitir el acceso al usuario
export const authRequire = (req, res, next) => {

    const { token } = req.cookies; //Recuperamos el token guardado en la cookie

    if(!token)//Verificamos que haya un token 
        return res.status(401).json({ message: "No access token"});// Si no se encuentra el token se manda el error

    jwt.verify(token, TOKEN_SECRET, (err, user) => {//si el token fue correcto entonces se hace la verificacion 
        if(err) return res.status(403).json({ message: "invalid token"}); //verificamos que el token sea del usuario

        req.user = user; //si todo fue bien guardamos el usuario y continua 

        next();
    })

    
}