import { Box, Button, Flex, Portal, Skeleton } from '@radix-ui/themes';
import { useSelector } from 'react-redux';
import { usePhotoModalContext } from '../../utils/usePhotoModalContext';
import { useCallback, useEffect, useRef } from 'react';
import { ProductImgStyled } from '../../components/ProductsPageComponent/ProductsListStyled';
import { selectOneProductStatus } from '../../store/productsSlice/productsSelectors';

const PhotoModal = ({ image, alt }) => {
  const oneProductStatus = useSelector(selectOneProductStatus);
  const { closePhotoModal } = usePhotoModalContext();

  const escKeyCloseModal = useCallback(
    ev => {
      if (ev.code === 'Escape') {
        closePhotoModal();
      }
    },
    [closePhotoModal]
  );

  const preventClickOnPortal = e => {
    e.stopPropagation();
  };

  const modalBox = useRef(document.getElementById('portalComponent'));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.addEventListener('keydown', escKeyCloseModal);

    return () => {
      document.body.style.overflow = 'visible';
      document.body.removeEventListener('keydown', escKeyCloseModal);
    };
  });

  return (
    <Portal container={modalBox.current}>
      <Box
        style={{
          position: 'absolute',
          width: '80%',
          height: '80%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'var(--olive-a2)',
        }}
        onClick={preventClickOnPortal}
      >
        <Flex justify={'end'}>
          <Button onClick={closePhotoModal}>X</Button>
        </Flex>

        <Skeleton loading={oneProductStatus === 'pending' ? true : false}>
          <Flex justify={'center'}>
            <ProductImgStyled src={image} alt={alt} />
          </Flex>
        </Skeleton>
      </Box>
    </Portal>
  );
};

export default PhotoModal;
