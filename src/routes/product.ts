import { Router, Response, Request } from 'express';
import { logger } from '../config/logger';

export const ProductRouter: Router = Router();

ProductRouter.get('/', (req: Request, res: Response) => {
  logger.info('success get product data');
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'baju', price: 200000 }] });
});
