import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Skeleton,
  Text,
} from '@radix-ui/themes';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getOneProduct } from '../../store/productsSlice/productsThunks';
import { usePhotoModalContext } from '../../utils/usePhotoModalContext';
import PhotoModal from '../../layouts/PhotoModal';
import {
  selectOneProduct,
  selectOneProductStatus,
} from '../../store/productsSlice/productsSelectors';
import { addToCurrentBasket } from '../../store/productsSlice/productsSlice';

const ProductDetails = () => {
  const { productId } = useParams();
  const productInstance = useSelector(selectOneProduct);
  const oneProductStatus = useSelector(selectOneProductStatus);
  const dispatch = useDispatch();
  const { title = '', image = '', category = '', description = '', rating } = productInstance;
  const location = useLocation();
  const navigate = useNavigate();
  const { isPhotoModalOpen, openPhotoModal } = usePhotoModalContext();

  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, [productId, dispatch]);

  if (!productInstance) {
    return (
      <Grid columns={'1'} rows={'1'} minHeight={'60vh'}>
        <Text as="p">Current product doesn't exist!</Text>
      </Grid>
    );
  }

  const handleGoBackButtonClick = () => {
    navigate(location.state?.from ?? '/products');
  };

  const handleAddToBasketClick = () => {
    dispatch(addToCurrentBasket({ ...productInstance, quantity: 1 }));
  };

  return (
    <>
      <Flex justify={'end'}>
        <Button
         
          variant="solid"
          loading={oneProductStatus === 'pending' ? true : false}
          onClick={handleGoBackButtonClick}
        >
          Go back
        </Button>
      </Flex>
      <Grid columns={'2'} rows={'2'}>
        <Box gridColumnStart={'1'} gridRowStart={'1'} gridRowEnd={{ initial: '2', sm: '3' }}>
          <Skeleton loading={oneProductStatus === 'pending' ? true : false}>
            <AspectRatio ratio={1}>
              <img
                onClick={openPhotoModal}
                src={image}
                alt={category}
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'var(--radius-2)',
                }}
              />
            </AspectRatio>
          </Skeleton>
        </Box>
        <Box gridColumnStart={'2'} p={{ initial: '3', sm: '5' }}>
          <Skeleton loading={oneProductStatus === 'pending' ? true : false}>
            <Heading as="h2" size={{ initial: '4', sm: '6' }} mb={{ initial: '2', sm: '5' }}>
              {title}
            </Heading>
          </Skeleton>
          <Skeleton loading={oneProductStatus === 'pending' ? true : false}>
            <Text as="p" size={{ initial: '2', sm: '5' }} mb={{ initial: '1', sm: '2' }}>
              {description}
            </Text>
          </Skeleton>
          <Skeleton loading={oneProductStatus === 'pending' ? true : false}>
            <Flex justify={'end'}>
              <Text as="p">Rating</Text>
              <Badge variant="soft">{rating?.rate ? rating.rate : false}</Badge>
            </Flex>
          </Skeleton>
        </Box>
        <Skeleton loading={oneProductStatus === 'pending' ? true : false}>
          <Flex justify={'end'} gridColumnStart={'2'} gridRowStart={'2'} pr={'1'}>
            <Button onClick={handleAddToBasketClick}>Add to basket</Button>
          </Flex>
        </Skeleton>
        {isPhotoModalOpen ? <PhotoModal image={image} alt={category} /> : null}
      </Grid>
    </>
  );
};

export default ProductDetails;
