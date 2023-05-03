import { prismaClient } from "../../prisma";

interface AddItemsRequest {
  order_id: string;
  product_id: string;
  amount: number
}

class AddItemsService {
  async execute({ order_id, product_id, amount }: AddItemsRequest) {

    const item = await prismaClient.item.create({
      data: {
        order_id: order_id, 
        product_id: product_id,
        amount: amount
      }
    })

    return item
  }
}

export { AddItemsService }