import React from 'react';
import {
  Card,
  ArticleContent,
  ArticleImage,
  AuthorInfo,
  AuthorAvatar,
  AuthorName,
  PublicationBadge,
  ArticleTitle,
  ArticleDescription,
  ArticleMeta,
  MetaLeft,
  MetaItem,
  MetaActions,
  ActionButton
} from './ArticleCard.styles';

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <ArticleContent>
        <AuthorInfo>
          <AuthorAvatar color={article.authorAvatar} />
          <AuthorName>{article.author}</AuthorName>
          {article.publication && (
            <PublicationBadge>in {article.publication}</PublicationBadge>
          )}
        </AuthorInfo>
        
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleDescription>{article.description}</ArticleDescription>
        
        <ArticleMeta>
          <MetaLeft>
            <MetaItem>
              ⭐ <span>{article.claps}</span>
            </MetaItem>
            <MetaItem>
              👏 <span>{article.readTime}</span>
            </MetaItem>
            <MetaItem>
              💬 <span>{article.likes}</span>
            </MetaItem>
          </MetaLeft>
          <MetaActions>
            <ActionButton>💾</ActionButton>
            <ActionButton>⋯</ActionButton>
          </MetaActions>
        </ArticleMeta>
      </ArticleContent>
      <ArticleImage src={article.image} />
    </Card>
  );
};

export default ArticleCard;