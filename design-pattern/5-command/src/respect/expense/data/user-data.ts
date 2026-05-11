import z from "zod"
import { roleSchema } from "./role-data";
    
export const userSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(5).max(255),
  email: z.string().email().min(3).max(255),
  role: roleSchema.optional()
})

export type UserProps = z.infer<typeof userSchema>