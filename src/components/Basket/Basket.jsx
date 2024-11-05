import { Box, Button, Flex, Heading, Table } from '@radix-ui/themes';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentBasket } from '../../store/productsSlice/productsSelectors';
import {
  addToCurrentBasket,
  removeFromCurrentBasket,
  removeOneFromCurrentBasket,
} from '../../store/productsSlice/productsSlice';

const Basket = () => {
  const basketInStore = useSelector(selectCurrentBasket);
  const dispatch = useDispatch();

  if (!basketInStore || basketInStore.length === 0) {
    return (
      <Flex minHeight={'60vh'}>
        <Heading as="h2" size={{ initial: '2', sm: '5' }}>
          Your basket is empty - go to product page and choose!
        </Heading>
      </Flex>
    );
  }

  const deleteThingInBasket = id => {
    dispatch(removeFromCurrentBasket(id));
  };

  return (
    <Box minHeight={'60vh'}>
      <Heading as="h2" size={{ initial: '2', sm: '5' }}>
        Your choosen things
      </Heading>
      <Table.Root size={{ initial: '1', sm: '2' }}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell width={{ initial: '30px', sm: '40px' }}>
              Number
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Change quantity</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Delete</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {basketInStore.map((el, indx) => {
            return (
              <>
                <Table.Row key={el.id}>
                  <Table.RowHeaderCell>{indx + 1}</Table.RowHeaderCell>
                  <Table.Cell>{el.title}</Table.Cell>
                  <Table.Cell>{Number(el.price) * Number(el.quantity)}</Table.Cell>
                  <Table.Cell>{el.quantity}</Table.Cell>
                  <Table.Cell>
                    <Button
                      size={{ initial: '1', sm: '5' }}
                      onClick={() => dispatch(addToCurrentBasket({ ...el, quantity: 1 }))}
                    >
                      +
                    </Button>
                    <Button
                      size={{ initial: '1', sm: '5' }}
                      onClick={() => dispatch(removeOneFromCurrentBasket(el.id))}
                    >
                      -
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      size={{ initial: '1', sm: '5' }}
                      onClick={() => deleteThingInBasket(el.id)}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </>
            );
          })}
          <Table.Row>
            <Table.RowHeaderCell>Total</Table.RowHeaderCell>
            <Table.Cell></Table.Cell>
            <Table.Cell>
              {basketInStore.reduce((acuum, el) => {
                return acuum + el.price * el.quantity;
              }, 0)}
            </Table.Cell>
            <Table.Cell>
              {basketInStore.reduce((acuum, el) => {
                return acuum + el.quantity;
              }, 0)}
            </Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default Basket;
