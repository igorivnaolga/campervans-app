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

export const TabBar = styled.div`
  display: flex;
  gap: 0;
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
  margin-bottom: 24px;
`;

export const Tab = styled.button`
  padding: 16px 24px;
  border: none;
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: ${p => (p.$active ? '#e44848' : '#475467')};
  border-bottom: 2px solid ${p => (p.$active ? '#e44848' : 'transparent')};
  margin-bottom: -1px;
`;

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ReviewItem = styled.li`
  padding: 16px;
  border-radius: 12px;
  background: #f2f4f7;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const SpecGrid = styled.dl`
  margin: 0 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px 24px;
`;

export const SpecTerm = styled.dt`
  margin: 0;
  font-size: 12px;
  color: #475467;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;

export const SpecDef = styled.dd`
  margin: 4px 0 0;
  font-weight: 500;
`;

export const BookingSection = styled.section`
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(16, 24, 40, 0.15);
`;

export const BookingTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 20px;
  font-weight: 600;
`;

export const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #101828;
`;

export const FormInput = styled.input`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  font-size: 16px;
`;

export const FormTextarea = styled.textarea`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  font-size: 16px;
  min-height: 80px;
  resize: vertical;
`;

export const FormError = styled.span`
  font-size: 12px;
  color: #e44848;
`;

export const SubmitBookingButton = styled.button`
  margin-top: 8px;
  padding: 16px 32px;
  border: none;
  border-radius: 200px;
  background: #e44848;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background: #d84343;
  }
`;
