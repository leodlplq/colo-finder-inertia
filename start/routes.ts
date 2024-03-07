/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
import { HttpContext } from '@adonisjs/core/http'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router
  .get('/', ({ inertia }: HttpContext) => {
    return inertia.render('home')
  })
  .as('home')

router
  .group(() => {
    // router.post('/logout', [AuthController, 'logout']).as('do.logout')
    router.get('/logout', [AuthController, 'logout']).as('do.logout.get')
  })
  .middleware(middleware.auth())

router
  .group(() => {
    router.get('/login', [AuthController, 'showLogin']).as('show.login')
    router.post('/login', [AuthController, 'login']).as('do.login')
    router.get('/register', [AuthController, 'showRegister']).as('show.register')
    router.post('/register', [AuthController, 'register']).as('do.register')
  })
  .middleware(middleware.guest())
