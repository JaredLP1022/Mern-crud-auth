//Aquí estan todos los imports 
import user from "../models/Usuario.model.js";//Importando un modelo
import bcrypt from 'bcryptjs';// modulo que ayuda a encriptar la contraseña de los usuarios
import { createAccesToken } from "../libs/jwt.js";//Funcion para crear un token de acceso de usuarios

//Funcion para registrar a los usuarios
export const register = async (req,res) =>{
    const {email, password, username} = req.body;//Con el request body recuperamos los datos del usario
    try {
        const passwordhash = await bcrypt.hash(password, 10); //Aqui se transfroma la contraseña a un hash
        //guardamos los datos recuperados en un nuevo usuario 
        const newUser = new user({
            username,
            email,
            password: passwordhash,
        });
        //Se guarda en la base de datos el nuevo usario
        const userSaved = await newUser.save();
        //Aqui es donde usa la funcion para crear el token
        const token = await createAccesToken({id: userSaved._id});
        res.cookie('token', token);//Se guarda el token en una cookie
        //respuestapara del back-end
        res.json({
        message: "Usuario creado"
        });
    } catch (error) {
        res.status(500).json({ message: error.message});//Si tenemos un error aqui sabremos porque paso eso
    }


}
export const login = async (req,res) => {
    
    const {email, password } = req.body;

    try {

        const userFound = await user.findOne({ email });
        if(!userFound) return res.status(400).json({message:'Usuario no encontrado'});

        const isMatch = await bcrypt.compare(password, userFound.password);
        if(!isMatch) return res.status(400).json({message:'Contraseña incorrecta'});

        const token = await createAccesToken({id: userFound._id});
        res.cookie('token', token);
        res.json({
        message: "Usuario encontrado"
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

export const logout = (req, res) => {
    res.cookie('token', " ",{
        expires: new Date(0)
    })
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
   const userFound =  await user.findById(req.user.id);

   if(!userFound) return res.statu(404).json({ message: "user not found"});

   return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAT: userFound.createdAt,
    updatedAT: userFound.updatedAt,
   })
}