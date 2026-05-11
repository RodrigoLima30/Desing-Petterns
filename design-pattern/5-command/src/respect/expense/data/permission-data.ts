import { z } from 'zod'

export const permissionSchema = z.enum(['create', 'approve', 'reject', 'view'])

export type Permission = z.infer<typeof permissionSchema>