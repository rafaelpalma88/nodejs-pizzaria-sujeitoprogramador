import { prismaClient } from "../../prisma";

interface DeleteOrderRequest {
  table_id: string;
}

class DeleteOrderService {
  async execute({ table_id }: DeleteOrderRequest) {

    try {

      const order = await prismaClient.order.delete({
        where: {
          id: table_id, 
        }
      })

      return order

    } catch(error) {
      throw new Error("Error deleting order")

    }
    
  }
}

export { DeleteOrderService }