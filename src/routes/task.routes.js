//imports 
import { Router } from 'express';
import { authRequire } from '../middlewares/validateToken.js';
import { createTask, deleteTask, getOneTask, getTask, updateTask } from '../Controllers/task.controller.js';

const taskRoutes = Router();

taskRoutes.get('/task', authRequire, getTask);
taskRoutes.put('/task/actualizar', authRequire, updateTask);
taskRoutes.delete('/task/eliminar/:id', authRequire, deleteTask);
taskRoutes.post('/task/guardar', authRequire, createTask);
taskRoutes.get('/task/:id', authRequire, getOneTask);




export default taskRoutes;