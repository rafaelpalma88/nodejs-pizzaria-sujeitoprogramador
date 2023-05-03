import {Request, Response} from 'express'
import { ListProductsService } from '../../services/product/ListProductsService';

class ListProductsController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const listProductsService = new ListProductsService();

    const products = await listProductsService.execute({
      category_id
    })

    return res.json(products)
  }
}

export { ListProductsController }