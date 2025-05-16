import { IItem } from "./IItem.model";

export interface IOrder {
    getItem():IItem,
    getQuantity():number,
    getPrice():number,
    getId():string
}