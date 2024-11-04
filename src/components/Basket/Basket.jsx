import { Button, Flex, Heading, Table } from '@radix-ui/themes';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentBasket } from '../../store/productsSlice/productsSelectors';
import { removeFromCurrentBasket } from '../../store/productsSlice/productsSlice';

const Basket = () => {
  const basketInStore = useSelector(selectCurrentBasket);
  const dispatch = useDispatch();

  if (!basketInStore || basketInStore.length === 0) {
    return (
      <Flex minHeight={'80vh'}>
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
    <>
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
                  <Table.Cell>{el.price * el.quantity}</Table.Cell>
                  <Table.Cell>{el.quantity}</Table.Cell>
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
                return acuum + el.price;
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
    </>
  );
};

export default Basket;
