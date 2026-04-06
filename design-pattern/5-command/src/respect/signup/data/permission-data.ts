import { z } from 'zod'

export const permissionSchema = z.enum(['read', 'write', 'delete'])

export type Permission = z.infer<typeof permissionSchema>