import { Router } from "express";

import { createUser, deleteUser, getAllUser, updateUser } from "../controller/User.controller.js";

const userRouter = Router();

userRouter.get('/', getAllUser);
userRouter.post('/create', createUser);
userRouter.put('/update/:id', updateUser);
userRouter.delete('/delete/:id', deleteUser);

export default userRouter;