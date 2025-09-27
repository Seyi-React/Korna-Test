import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-bottom: 1px solid #f2f2f2;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 12px 16px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;

  span {
    width: 18px;
    height: 2px;
    background-color: #242424;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 24px;
  padding: 8px 16px;
  max-width: 240px;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: #6b6b6b;
`;

export const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  font-size: 14px;
  width: 100%;

  &::placeholder {
    color: #6b6b6b;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const WriteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #6b6b6b;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #242424;
  }

  @media (max-width: 768px) {
    span:last-child {
      display: none;
    }
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #6b6b6b;

  &:hover {
    color: #242424;
  }
`;

export const ProfileAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #000;
  cursor: pointer;
`;
