
export interface IOrder {
    uid: string
    title: string
    bookingDate: Date
    customer: OrderCustomer
    address: OrderAddress
}

export type OrderCustomer = {
    email: string
    phone: string
    name: string
}

export type OrderAddress = {
    city: string
    country: string
    street: string
    zip: string
}