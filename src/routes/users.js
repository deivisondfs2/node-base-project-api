import { Router } from 'express';
import UserController from '../controllers/user/UserController';
import validationSchema from '../controllers/user/validationSchema';
import ValidateError from '../lib/errors/ValidateError';

const router = new Router();

const checkValidate = async (req, res, next) => {
  await validationSchema
    .userDefaultValidation()
    .validate(req.body, { abortEarly: false })
    .then(() => {
      next();
    })
    .catch((errors) => {
      const schemaErrors = errors.inner.map((err) => ({ field: err.path, message: err.message }));
      res.status(400).json(new ValidateError(schemaErrors, 'User Validation'));
    });
};

router.post('/create', checkValidate, UserController.store);

export default router;
