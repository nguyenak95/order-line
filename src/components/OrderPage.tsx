import { Box, Button, ButtonProps, Text } from "@chakra-ui/react";
import { OrderDataType } from "../types";
import OrderTable from "./OrderTable";
import OrderShippingAddress from "./OrderShippingAddress";
import { renderModal } from "./Modals";
import { format } from "date-fns";
import { useState } from "react";
import { ModalType } from "../types";

type OrderPageProps = {
  data: OrderDataType;
};

const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      backgroundColor="#757575"
      color="white"
      _hover={{ bg: "black" }}
      marginRight="2"
      {...props}
    />
  );
};

const OrderPage = (props: OrderPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState(ModalType.CANCEL);
  const { data } = props;

  const handleOpenModal = (name: ModalType) => () => {
    setModalName(name);
    setIsModalOpen(true);
  };

  return (
    <Box display="flex" flexDirection="column" padding="6rem" maxWidth="59rem">
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <div>
          <b>Order </b>
          {data.code}
        </div>
        <Box textAlign="right">
          <Text as="p">
            Created on {format(data.createdDate, "LLL do yyyy")}
          </Text>
          <Text as="p">
            Last updated on {format(data.updatedDate, "LLL do yyyy")}
          </Text>
        </Box>
      </Box>
      <Box backgroundColor="white" padding="3">
        <Box>
          <OrderTable items={data.items} />
          <OrderShippingAddress orderData={data} />
        </Box>
        <Box border="solid 1px #E2E8F0" my="3" />
        <Box textAlign="left" paddingLeft="6">
          <CustomButton onClick={handleOpenModal(ModalType.CANCEL)}>
            Cancel
          </CustomButton>
          <CustomButton onClick={handleOpenModal(ModalType.REFUND)}>
            Refund
          </CustomButton>
          <CustomButton onClick={handleOpenModal(ModalType.RESEND_CONFIRM)}>
            Resend Confirmation
          </CustomButton>
          <CustomButton onClick={handleOpenModal(ModalType.RESEND_TRACKING)}>
            Resend Tracking
          </CustomButton>
        </Box>
      </Box>
      {renderModal(modalName, {
        isOpen: isModalOpen,
        onClose: () => setIsModalOpen(false)
      })}
    </Box>
  );
};

export default OrderPage;
