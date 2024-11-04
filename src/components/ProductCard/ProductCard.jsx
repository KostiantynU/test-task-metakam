import { AspectRatio, Badge, Box, Card, Flex, Heading, Skeleton, Text } from '@radix-ui/themes';
import { createDescription } from '../../utils/createDescription';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductsStatus } from '../../store/productsSlice/productsSelectors';

const ProductCard = ({
  el: {
    id,
    title,
    image,
    category,
    description,
    rating: { rate },
  },
}) => {
  const allProductsStatus = useSelector(selectProductsStatus);
  const location = useLocation();

  return (
    <li>
      <Link to={`/product/${id}`} className="product-link" state={{ from: location }}>
        <Card>
          <Skeleton loading={allProductsStatus === 'pending' ? true : false}>
            <Heading as="h2" size={{ initial: '2', sm: '5' }} mb={{ initial: '1', sm: '2' }}>
              {createDescription(title).join(' ')}
            </Heading>
          </Skeleton>
          <Skeleton loading={allProductsStatus === 'pending' ? true : false}>
            <AspectRatio ratio={3 / 4}>
              <img
                src={image}
                alt={category}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: 'var(--radius-2)',
                }}
              />
            </AspectRatio>
          </Skeleton>
          <Skeleton loading={allProductsStatus === 'pending' ? true : false}>
            <Flex justify={'between'}>
              <Text as="p" size={{ initial: '2', sm: '3' }} mt={{ initial: '2', sm: '4' }}>
                {createDescription(description).join(' ')}
              </Text>
              <Box>
                <Text as="p">Rating</Text>
                <Badge variant="soft">{rate}</Badge>
              </Box>
            </Flex>
          </Skeleton>
        </Card>
      </Link>
    </li>
  );
};

export default ProductCard;
