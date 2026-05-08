import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BelowFold = styled.section`
  padding: 64px 32px 80px;
  background: #f9fafb;
  border-top: 1px solid rgba(16, 24, 40, 0.08);

  @media (max-width: 768px) {
    padding: 48px 20px 64px;
  }
`;

export const BelowInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 12px;
  font-family: Inter, system-ui, sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #101828;
`;

export const SectionLead = styled.p`
  margin: 0 0 24px;
  font-size: 16px;
  line-height: 1.6;
  color: #475467;
  max-width: 52ch;
`;

export const StatRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 24px;
  margin-bottom: 40px;
`;

export const StatBadge = styled.p`
  margin: 0;
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  border-radius: 100px;
  background: #fff;
  border: 1px solid rgba(16, 24, 40, 0.12);
  font-size: 15px;
  font-weight: 600;
  color: #101828;
  font-family: Inter, system-ui, sans-serif;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.06);
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
`;

export const FeatureCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 24px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(16, 24, 40, 0.1);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    border-color: rgba(228, 72, 72, 0.45);
    box-shadow: 0 8px 24px rgba(16, 24, 40, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #e44848;
    outline-offset: 2px;
  }

  svg {
    color: #e44848;
    flex-shrink: 0;
  }

  strong {
    font-family: Inter, system-ui, sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: #101828;
  }

  span {
    font-size: 14px;
    line-height: 1.5;
    color: #667085;
  }
`;
