import User from '#models/user'
import { CreateUserPayload } from '../types/user.js'

export class UserService {
  async createUser(payload: CreateUserPayload) {
    return await User.create(payload)
  }
}
