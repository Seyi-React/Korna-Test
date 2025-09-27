import React from 'react';
import { TabsContainer, TabsList, Tab, OpenInAppButton } from './Tabs.styles';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <TabsContainer>
      <TabsList>
        <Tab 
          active={activeTab === 'For you'} 
          onClick={() => setActiveTab('For you')}
        >
          For you
        </Tab>
        <Tab 
          active={activeTab === 'Featured'} 
          onClick={() => setActiveTab('Featured')}
        >
          Featured
        </Tab>
      </TabsList>
      <OpenInAppButton>
        Open in app ↗
      </OpenInAppButton>
    </TabsContainer>
  );
};

export default Tabs;