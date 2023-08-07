import express, { Request, Response, NextFunction } from 'express';

import { userRouter } from './users/users.js';
const port = 8000;
const app = express();





app.use((request, response, next) => { // Промежуточный обработчик (должен быть первым)
  console.log(`Time request => ${Date.now()} millisecond.`);
  next();
});



app.get('/', (request, response) => {
  response.type('application/json');
  response.send('Hello!');
});

app.get('/error', (request, response) => {
  throw new Error('Error!!!');
});

app.use('/users', userRouter);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => { // Промежуточный обработчик ошибок (должен быть последним)
  console.log(err.message);
  res.status(500).send(err.message);
});






/*

http://localhost:8000/



*/





app.listen(port, () => {
	console.log(`Server startted on http://localhost:${port}`);
});


