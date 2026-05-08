const { default: styled } = require('styled-components');

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(6px);
  padding: 16px;
  box-sizing: border-box;
`;

export const ModalContainer = styled.div`
  box-sizing: border-box;
  background: #fff;
  padding: 32px 36px 40px;
  border-radius: 20px;
  width: 888px;
  max-width: calc(100vw - 32px);
  height: min(720px, 85vh);
  overflow-y: auto;
  position: relative;
  box-shadow:
    0 24px 48px -12px rgba(16, 24, 40, 0.35),
    0 0 0 1px rgba(16, 24, 40, 0.06);
  outline: none;

  @media (min-width: 768px) {
    padding: 40px 44px 44px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f4f7;
  border: none;
  border-radius: 50%;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  color: #344054;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: #e4e7ec;
    color: #101828;
  }

  &:focus-visible {
    outline: 2px solid #e44848;
    outline-offset: 2px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  white-space: normal;
  color: #475467;
  margin: 0;

  ${p =>
    !p.$expanded &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

export const ReadMoreButton = styled.button`
  display: inline-flex;
  margin: 10px 0 20px;
  padding: 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  color: #e44848;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    color: #d84343;
  }

  &:focus-visible {
    outline: 2px solid #e44848;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const ModalHeader = styled.header`
  padding-right: 48px;
  margin-bottom: 12px;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 20px;
`;

export const GalleryRow = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 10px;
  margin-bottom: 4px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(71, 84, 103, 0.35);
    border-radius: 3px;
  }
`;

export const GalleryImg = styled.img`
  flex: 0 0 auto;
  width: 240px;
  max-width: calc((100% - 24px) / 2);
  height: 190px;
  object-fit: cover;
  border-radius: 14px;
  scroll-snap-align: start;
  background: #f2f4f7;

  @media (min-width: 640px) {
    width: 260px;
    max-width: none;
    height: 200px;
  }
`;

export const RatingMeta = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #101828;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

export const TabBar = styled.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.12);
  margin: 8px 0 20px;
`;

export const Tab = styled.button`
  padding: 14px 20px;
  border: none;
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  color: ${p => (p.$active ? '#e44848' : '#667085')};
  border-bottom: 2px solid ${p => (p.$active ? '#e44848' : 'transparent')};
  margin-bottom: -1px;
  border-radius: 8px 8px 0 0;
  transition:
    color 0.15s ease,
    background 0.15s ease;

  &:hover {
    color: ${p => (p.$active ? '#e44848' : '#344054')};
    background: ${p => (p.$active ? 'transparent' : 'rgba(242, 244, 247, 0.7)')};
  }

  &:focus-visible {
    outline: 2px solid #e44848;
    outline-offset: 2px;
  }
`;

export const TabPanel = styled.div`
  margin-bottom: 8px;
`;

export const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 8px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ReviewItem = styled.li`
  padding: 18px 20px;
  border-radius: 14px;
  background: #f9fafb;
  border: 1px solid rgba(16, 24, 40, 0.06);

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.55;
    color: #344054;
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 15px;
  color: #101828;
`;

export const SpecGrid = styled.dl`
  margin: 0 0 8px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px 28px;
`;

export const SpecTerm = styled.dt`
  margin: 0;
  font-size: 11px;
  color: #667085;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 500;
`;

export const SpecDef = styled.dd`
  margin: 6px 0 0;
  font-weight: 500;
  font-size: 15px;
  color: #101828;
`;

export const BookingSection = styled.section`
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid rgba(16, 24, 40, 0.12);
`;

export const BookingTitle = styled.h3`
  margin: 0 0 18px;
  font-size: 20px;
  font-weight: 600;
  color: #101828;
`;

export const EnquiryNotice = styled.div`
  margin: 0 0 18px;
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.5;
  font-family: Inter, system-ui, sans-serif;

  ${p =>
    p.$variant === 'success'
      ? `
    background: #ecfdf5;
    border: 1px solid #6ee7b7;
    color: #065f46;
  `
      : `
    background: #fef3f2;
    border: 1px solid #fecdca;
    color: #b42318;
  `}

  strong {
    display: block;
    margin-bottom: 4px;
    font-size: 15px;
  }
`;

export const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 420px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #101828;
`;

export const FormInput = styled.input`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.18);
  font-size: 16px;
  font-family: inherit;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    outline: none;
    border-color: #e44848;
    box-shadow: 0 0 0 3px rgba(228, 72, 72, 0.15);
  }
`;

export const FormTextarea = styled.textarea`
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.18);
  font-size: 16px;
  min-height: 96px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    outline: none;
    border-color: #e44848;
    box-shadow: 0 0 0 3px rgba(228, 72, 72, 0.15);
  }
`;

export const FormError = styled.span`
  font-size: 12px;
  color: #e44848;
  font-weight: 500;
`;

export const SubmitBookingButton = styled.button`
  margin-top: 8px;
  padding: 16px 36px;
  border: none;
  border-radius: 200px;
  background: #e44848;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.15s ease;

  &:hover:not(:disabled) {
    background: #d84343;
  }

  &:focus-visible {
    outline: 2px solid #101828;
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;
