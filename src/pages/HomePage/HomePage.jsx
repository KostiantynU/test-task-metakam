import { Box, Heading } from '@radix-ui/themes';

const HomePage = () => {
  return (
    <Box minHeight={'60vh'}>
      <Heading as="h2" size={{ initial: '5', sm: '8' }}>
        The description
      </Heading>
      <ul style={{ margin: '10px', padding: '0 10px' }}>
        <li>
          I have beend used such technologies like JS, React, React-Redux, React-Router-Dom, Radix
          Theme.
        </li>
        <li>
          I made a product page with list of products from "fake API". This API doesn't support
          pagination.
        </li>
        <li>
          Each item in the list is a link that leads to a page of detailed infromation about the
          product
        </li>
        <li>
          On the detailed page you can read the product description and also see an enlarged image
          in the modal window. I used the custom component, beacuse I couldn't find a solution from
          Radix Theme, which satisfys me. Modal window will be closed if user click in background,
          or press Esc button.
        </li>
        <li>The product description page contains the "Go back" button.</li>
        <li>
          In addition, on the product description page you can add a product to your cart - if you
          like a product and want to buy it.
        </li>
        <li>
          In the basket you can see the products that you choose - see the quantity, the sum of
          products price if you add more than one product to a cart. I added a small badge for
          better user experience - user can see a number of product that he has added to the cart.
        </li>
        <li>
          All changes to the cart are stored in Redux Store - with the server we can use a DB. Also
          in the full version of program we can use the users DB for saving information about users,
          and the user statistic.
        </li>
        <li>
          I spent some time with reading documentation about Radix Theme - I have worked with
          Tailwind a bit before, so understanding the Radix Theme wasn't difficult. But, in any
          case, this is new library for me, so it was very interesting and took some time.
        </li>
        <li>This test task doesn't has the "Buy" button. ;-)</li>
      </ul>
    </Box>
  );
};

export default HomePage;
