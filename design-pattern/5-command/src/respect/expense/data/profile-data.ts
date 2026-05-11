import { z } from 'zod'

export const  profileSchema = z.enum(['employee', 'manager', 'director'])

export type Profile = z.infer<typeof profileSchema>