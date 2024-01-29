export interface Books {
}

export interface cart{
  orderPrice: any;
  quantity: any;
  bookName:any;

}


export interface OrderItem {
  id: number;
  productName: string;
  quantity: number;
  totalPrice: number;
  modeOfPayment: string;
  deliveryDate: string;
  purchaseDate: string;
  status: string;
}
