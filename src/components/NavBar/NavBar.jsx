import { TabNav, Text } from '@radix-ui/themes';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectCurrentBasket } from '../../store/productsSlice/productsSelectors';

const NavBar = () => {
  const { pathname } = useLocation();
  const currentBasket = useSelector(selectCurrentBasket);

  return (
    <>
      <TabNav.Root size={{ initial: '1', sm: '2' }}>
        <TabNav.Link asChild active={pathname === '/'}>
          <Link to={'/'}>Home</Link>
        </TabNav.Link>
        <TabNav.Link asChild active={pathname === '/products'}>
          <Link to={'/products'}>Products</Link>
        </TabNav.Link>
        <TabNav.Link asChild active={pathname === '/basket'}>
          <Link to={'/basket'} style={{ position: 'relative' }}>
            Basket
            <Text style={{ position: 'absolute', top: '-29%', right: '0', fontSize: '10px' }}>
              {currentBasket.length ? currentBasket.length : null}
            </Text>
          </Link>
        </TabNav.Link>
      </TabNav.Root>
    </>
  );
};

export default NavBar;
