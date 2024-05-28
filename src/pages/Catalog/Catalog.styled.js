import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  gap: 64px;

  padding-top: 64px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  max-width: 888px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-bottom: 50px;
`;

export const SeacrhButton = styled.button`
  display: block;
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;

  padding: 16px;

  max-width: 173px;
  width: 100%;

  height: 56px;

  border: none;
  border-radius: 200px;
  background: #e44848;

  &:hover {
    background: #d84343;
  }
`;

export const Filters = styled.p`
  color: #475467;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  margin-bottom: 14px;
`;

export const LoadMoreBtn = styled.button`
  display: block;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  padding: 16px 32px;
  margin: 30px auto;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.08px;
  color: #101828;

  &:hover,
  &:focus {
    border: 1px solid #e44848;
  }
`;
