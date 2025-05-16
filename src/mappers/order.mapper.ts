
import { IMapper } from "./IMapper";
import { OrderBuilder } from "../model/builders/order.builder";
import { IItem } from "../model/IItem.model";
import { Order } from "../model/Order.model";


export class OrderMapper implements IMapper<string[],Order>{
    constructor(private itemMapper: IMapper<string[],IItem>){

    }

    
    map(data:string[]) : Order{
        const item =this.itemMapper.map(data);
        return new OrderBuilder()
               .setItem(item)
                .setQuantity(parseInt(data[data.length-1]))
                .setPrice(parseFloat(data[data.length-2]))
                .setId(data[0])
                .build();
    }
}