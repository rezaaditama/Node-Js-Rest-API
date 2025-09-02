import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = 4000;

app.use('/health', (req: Request, res: Response) => {
  res.status(200).send({ status: 200 });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
