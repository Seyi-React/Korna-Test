import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 368px;
  flex-shrink: 0;
  padding-top: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarSection = styled.div`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #242424;
`;

export const StaffPickItem = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const StaffPickAvatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
  flex-shrink: 0;
  margin-top: 2px;
`;

export const StaffPickContent = styled.div`
  flex: 1;
`;

export const StaffPickAuthor = styled.div`
  font-size: 13px;
  color: #242424;
  margin-bottom: 4px;
`;

export const StaffPickTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 4px 0;
  color: #242424;
`;

export const StaffPickMeta = styled.div`
  font-size: 13px;
  color: #6b6b6b;
`;

export const TopicsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const TopicTag = styled.button`
  background-color: #f2f2f2;
  border: none;
  border-radius: 16px;
  padding: 8px 16px;
  font-size: 13px;
  color: #242424;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const SeeMoreButton = styled.button`
  background: none;
  border: none;
  color: #1a8917;
  font-size: 13px;
  cursor: pointer;
`;

export const WhoToFollowItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const WhoToFollowLeft = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
`;

export const WhoToFollowAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #000;
  flex-shrink: 0;
`;

export const WhoToFollowContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const WhoToFollowName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #242424;
  margin-bottom: 2px;
`;

export const WhoToFollowBio = styled.div`
  font-size: 13px;
  color: #6b6b6b;
  line-height: 1.4;
`;

export const FollowButton = styled.button`
  background: none;
  border: 1px solid #242424;
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 13px;
  color: #242424;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: #242424;
    color: #fff;
  }
`;

export const ReadingListItem = styled.div`
  font-size: 13px;
  color: #6b6b6b;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    color: #242424;
  }
`;