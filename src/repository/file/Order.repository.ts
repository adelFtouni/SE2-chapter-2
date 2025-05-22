import { IOrder } from "model/IOrder.model";
import { ID, IRepository } from "repository/IRepository";
import { ItemInvalidException, ItemNotFoundException } from "util/exceptions/repositoryExceptions";
import logger from "util/logger";

export abstract class OrderRepository implements IRepository<IOrder> {
    abstract load(): Promise<IOrder[]> 
    abstract save(orders : IOrder[]): Promise<void> 
    async create(item: IOrder): Promise<ID> {
        if(!item){
            throw new ItemInvalidException("item cannot be null");
        }
        const orders = await this.load();
        const id = orders.push(item);
        return {getId:() => String(id)}
    }

    async get(id: ID): Promise<IOrder> {
        const orders = await this.load();
        const foundIOrder = orders.find((o)=> o.getId() === id.getId());
        if(!foundIOrder) {
            logger.error(`IOrder with id ${id.getId()} not found`);
            throw new ItemNotFoundException("IOrder not found");
        }
        return foundIOrder;
    }

    async getAll(): Promise<IOrder[]> {
        return this.load();
    }

    async update(item: IOrder): Promise<void> {
        if(!item){
            logger.error("Item cannot be null");
            throw new ItemInvalidException("item cannot be null");
        }
        const orders = await this.load();
        const foundIOrder = orders.find((o)=> o.getId() === item.getId());
        if(!foundIOrder) {
            logger.error(`IOrder with id ${item.getId()} not found`);
            throw new ItemNotFoundException("IOrder not found");
        }
        const index = orders.indexOf(foundIOrder);
        orders[index] = item;
        await this.save(orders);
    }

    async delete(id: ID): Promise<void> {
        const orders = await this.load();
        const index = orders.findIndex((o) => o.getId() === id.getId());
        if (index === -1) {
            logger.error(`IOrder with id ${id.getId()} not found`);
            throw new ItemNotFoundException("IOrder not found");
        }
        orders.splice(index, 1);
        await this.save(orders);
    }
}
