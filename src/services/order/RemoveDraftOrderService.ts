import { prismaClient } from "../../prisma";

interface RemoveDraftOrderRequest {
  order_id: string;
}

class RemoveDraftOrderService {
  async execute({ order_id }: RemoveDraftOrderRequest) {

    const order = await prismaClient.order.update({
      data: {
        draft: false
      },
      where: {
        id: order_id
      }
    })

    return order
  }
}

export { RemoveDraftOrderService }