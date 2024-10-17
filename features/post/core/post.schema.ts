import { z } from "zod";
import { M } from "@/constants/MOCK";

export const createPostDefaultValues = M.post.formData
  ? {
      assignee: 2,
      task: "PlateauMed standup meeting",
    }
  : {
      assignee: -1,
      task: "",
    };

export const createPostSchema = z.object({
  assignee: z.coerce.number().positive(),
  task: z.string().min(2),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;
