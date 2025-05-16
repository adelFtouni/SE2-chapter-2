import { IItem } from "../../model/IItem.model";
import { Order } from "../../model/Order.model";

export class OrderBuilder {
  private item!: IItem;
  private price!: number;
  private quantity!: number;
  private id!: string;

  setItem(item: IItem): OrderBuilder {
    this.item = item;
    return this;
  }

  setQuantity(quantity: number): OrderBuilder {
    this.quantity = quantity;
    return this;
  }

  setPrice(price: number): OrderBuilder {
    this.price = price;
    return this;
  }

  setId(id: string): OrderBuilder {
    this.id = id;
    return this;
  }

  build(): Order {
    if (
      !this.item ||
      this.quantity === undefined ||
      this.price === undefined ||
      !this.id
    ) {
      throw new Error("Missing required properties to build Order");
    }
    return new Order(this.item, this.quantity, this.price, this.id);
  }
}
