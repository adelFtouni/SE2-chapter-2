import { OrderRepository } from "./Order.repository";
import { readCSVFile, writeCSVFile } from "parsers/csvParser";

import { OrderMapper } from "mappers/order.mapper";
import { CSVCakeMapper } from "mappers/cake.mapper";
import { IOrder } from "model/IOrder.model";

export class CakeOrderRepository extends OrderRepository {
  constructor(private readonly filePath: string) {
    super();
  }
  async load(): Promise<IOrder[]> {
    const csv = await readCSVFile(this.filePath);
    const cakeMapper = new CSVCakeMapper();
    const orderMapper = new OrderMapper(cakeMapper);
    const cakesOrders = csv.map(orderMapper.map.bind(orderMapper));
    return cakesOrders;
  }
  async save(orders: IOrder[]): Promise<void> {
    const headers = [
      "id",
      "Type",
      "Flavor",
      "Filling",
      "Size",
      "Layers",
      "Frosting Type",
      "Frosting Flavor",
      "Decoration Type",
      "Decoration Color",
      "Custom Message",
      "Shape",
      "Allergies",
      "Special Ingredients",
      "Packaging Type",
      "Price",
      "Quantity"
    ];

    const rowItems = orders.map((order) => new OrderMapper(new CSVCakeMapper()).reverseMap(order));

     await writeCSVFile(this.filePath, [headers,...rowItems]);
  }
 
}
