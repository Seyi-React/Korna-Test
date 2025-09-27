import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  cursor: pointer;

  &:hover h2 {
    color: #000;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
  }
`;

export const ArticleContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ArticleImage = styled.div`
  width: 112px;
  height: 112px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    order: -1;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const AuthorAvatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color || '#000'};
`;

export const AuthorName = styled.span`
  font-size: 13px;
  color: #242424;
  font-weight: 500;
`;

export const PublicationBadge = styled.span`
  font-size: 13px;
  color: #6b6b6b;
`;

export const ArticleTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: #242424;
  margin: 0 0 8px 0;
  transition: color 0.15s ease;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const ArticleDescription = styled.p`
  font-size: 16px;
  color: #6b6b6b;
  line-height: 1.4;
  margin: 0 0 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

export const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #6b6b6b;
  font-size: 13px;
`;

export const MetaLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const MetaActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  color: #6b6b6b;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: #242424;
  }
`;