import "./styles.css";
import View from "./components/OrderPage";
import Edit from "./components/EditOrderPage";
import { useEffect, useState } from "react";
import { fakeGet } from "./api";
import { OrderDataType } from "./types";
import Loading from "./components/Loading";
import { Button, useDisclosure } from "@chakra-ui/react";

export default function App() {
  const [orderData, setOrderData] = useState<OrderDataType>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const data = fakeGet();
    setOrderData(data);
  }, []);

  return orderData ? (
    <div className="App">
      <Button onClick={onOpen}>Edit Order</Button>
      <View data={orderData} />
      <Edit
        isOpen={isOpen}
        onClose={onClose}
        orderData={orderData}
        setOrderData={setOrderData}
      />
    </div>
  ) : (
    <Loading />
  );
}
