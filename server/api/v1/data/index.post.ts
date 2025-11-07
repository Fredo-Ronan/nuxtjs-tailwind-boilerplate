import { prisma } from "~~/server/utils/prisma"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)

    const resultInsert = await prisma.account.create({
        data: {
            username: body.username,
            password: body.password,
            email: body.email,
            active: 1
        }
    })

    return { body }
})