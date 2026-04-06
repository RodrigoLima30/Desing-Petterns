import { z } from 'zod'

export const profileSchema = z.enum(['admin', 'user', 'guest'])

export type Profile = z.infer<typeof profileSchema>