import fastify from "fastify";
import { OrdersController } from "./OrdersController";


export async function buildServer() {
    const app = fastify();

    app.post("/orders", OrdersController.create);
    // app.get("/orders/:id", OrdersController.get);
    return app;

}