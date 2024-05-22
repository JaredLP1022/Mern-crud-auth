//Imports 
import app from "./app.js"; //importamos app desde nuestro archivo app.js
import { connectDB } from "./db.js";//importamos la base de datos 


connectDB(); //nos conectamos a la base de datos 

app.listen(3000); //es el puerto en el que escucha la aplicacion de back-end

console.log('Server on port 3000'); //mostramos el mensaje por consola