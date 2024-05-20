import styled from 'styled-components';
import cover from '../../helpers/cover.jpg';

export const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${cover}) no-repeat center center/cover;
`;
export const CoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CoverTitle = styled.h1`
  font-size: 60px;
  word-spacing: 5px;
  letter-spacing: 5px;
  text-transform: uppercase;
  max-width: 400px;
  margin: 0 auto;
  color: #f2f4f7;
  padding-right: 600px;
  /* padding-bottom: 240px; */
`;
