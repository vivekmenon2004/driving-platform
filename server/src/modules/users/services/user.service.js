import userRepository from "../repositories/user.repository.js";
import { NotFoundError } from "../../../shared/errors/AppError.js";

export class UserService {
  async getProfile(userId) {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new NotFoundError("User not found");
    }
    return {
      id: user.id,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      phoneNumber: user.phone_number,
      status: user.status,
      roles: user.roles,
      preferredLanguage: user.preferred_language,
      createdAt: user.created_at,
    };
  }

  async updateProfile(userId, { firstName, lastName, phoneNumber, preferredLanguage }) {
    const updated = await userRepository.updateProfile(userId, {
      firstName,
      lastName,
      phoneNumber,
      preferredLanguage,
    });
    if (!updated) {
      throw new NotFoundError("User not found");
    }
    return {
      id: updated.id,
      email: updated.email,
      firstName: updated.first_name,
      lastName: updated.last_name,
      phoneNumber: updated.phone_number,
      preferredLanguage: updated.preferred_language,
      updatedAt: updated.updated_at,
    };
  }
}

export default new UserService();

