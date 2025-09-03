import { Router, Request, Response } from 'express';
import { logger } from '../config/logger';

export const HealthRouter: Router = Router();

HealthRouter.get('/', (req: Request, res: Response) => {
  logger.info('health check success...');
  res.status(200).send({ status: 200 });
});
