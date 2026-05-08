import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 64px;

  &::before {
    content: '';
    display: block;

    height: 1px;
    width: 360px;

    background: rgba(16, 24, 40, 0.1);

    margin: 24px 0;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 5px;
  cursor: pointer;

  height: 95px;
  width: 100px;

  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  mix-blend-mode: multiply;

  svg {
    color: #101828;
  }

  &.activeFilter {
    border: 2px solid #e44848;
  }

  &.activeFilter svg {
    color: #e44848;
  }
`;

export const Radio = styled.input`
  display: none;
`;

export const Title = styled.h3`
  color: #101828;

  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  svg {
    flex-shrink: 0;
  }
`;

export const Text = styled.p`
  margin: 0;
  color: #101828;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
`;
