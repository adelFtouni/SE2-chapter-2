import { IMapper } from "./IMapper";
import { OrderBuilder } from "../model/builders/order.builder";
import { IItem } from "../model/IItem.model";

import { IOrder } from "model/IOrder.model";

export class OrderMapper implements IMapper<string[], IOrder> {
  constructor(private itemMapper: IMapper<string[], IItem>) {}

  map(data: string[]): IOrder {
    const item = this.itemMapper.map(data);
    return new OrderBuilder()
      .setItem(item)
      .setQuantity(parseInt(data[data.length - 1]))
      .setPrice(parseFloat(data[data.length - 2]))
      .setId(data[0])
      .build();
  }
  reverseMap(data: IOrder): string[] {
    // here reverseMap is used to convert the order object back to a string array
    //and it is called from the cake.mapper 
    // after that when we have a cake order as a string[] we combine it the the id,quantity and price
    const item = this.itemMapper.reverseMap(data.getItem());
    return [
      data.getId(),
      ...item,
      data.getPrice().toString(),
      data.getQuantity().toString(),
    ];
  }
}
