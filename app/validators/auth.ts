import vine from '@vinejs/vine'

export const registerValidation = vine.compile(
  vine.object({
    username: vine
      .string()
      .trim()
      .minLength(2)
      .unique(async (db, value, field) => {
        const user = await db.from('users').where('username', value).first()
        return !user
      }),
    email: vine
      .string()
      .email()
      .unique(async (db, value, field) => {
        const user = await db.from('users').where('email', value).first()
        return !user
      }),
    password: vine.string().minLength(6),
  })
)

export const loginValidation = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string(),
  })
)
