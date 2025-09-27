import React from 'react';
import {
  HeaderContainer,
  LeftSection,
  HamburgerMenu,
  Logo,
  SearchContainer,
  SearchIcon,
  SearchInput,
  RightSection,
  WriteButton,
  IconButton,
  ProfileAvatar
} from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <HamburgerMenu>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerMenu>
        <Logo>Medium</Logo>
        <SearchContainer>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput placeholder="Search" />
        </SearchContainer>
      </LeftSection>
      
      <RightSection>
        <WriteButton>
          <span>✏️</span>
          <span>Write</span>
        </WriteButton>
        <IconButton>🔔</IconButton>
        <ProfileAvatar />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;