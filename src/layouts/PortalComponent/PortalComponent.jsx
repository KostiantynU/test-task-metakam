import { Box } from '@radix-ui/themes';
import { usePhotoModalContext } from '../../utils/usePhotoModalContext';

const PortalComponent = () => {
  const { isPhotoModalOpen, closePhotoModal } = usePhotoModalContext();
  return (
    <Box
      id="portalComponent"
      style={{
        position: isPhotoModalOpen ? 'fixed' : 'absolute',
        width: isPhotoModalOpen ? '100%' : '0',
        height: isPhotoModalOpen ? '100%' : '0',
        left: '0',
        top: '0',
        backgroundColor: 'var(--olive-a8)',
        overflow: 'scroll',
      }}
      onClick={closePhotoModal}
    ></Box>
  );
};

export default PortalComponent;
