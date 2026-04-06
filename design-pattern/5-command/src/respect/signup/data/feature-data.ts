import { z } from 'zod'

export const featureSchema = z.enum(['dashboard', 'reports', 'settings'])

export type Feature = z.infer<typeof featureSchema>