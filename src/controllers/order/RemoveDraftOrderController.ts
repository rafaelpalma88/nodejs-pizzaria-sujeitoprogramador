import { Request, Response } from 'express'
import { RemoveDraftOrderService } from '../../services/order/RemoveDraftOrderService';

class RemoveDraftOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const removeDraftOrderService = new RemoveDraftOrderService();

    const order = await removeDraftOrderService.execute({
      order_id
    })

    return res.json(order)
  }
}

export { RemoveDraftOrderController }