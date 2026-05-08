import { createContext, useCallback, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  const openModal = useCallback(camper => {
    setSelectedCamper(camper);
    setIsShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsShowModal(false);
    setSelectedCamper(null);
  }, []);

  return (
    <GlobalContext.Provider
      value={{ openModal, closeModal, isShowModal, selectedCamper }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
