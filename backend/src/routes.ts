import express from 'express';

import knex from './database/connection';

import PointController from './controllers/PointController';

const routes = express.Router();
const pointControllerInstance = new PointController();

routes.get('/items', async (req, res) => {
  const items = await knex('items').select('*');

  const serializedItems = items.map(item => ({ ...item, image_url: `http://localhost:3333/uploads/${item.image}` }));

  return res.json(serializedItems);
})

routes.post('/points', pointControllerInstance.create);

export default routes;