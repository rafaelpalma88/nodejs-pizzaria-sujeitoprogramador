import { Request, Response } from 'express'
import { DeleteOrderService } from '../../services/order/DeleteOrderService';

class DeleteOrderController {
  async handle(req: Request, res: Response) {
    const table_id = req.query.table_id as string;

    const deleteOrderService = new DeleteOrderService();

    const order = await deleteOrderService.execute({
      table_id
    })

    return res.json(order)
  }
}

export { DeleteOrderController }