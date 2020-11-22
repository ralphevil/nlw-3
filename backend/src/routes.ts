import {Router} from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';
//Rota = Conjunto
//Recurso = Usuário

//Métodos HTTP = GET, POST, PUT, DELETE
//Parâmetros

//GET = Buscar uma informação (Lista, Item)
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

//Query Params: http://localhost:3333/users?search=diego
//Route Params: http://localhost:3333/users/1 (Identificar um recurso)
//Body: http://localhost:3333/users/1 (Identificar um recurso)

//MVC

//Model
//Views
//Controllers

//index, show, create, update, delete

const routes = Router();
const upload = multer(uploadConfig)

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array('images'), OrphanagesController.create);

export default routes;