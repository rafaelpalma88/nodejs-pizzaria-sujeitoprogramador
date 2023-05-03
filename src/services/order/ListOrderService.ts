import { prismaClient } from "../../prisma";

class ListOrderService {
  async execute() {

    const item = await prismaClient.order.findMany({
      where: {
        draft: false
      }
    })

    return item
  }
}

export { ListOrderService }