
export class Order {
    id!: string;
    customerId!: string;

    constructor(id: string, customerId: string) {
        this.id = id;
        this.customerId = customerId;
    }
}