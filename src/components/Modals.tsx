import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { ModalType } from "../types";

type BaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  okText: string;
  desc: ReactNode;
};

const BaseModal = (props: BaseModalProps) => {
  const { isOpen, onClose, okText, title, desc } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{desc}</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={onClose}>
            {okText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const renderModal = (name: string, props: ModalProps) => {
  switch (name) {
    case ModalType.CANCEL:
      return (
        <BaseModal
          {...props}
          desc="Are you sure want to cancel order?"
          okText="Cancel Order"
          title="Cancel Order"
        />
      );
    case ModalType.REFUND:
      return (
        <BaseModal
          {...props}
          desc="Confirm refund money back to customer?"
          okText="Refund"
          title="Refund Order"
        />
      );
    case ModalType.RESEND_CONFIRM:
      return (
        <BaseModal
          {...props}
          desc="Send Confirmation email to customer?"
          okText="Send"
          title="Send confirmation email"
        />
      );
    case ModalType.RESEND_TRACKING:
      return (
        <BaseModal
          {...props}
          desc="Send tracking email to customer?"
          okText="Send"
          title="Send tracking email"
        />
      );
    default:
      return null;
  }
};
