import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({title: "Retrieve all users"}));
userRouter.post('/', (req, res) => res.send({title: 'Created new User'}));
userRouter.put('/:id', (req, res) => res.send({title: 'Update user'}));
userRouter.delete('/id', (req, res) => res.send({title: 'Delete user'}));

export default userRouter;