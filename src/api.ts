import { OrderDataType } from "./types";
const fakeData: OrderDataType = {
  items: [
    {
      name: "Ultricies Nibh",
      quantity: 2,
      price: 17.98,
      imgUrl: "https://i.ibb.co/0fzcjdw/Crop-Reviver-1.png"
    },
    {
      name: "Fringilla Sollicitudin Consectetur",
      quantity: 1,
      price: 14.99,
      imgUrl: "https://i.ibb.co/1bH4m7S/LM-Blade-1.png"
    }
  ],
  code: "US5426899",
  customerName: "Ryan Fralick",
  shippingAddress: "1489 DESERT SPRINGS AVE",
  city: "RICHLAND",
  state: "Washington",
  zip: "99352",
  country: "United States",
  tags: ["SUBSCRIPTION_ORDER", "PAID", "UNFULFULLED"],
  createdDate: +new Date("03/06/2021"),
  updatedDate: +new Date("03/06/2021")
};

export const fakeGet = (): OrderDataType => {
  const data = localStorage.getItem("orderData");

  if (data) {
    const toObject = JSON.parse(data);
    return toObject;
  }

  return fakeData;
};

export const fakePost = (data: Partial<OrderDataType>) => {
  localStorage.setItem("orderData", JSON.stringify(data));
};
