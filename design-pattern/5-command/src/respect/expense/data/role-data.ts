import { z } from 'zod';
import { profileSchema } from './profile-data';
import { featureSchema } from './feature-data';
import { permissionSchema } from './permission-data';

export const roleSchema = z.object({
  profile: profileSchema,
  features: z.object({
    feature: featureSchema,
    permissions: permissionSchema.array(),
  }).array(),
})

export type Role = z.infer<typeof roleSchema>

export const directorRoleDefault: Role = roleSchema.parse({
  profile: 'director',
  features: [{
    feature: 'uber',
    permissions: ['create', 'approve', 'reject', 'view'],
  }, {
    feature: 'alimento',
    permissions: ['create', 'approve', 'reject', 'view'],
  }, {
    feature: 'hotel',
    permissions: ['create', 'approve', 'reject', 'view'],
  }, {
    feature: 'combustivel',
    permissions: ['create', 'approve', 'reject', 'view'],
  }],
})

export const managerRoleDefault: Role = roleSchema.parse({
  profile: 'manager',
  features: [{
    feature: 'uber',
    permissions: ['approve', 'reject', 'view'],
  }, {
    feature: 'alimento',
    permissions: ['approve', 'reject', 'view'],
  }, {
    feature: 'hotel',
    permissions: ['approve', 'reject', 'view'],
  }, {
    feature: 'combustivel',
    permissions: ['approve', 'reject', 'view'],
  }],
})

export const employeeRoleDefault: Role = roleSchema.parse({
  profile: 'employee',
  features: [{
    feature: 'uber',
    permissions: ['create', 'view'],
  }, {
    feature: 'alimento',
    permissions: ['create', 'view'],
  }, {
    feature: 'hotel',
    permissions: ['create', 'view'],
  }, {
    feature: 'combustivel',
    permissions: ['create', 'view'],
  }],
})

