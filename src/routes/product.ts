import { Router, Response, Request } from 'express';

export const ProductRouter: Router = Router();

ProductRouter.get('/', (req: Request, res: Response) => {
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'baju', price: 200000 }] });
});
