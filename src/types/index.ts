import { addTodoSchema, loginSchema, registerSchema } from "@/schemas";
import { z } from "zod";

export type RegisterType = z.infer<typeof registerSchema>;
export type UserType = Pick<RegisterType, "eMail" | "fullName" | "password">;
export type LoginType = z.infer<typeof loginSchema>;
export type AddTodoItemType = z.infer<typeof addTodoSchema>;
