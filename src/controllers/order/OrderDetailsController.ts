import { Request, Response } from 'express'
import { OrderDetailsService } from '../../services/order/OrderDetailsService';

class OrderDetailsController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const orderDetailsService = new OrderDetailsService();

    const order = await orderDetailsService.execute({order_id})

    return res.json(order)
  }
}

export { OrderDetailsController }