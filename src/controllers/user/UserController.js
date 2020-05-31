import User from '../../models/User';
import InternalServerError from '../../lib/errors/InternalServerError';

class UserController {
  async store(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.json(InternalServerError);
    }
  }
}

export default new UserController();
