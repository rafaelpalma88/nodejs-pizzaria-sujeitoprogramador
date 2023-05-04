import { prismaClient } from "../../prisma";

class ListOrderService {
  async execute() {

    const item = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false
      },
      orderBy: {
        created_at: 'desc'
      }
    })

    return item
  }
}

export { ListOrderService }