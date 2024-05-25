//Imports 
import express from 'express'; // es un modulo para el back-end
import morgan from 'morgan';// es un modulo para ver las peticiones que llegan por consola
import router from './routes/auth.route.js'; //es el archivo que importa las rutas
import cookieParser from 'cookie-parser'; // nos ayuda a leer las cookies
import taskRoutes from './routes/task.routes.js';

const app = express();


app.use(morgan('dev')); //Mostramos las peticiones en consola
app.use(express.json());//podemos leer archvios json 
app.use(cookieParser());//podemos leer las cookies

app.use('/API',router);// Aqui estan todas las rutas de nuestra aplicacion 
app.use('/API', taskRoutes);

export default app; //exportamos app para que funcione la aplicacion
