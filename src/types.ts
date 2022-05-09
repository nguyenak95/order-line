export type OrderDataType = {
  items: OrderItemType[];
  code: string;
  customerName: string;
  shippingAddress: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  tags: string[];
  createdDate: number;
  updatedDate: number;
};

export type OrderItemType = {
  name: string;
  quantity: number;
  price: number;
  imgUrl: string;
};

export enum ModalType {
  CANCEL = "CANCEL",
  REFUND = "REFUND",
  RESEND_CONFIRM = "RESEND_CONFIRM",
  RESEND_TRACKING = "RESEND_TRACKING"
}
