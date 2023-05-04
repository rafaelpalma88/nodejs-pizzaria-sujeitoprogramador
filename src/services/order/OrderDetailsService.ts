import { prismaClient } from "../../prisma";

interface OrderDetails {
  order_id: string;
}

class OrderDetailsService {
  async execute({ order_id }: OrderDetails) {

    const item = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: true,
        order: true
      }
    })

    return item
  }
}

export { OrderDetailsService }