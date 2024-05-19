import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  const toggleModal = (camper = null) => {
    setIsShowModal(prev => !prev);
    if (camper) {
      setSelectedCamper(camper);
    }
  };
  return (
    <GlobalContext.Provider
      value={{ toggleModal, isShowModal, selectedCamper }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
