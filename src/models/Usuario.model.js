//Imports 
import mongoose from 'mongoose';//Importamos el modulo para la base de datos

//Aqui se define el modelo del usuario para guardarlo en la base de datos
const userSchema = new mongoose.Schema({
    username:{// aqui se define el username de la tabla usuario 
        type:String, //El tipo de dato que sera
        required:true, // El campo es requerido
        trim: true //Aqui para anular los espacion si el usuario ingresa alguno
    },
    email:{// aqui se define el email de la tabla usuario 
        type: String, //El tipo de dato que sera
        required: true,// El campo es requerido
        unique: true // Aqui se define que no se repita ningun email
    },
    password:{// aqui se define el password de la tabla usuario 
        type: String, //El tipo de dato que sera
        required: true// El campo es requerido
    }
    
},
{
    timestamps:true // Aqui se agrega la fecha de creacion y actualizacion 
})

export default mongoose.model('User', userSchema) //Aqui exportamos el esquema para utilizarlo en otras partes