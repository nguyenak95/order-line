import {
  Box,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { fakePost } from "../api";
import { OrderDataType } from "../types";

type EditOrderPageProps = {
  isOpen: boolean;
  onClose: () => void;
  orderData: OrderDataType;
  setOrderData: Dispatch<SetStateAction<OrderDataType | undefined>>;
};

const EditOrderPage = (props: EditOrderPageProps) => {
  const { isOpen, onClose, orderData, setOrderData } = props;

  const { control, handleSubmit, reset } = useForm({
    defaultValues: orderData
  });
  const { fields, remove } = useFieldArray({
    control,
    name: "items"
  });
  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = (data: OrderDataType) => {
    const updatedTime = +new Date()
    data.updatedDate = updatedTime
    fakePost(data);
    setOrderData(data);
    onClose()
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>Edit order</DrawerHeader>

        <DrawerBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Shipping Address</FormLabel>
            <Controller
              name="shippingAddress"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}
            />
            <FormLabel>Customer Name</FormLabel>
            <Controller
              name="customerName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}
            />
            <FormLabel>City</FormLabel>
            <Controller
              name="city"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}
            />
            <FormLabel>State</FormLabel>
            <Controller
              name="state"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} />}
            />
            <FormLabel>Zipcode</FormLabel>
            <Controller
              name="zip"
              rules={{ required: true }}
              control={control}
              render={({ field }) => <Input {...field} />}
            />

            <FormLabel>Order Items</FormLabel>
            <ul>
              {fields.map((field, index) => (
                <li key={index}>
                  <Box display="flex" justifyContent="space-between">
                    {field.name}
                    <Text
                      as="span"
                      onClick={() => remove(index)}
                      cursor="pointer"
                    >
                      X
                    </Text>
                  </Box>
                  <p>
                    <Controller
                      rules={{ required: true }}
                      render={({ field }) => <Input {...field} />}
                      name={`items.${index}.quantity`}
                      control={control}
                    />
                  </p>
                </li>
              ))}
            </ul>
          </form>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default EditOrderPage;
