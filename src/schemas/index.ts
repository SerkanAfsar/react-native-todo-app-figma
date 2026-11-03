import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string({ error: "Enter Name Surname" })
      .min(1, { error: "Enter Name Surname" }),

    eMail: z.email({ error: "Enter Your EMail" }),
    password: z
      .string({ error: "Enter Your Password" })
      .min(1, { error: "Enter Your Password" }),
    rePassword: z
      .string({ error: "Password Again" })
      .min(1, { error: "Password Again" }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Again Password Error",
    path: ["rePassword"],
  });

export const loginSchema = z.object({
  eMail: z.email({ error: "Enter Your EMail..." }),
  password: z
    .string({ error: "Enter Your Password" })
    .min(1, { error: "Enter Your Password" }),
});

export const addTodoSchema = z.object({
  title: z.string({ error: "Enter title" }).min(1, { error: "Enter Title" }),
  isDone: z.boolean(),
});
