import React from 'react';
import {
  SidebarContainer,
  SidebarSection,
  SectionTitle,
  StaffPickItem,
  StaffPickAvatar,
  StaffPickContent,
  StaffPickAuthor,
  StaffPickTitle,
  StaffPickMeta,
  TopicsGrid,
  TopicTag,
  SeeMoreButton,
  WhoToFollowItem,
  WhoToFollowLeft,
  WhoToFollowAvatar,
  WhoToFollowContent,
  WhoToFollowName,
  WhoToFollowBio,
  FollowButton,
  ReadingListItem
} from './Sidebar.styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarSection>
        <SectionTitle>Staff Picks</SectionTitle>
        <StaffPickItem>
          <StaffPickAvatar />
          <StaffPickContent>
            <StaffPickAuthor>In The Medium Handbook by Zulie @ Medium</StaffPickAuthor>
            <StaffPickTitle>How this brand strategist uses Medium to explore ideas, repurpose content, and land clients</StaffPickTitle>
            <StaffPickMeta>2d ago</StaffPickMeta>
          </StaffPickContent>
        </StaffPickItem>
        
        <StaffPickItem>
          <StaffPickAvatar />
          <StaffPickContent>
            <StaffPickAuthor>Jud Brewer MD PhD</StaffPickAuthor>
            <StaffPickTitle>From "I Have To" to "I Get To": How One Word Change Rewires Your Brain</StaffPickTitle>
            <StaffPickMeta>5d ago</StaffPickMeta>
          </StaffPickContent>
        </StaffPickItem>
        
        <StaffPickItem>
          <StaffPickAvatar />
          <StaffPickContent>
            <StaffPickAuthor>Linh Nguyen</StaffPickAuthor>
            <StaffPickTitle>Golden Design Lessons from Tokyo Metro</StaffPickTitle>
            <StaffPickMeta>Sep 3</StaffPickMeta>
          </StaffPickContent>
        </StaffPickItem>
        
        <SeeMoreButton>See the full list</SeeMoreButton>
      </SidebarSection>

      <SidebarSection>
        <SectionTitle>Recommended topics</SectionTitle>
        <TopicsGrid>
          <TopicTag>Data Science</TopicTag>
          <TopicTag>React</TopicTag>
          <TopicTag>Coding</TopicTag>
          <TopicTag>Mental Health</TopicTag>
          <TopicTag>UX</TopicTag>
          <TopicTag>Python</TopicTag>
          <TopicTag>Productivity</TopicTag>
        </TopicsGrid>
        <SeeMoreButton>See more topics</SeeMoreButton>
      </SidebarSection>

      <SidebarSection>
        <SectionTitle>Who to follow</SectionTitle>
        <WhoToFollowItem>
          <WhoToFollowLeft>
            <WhoToFollowAvatar />
            <WhoToFollowContent>
              <WhoToFollowName>Dr. Derek Austin 🥳</WhoToFollowName>
              <WhoToFollowBio>AI Content Engineer. I teach LLMs to think. Full...</WhoToFollowBio>
            </WhoToFollowContent>
          </WhoToFollowLeft>
          <FollowButton>Follow</FollowButton>
        </WhoToFollowItem>
        
        <WhoToFollowItem>
          <WhoToFollowLeft>
            <WhoToFollowAvatar />
            <WhoToFollowContent>
              <WhoToFollowName>ITNEXT</WhoToFollowName>
              <WhoToFollowBio>Publication ITNEXT is a platform for IT developers & software...</WhoToFollowBio>
            </WhoToFollowContent>
          </WhoToFollowLeft>
          <FollowButton>Follow</FollowButton>
        </WhoToFollowItem>
        
        <WhoToFollowItem>
          <WhoToFollowLeft>
            <WhoToFollowAvatar />
            <WhoToFollowContent>
              <WhoToFollowName>Oliver Foster</WhoToFollowName>
              <WhoToFollowBio>Primarily proficient in the Java programming...</WhoToFollowBio>
            </WhoToFollowContent>
          </WhoToFollowLeft>
          <FollowButton>Follow</FollowButton>
        </WhoToFollowItem>
        
        <SeeMoreButton>See more suggestions</SeeMoreButton>
      </SidebarSection>

      <SidebarSection>
        <SectionTitle>Reading list</SectionTitle>
        <p style={{ fontSize: '13px', color: '#6b6b6b', marginBottom: '12px' }}>
          Click the 📖 on any story to easily add it to your reading list or a custom list that you can share.
        </p>
        <ReadingListItem>Help</ReadingListItem>
        <ReadingListItem>Status</ReadingListItem>
        <ReadingListItem>About</ReadingListItem>
        <ReadingListItem>Careers</ReadingListItem>
        <ReadingListItem>Press</ReadingListItem>
        <ReadingListItem>Blog</ReadingListItem>
        <ReadingListItem>Privacy</ReadingListItem>
        <ReadingListItem>Rules</ReadingListItem>
        <ReadingListItem>Terms</ReadingListItem>
        <ReadingListItem>Text to speech</ReadingListItem>
      </SidebarSection>
    </SidebarContainer>
  );
};

export default Sidebar;
