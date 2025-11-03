import { Order } from "src/domain/entities/Order";
import { OrderRepository } from "../ports/OrderRepository";


export type CreateOrderInput = {
    orderId: string;
    custumerId: string;
};

export type CreateOrderOutput ={ orderId: string; };

export class CreateOrder {

    constructor(private readonly orderRepository: OrderRepository) {}

    async execute({ orderId, custumerId}: CreateOrderInput): Promise<CreateOrderOutput> {

        const exists = await this.orderRepository.findById(orderId);
        if(exists) throw new Error("Order already exists");
        const order = new Order(orderId, custumerId);
        await this.orderRepository.save(order);
        return { orderId: order.id };
    }

}
