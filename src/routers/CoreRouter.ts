import express from 'express';

import * as ProductsHandler from '../handlers/ProductsHandler';
import MulterUtils from '../utils/MulterUtils';

const router = express.Router();

router.route('/products')
  .get(ProductsHandler.findAll)
  .post(MulterUtils.single('image'), ProductsHandler.add);

router.route('/products/:id')
  .put(MulterUtils.single('image'), ProductsHandler.update)
  .delete(ProductsHandler.remove);

export default router;
