import { Request, Response } from 'express'
import { ListOrderService } from '../../services/order/ListOrderService';

class ListOrderController {
  async handle(req: Request, res: Response) {
    const table_id = req.query.table_id as string;

    const listOrderService = new ListOrderService();

    const orders = await listOrderService.execute()

    return res.json(orders)
  }
}

export { ListOrderController }