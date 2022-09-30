import { Router } from 'express';
import { UserController } from './user.controller';

export const userRouter = Router();

userRouter.get('/', UserController.getAll)

userRouter.post('/', UserController.create)

userRouter.put('/', UserController.update)

userRouter.delete('/', UserController.delete)

