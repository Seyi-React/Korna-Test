import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import MainContent from './components/MainContent/MainContent.jsx';
import GlobalStyles from './components/styles/GlobalStyles';

const App = () => {
  const [activeTab, setActiveTab] = useState('For you');

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
};

export default App;