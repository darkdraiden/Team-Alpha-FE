export interface Books {
}

export interface cart{
  price: any;
  quantity: any;
  bookName:any;
  bookId:any;
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
