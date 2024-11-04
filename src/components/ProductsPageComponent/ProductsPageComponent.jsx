import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { usePhotoModalContext } from '../../utils/usePhotoModalContext';
import { getAllProducts } from '../../store/productsSlice/productsThunks';
import ProductCard from '../ProductCard/ProductCard';
import { ProductsListStyled } from './ProductsListStyled';
import { selectProducts } from '../../store/productsSlice/productsSelectors';

const ProductsPageComponent = () => {
  const allProducts = useSelector(selectProducts);
  const { isTablet } = usePhotoModalContext();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <ProductsListStyled isTablet={isTablet}>
      {allProducts.map(el => (
        <ProductCard el={el} key={el.id} />
      ))}
    </ProductsListStyled>
  );
};

export default ProductsPageComponent;
