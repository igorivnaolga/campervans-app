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

export const ListToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  max-width: 888px;
  width: 100%;
`;

export const SortGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const SortLabel = styled.label`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #475467;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SortSelect = styled.select`
  font-family: Inter, sans-serif;
  font-size: 15px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: #fff;
  color: #101828;
  min-width: 200px;
  cursor: pointer;
`;

export const ResultsMeta = styled.p`
  margin: 0;
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: #475467;
`;

export const ClearFiltersButton = styled.button`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.25);
  background: #fff;
  color: #101828;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: #e44848;
    color: #e44848;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    color: #98a2b3;
    border-color: rgba(71, 84, 103, 0.15);

    &:hover {
      color: #98a2b3;
      border-color: rgba(71, 84, 103, 0.15);
    }
  }
`;

export const FilterActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
`;

export const EmptyState = styled.p`
  margin: 0;
  padding: 48px 24px;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  border: 1px dashed rgba(16, 24, 40, 0.2);
  border-radius: 16px;
  max-width: 888px;
  width: 100%;
`;
