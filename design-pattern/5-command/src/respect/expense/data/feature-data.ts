import { z } from 'zod'

export const featureSchema = z.enum(['uber', 'alimento', 'hotel', 'combustivel'])

export type Feature = z.infer<typeof featureSchema>