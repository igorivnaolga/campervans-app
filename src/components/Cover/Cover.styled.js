import styled from 'styled-components';
import { Link } from 'react-router-dom';
import cover from '../../helpers/cover.jpg';

export const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(${cover}) no-repeat center center/cover;
`;

export const CoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CoverContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  max-width: 560px;
  padding: 48px 32px;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 32px 20px;
    max-width: 100%;
  }
`;

export const CoverTitle = styled.h1`
  font-size: clamp(28px, 4.5vw, 52px);
  word-spacing: 4px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0;
  color: #f2f4f7;
  line-height: 1.15;
`;

export const CoverTagline = styled.p`
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  font-size: clamp(15px, 2vw, 18px);
  line-height: 1.5;
  color: rgba(242, 244, 247, 0.92);
  max-width: 34ch;
`;

export const CoverActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;

export const CoverButtonPrimary = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  border-radius: 200px;
  background: #e44848;
  color: #fff;
  font-family: Inter, system-ui, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid transparent;
  transition:
    background 0.15s ease,
    transform 0.15s ease;

  &:hover {
    background: #d84343;
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }
`;

export const CoverButtonSecondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 28px;
  border-radius: 200px;
  background: rgba(255, 255, 255, 0.12);
  color: #f2f4f7;
  font-family: Inter, system-ui, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(4px);
  transition:
    background 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }
`;
