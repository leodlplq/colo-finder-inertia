import User from '#models/user'
import { UserService } from '#services/user_service'
import { registerValidation } from '#validators/auth'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(protected userService: UserService) {}

  async register({ request, response, auth }: HttpContext) {
    const data = request.all()
    const payload = await registerValidation.validate(data)

    const user = await this.userService.createUser(payload)

    console.log(user)
    await auth.use('web').login(user)
    return response.redirect().toRoute('home')
  }

  async showRegister({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async login({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    return response.redirect().toRoute('home')
  }

  async showLogin({ inertia }: HttpContext) {
    return inertia.render('auth/login')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }
}
