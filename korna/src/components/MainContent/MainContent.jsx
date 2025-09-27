import React from 'react';
import Tabs from '../Tabs/Tabs.jsx';
import ArticleCard from '../ArticleCard/ArticleCard.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { MainContentContainer, LeftContent } from './MainContent.styles';
// import { articles } from '../../data/articles';
import { articles } from '../data/articles.js';

const MainContent = ({ activeTab, setActiveTab }) => {
  return (
    <MainContentContainer>
      <LeftContent>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </LeftContent>

      <Sidebar />
    </MainContentContainer>
  );
};

export default MainContent;