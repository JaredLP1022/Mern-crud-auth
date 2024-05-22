//imports 
import { TOKEN_SECRET } from "../config.js"; //Se importa del archivo config 
import jwt from 'jsonwebtoken';//se trae la libreria o modulo 

export function createAccesToken(payload){ //funcion para crear el token 

    return new Promise((resolve, reject) => { //se gnera un funcion promise 
        jwt.sign( 
            payload, // agregamos el payload que son los datos
            TOKEN_SECRET, //asiganmos una palabra clave
            {
                expiresIn: "2hr", //tiempo de expiracion 
            },
            (err, token) =>{ 
                if(err) reject(err); //si hay un error se mandara 

                resolve(token) // Sin errror nos devolvera el token
                
            }
            
        );
    })
}