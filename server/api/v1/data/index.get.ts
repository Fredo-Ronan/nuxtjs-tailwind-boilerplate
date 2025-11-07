import { prisma } from "~~/server/utils/prisma"

export default defineEventHandler(async (event) => {
    const accounts = await prisma.account.findMany();

    return accounts;
})