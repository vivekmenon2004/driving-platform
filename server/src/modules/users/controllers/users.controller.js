import userService from "../services/user.service.js";

export class UsersController {
  async getMe(req, res, next) {
    try {
      const profile = await userService.getProfile(req.user.id);
      res.status(200).json({
        success: true,
        data: profile,
      });
    } catch (err) {
      next(err);
    }
  }

  async updateMe(req, res, next) {
    try {
      const { firstName, lastName, phoneNumber, preferredLanguage } = req.body;
      const updated = await userService.updateProfile(req.user.id, {
        firstName,
        lastName,
        phoneNumber,
        preferredLanguage,
      });
      res.status(200).json({
        success: true,
        data: updated,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default new UsersController();

