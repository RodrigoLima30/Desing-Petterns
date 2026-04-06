import { z } from 'zod'
import { profileSchema } from './profile-data'
import { featureSchema } from './feature-data'
import { permissionSchema } from './permission-data'

export const roleSchema = z.object({
  profile: profileSchema,
  features: z.object({
    feature: featureSchema,
    permissions: permissionSchema.array(),
  }).array(),
})

export type Role = z.infer<typeof roleSchema>

export const adminRoleDefault: Role = roleSchema.parse({
  profile: 'admin',
  features: [{
    feature: 'dashboard',
    permissions: ['read', 'write', 'delete'],
  }, {
    feature: 'reports',
    permissions: ['read', 'write', 'delete'],
  }, {
    feature: 'settings',
    permissions: ['read', 'write', 'delete'],
  }],
})

export const userRoleDefault: Role = roleSchema.parse({
  profile: 'user',
  features: [{
    feature: 'dashboard',
    permissions: ['read'],
  }, {
    feature: 'reports',
    permissions: ['read'],
  }, {
    feature: 'settings',
    permissions: [],
  }],
})

export const guestRoleDefault: Role = roleSchema.parse({
  profile: 'guest',
  features: [{
    feature: 'dashboard',
    permissions: [],
  }, {
    feature: 'reports',
    permissions: [],
  }, {
    feature: 'settings',
    permissions: [],
  }],
})