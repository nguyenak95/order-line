import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Image
} from "@chakra-ui/react";
import { OrderItemType } from "./types";
type OrderTableProps = {
  items: OrderItemType[];
};
const OrderTable = (props: OrderTableProps) => {
  const { items } = props;
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>PRODUCT</Th>
            <Th isNumeric>QUANTITY</Th>
            <Th isNumeric>PRICE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item) => (
            <Tr>
              <Td>
                <Image src={item.imgUrl} />
              </Td>
              <Td>{item.name}</Td>
              <Td isNumeric>{item.quantity}</Td>
              <Td isNumeric>${item.price}</Td>
            </Tr>
          ))}
          <Tr>
            <Td fontWeight="bold">Total: </Td>
            <Td></Td>
            <Td></Td>
            <Td isNumeric>
              $
              {items
                .reduce((total, item) => total + item.quantity * item.price, 0)
                .toFixed(2)}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default OrderTable;
