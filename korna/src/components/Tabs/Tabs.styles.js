import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0 24px 0;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    padding: 16px 0 12px 0;
    margin-bottom: 16px;
  }
`;

export const TabsList = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

export const Tab = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${props => props.active ? '#242424' : '#6b6b6b'};
  cursor: pointer;
  padding-bottom: 12px;
  border-bottom: ${props => props.active ? '1px solid #242424' : 'none'};
  font-weight: ${props => props.active ? '500' : '400'};

  &:hover {
    color: #242424;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding-bottom: 8px;
  }
`;

export const OpenInAppButton = styled.button`
  background: none;
  border: none;
  color: #1a8917;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;
