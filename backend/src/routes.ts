import express from 'express';

import PointController from './controllers/PointController';
import ItemController from './controllers/ItemController';

const routes = express.Router();
const pointControllerInstance = new PointController();
const itemControllerInstance = new ItemController();

routes.get('/items', itemControllerInstance.index)


routes.get('/points', pointControllerInstance.index);
routes.post('/points', pointControllerInstance.create);
routes.get('/points/:id', pointControllerInstance.show);

export default routes;