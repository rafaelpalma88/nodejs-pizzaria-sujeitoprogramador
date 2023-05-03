import { prismaClient } from "../../prisma";

interface ListProductsRequest {
  category_id: string;
}

class ListProductsService {
  async execute({ category_id }: ListProductsRequest) {

    const product = await prismaClient.product.findMany({
      where: {
        category_id: category_id
      }
    })

    return product
  }
}

export { ListProductsService }