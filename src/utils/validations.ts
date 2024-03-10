import { z } from 'zod'

// Use zod to validate the username and password. Seems overkill for this simple example, but it's a good practice to use a schema for validation.
export function validateLoginInput(email: string, password: string): boolean {
  const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string(),
  })

  // validate Email & Password
  try {
    loginSchema.parse({ email, password })
  } catch (e: any) {
    return false
  }
  return true
}
