import { prismaClient } from "@/lib/prisma/prisma.config";

export class AccountService {
  static async getAll() {
    // const newUser = await prismaClient.user.create({
    //   data: {
    //     name: "Elliott",
    //     email: "xelliottx@example-user.com",
    //   },
    // });

    const users = await prismaClient.user.findMany();
    console.log("🚀 ~ AccountService ~ getAll ~ users:", users)
  }
}
