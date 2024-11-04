import { createContext, useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const PhotoModalContext = createContext();

export const usePhotoModalContext = () => useContext(PhotoModalContext);

export const PhotoModalContextProvider = ({ children }) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: 768 });

  const openPhotoModal = () => {
    setIsPhotoModalOpen(true);
  };
  const closePhotoModal = ev => {
    setIsPhotoModalOpen(false);
  };

  return (
    <PhotoModalContext.Provider
      value={{ isPhotoModalOpen, openPhotoModal, closePhotoModal, isTablet }}
    >
      {children}
    </PhotoModalContext.Provider>
  );
};
