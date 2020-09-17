import {OrderAddress, OrderCustomer} from "./IOrder";

export interface IOrderInput {
    title: string
    bookingDate: Date
    customer: OrderCustomer
    address: OrderAddress
}