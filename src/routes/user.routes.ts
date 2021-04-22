import { Router } from 'express';
const router = Router();

import { getUsers, createUser, getUser, updateUser } from '../controllers/user.controller';

router.route('/')
      .get(getUsers)
      .post(createUser);

router.route('/:id')
      .get(getUser)
      .post(updateUser);

export default router;