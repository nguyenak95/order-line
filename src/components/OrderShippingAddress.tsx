import { Text, Box, Tag } from "@chakra-ui/react";
import { OrderDataType } from "./types";

type OrderShippingAddressProps = {
  orderData: OrderDataType;
};

const OrderShippingAddress = (props: OrderShippingAddressProps) => {
  const { orderData } = props;
  return (
    <Box textAlign="left" paddingLeft="6" paddingTop="6">
      <Text as="b">SHIPPING ADDRESS</Text>
      <Text>{orderData.customerName}</Text>
      <Text>{orderData.shippingAddress}</Text>
      <Text>
        {orderData.city}, {orderData.state} {orderData.zip}
      </Text>
      <Box paddingY="3">
        {orderData.tags.map((tag) => (
          <Tag marginRight="1" borderRadius="full" backgroundColor="#d1d1d1">
            <b>{tag}</b>
          </Tag>
        ))}
      </Box>
    </Box>
  );
};
export default OrderShippingAddress;
