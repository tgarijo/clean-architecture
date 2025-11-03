import { CreateOrder } from "src/application/uses-cases/CreateOrder";
import { InMemoryOrderRepository } from "../persistence/InMemoryOrderRepository";


const repo = new InMemoryOrderRepository();

export const createOrder = new CreateOrder(repo);