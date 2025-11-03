import { FastifyReply, FastifyRequest } from "fastify";
import { createOrder } from "../composition/container";


export const OrdersController = {
    async create(req: FastifyRequest, reply: FastifyReply) {

        const { orderId, custumerId } = req.body as { orderId: string; custumerId: string; };

        const out = await createOrder.execute({ orderId, custumerId });

        reply.code(201).send(out);

    }
};