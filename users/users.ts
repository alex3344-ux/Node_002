import express from 'express';

const userRouter = express.Router();



userRouter.post('/login', (request, response) => {
    response.send('Login!');
});

userRouter.post('/register', (request, response) => {
    response.send('Register!');
});

export { userRouter };