import express from 'express';
import multer from 'multer';
import { celebrate, Joi } from 'celebrate'

import multerConfig from './config/multer';

import PointController from './controllers/PointController';
import ItemController from './controllers/ItemController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointControllerInstance = new PointController();
const itemControllerInstance = new ItemController();

routes.get('/items', itemControllerInstance.index)

routes.get('/points', pointControllerInstance.index);
routes.post(
  '/points', 
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false,
  }),
  pointControllerInstance.create
);
routes.get('/points/:id', pointControllerInstance.show);

export default routes;