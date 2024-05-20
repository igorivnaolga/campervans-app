const { default: styled } = require('styled-components');

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 20px;
  max-width: 888px;
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 32px;
  cursor: pointer;
`;
export const CamperDescription = styled.p`
  font-size: 16px;
  white-space: wrap;
  margin-bottom: 24px;
`;
