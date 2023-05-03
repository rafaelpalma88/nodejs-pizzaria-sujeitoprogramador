import { prismaClient } from "../../prisma";

interface DeleteItemsRequest {
  item_id: string;
}

class DeleteItemService {
  async execute({ item_id }: DeleteItemsRequest) {

    const item = await prismaClient.item.delete({
      where: {
        id: item_id
      }
    })

    return item
  }
}

export { DeleteItemService }