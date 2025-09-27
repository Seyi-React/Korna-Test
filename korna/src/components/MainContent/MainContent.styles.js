import styled from 'styled-components';

export const MainContentContainer = styled.div`
  display: flex;
  max-width: 1192px;
  margin: 0 auto;
  gap: 64px;
  padding: 0 24px;

  @media (max-width: 1024px) {
    gap: 32px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 16px;
    gap: 0;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
  max-width: 680px;
`;