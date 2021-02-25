import express from 'express';

import * as ProductsHandler from '../handlers/ProductsHandler';

const router = express.Router();

router.route('/products')
  .get(ProductsHandler.findAll)
  .post(ProductsHandler.add);

router.route('/products/:id')
  .put(ProductsHandler.update)
  .delete(ProductsHandler.remove);

export default router;
