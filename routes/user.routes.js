import { Router } from "express";

import { createUser } from "../controller/User.controller.js";

const userRouter = Router();

userRouter.get('/', (req, res) => res.send({title: "Retrieve all users"}));
userRouter.post('/create', createUser);
userRouter.put('/update/:id', (req, res) => res.send({title: 'Update user'}));
userRouter.delete('/delete/:id', (req, res) => res.send({title: 'Delete user'}));

export default userRouter;