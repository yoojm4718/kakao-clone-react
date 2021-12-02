import {
  faCog,
  faMusic,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px 20px;
  min-height: 100vh;
  height: max-content;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h1 {
    font-size: 25px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 20px;
  & svg {
    font-size: 20px;
  }
`;

const MyProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px -20px 0 -20px;
  padding: 5px 20px;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const MyProfileLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  & span {
    font-size: 20px;
  }
`;

const ProfileImg = styled.div`
  width: 70px;
  height: 70px;
  object-fit: cover;
  & img {
    border-radius: 28px;
    width: 100%;
    height: 100%;
  }
`;

const SHr = styled.hr`
  border: none;
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 10px 0;
`;

const SSmall = styled.small`
  display: block;
  width: 100%;
  text-align: left;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
`;

const FriendsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
`;

const Friend = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 -20px;
  padding: 5px 20px;
  color: black;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const FriendLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  & span {
    font-size: 15px;
  }
`;

const FriendImg = styled.div`
  width: 50px;
  height: 50px;
  object-fit: cover;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

const friends = [
  {
    id: 1,
    name: "홍길동",
    age: 20,
    profileImg:
      "https://img1.daumcdn.net/thumb/C500x500.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/6qYm/image/eAFjiZeA-fGh8Y327AH7oTQIsxQ.png",
    backgroundImg:
      "https://cdn.newscj.com/news/photo/201001/31870_28928_182.jpg",
    profileMusic: "아리랑",
  },
  {
    id: 2,
    name: "이몽룡",
    age: 22,
    profileImg:
      "https://pbs.twimg.com/profile_images/634387664158920705/QFrLZJ3O_400x400.jpg",
    backgroundImg: "https://pbs.twimg.com/media/B8mYkcFCcAAlX1H.jpg",
    profileMusic: "가을밤에 든 생각 - 잔나비",
  },
  {
    id: 3,
    name: "누군가",
    age: 23,
    profileImg:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/%EC%82%AC%EB%9E%8C.png",
    backgroundImg:
      "https://img.huffingtonpost.com/asset/5d715f643b0000683fcf22c0.jpeg?ops=scalefit_720_noupscale&format=webp",
    profileMusic: "Butter - BTS",
  },
];

const Friends = () => {
  return (
    <Container>
      <Header>
        <h1>친구</h1>
        <HeaderRight>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faMusic} />
          <FontAwesomeIcon icon={faCog} />
        </HeaderRight>
      </Header>
      <MyProfile>
        <MyProfileLeft>
          <ProfileImg>
            <img
              src="https://mblogthumb-phinf.pstatic.net/20150427_261/ninevincent_1430122791768m7oO1_JPEG/kakao_1.jpg?type=w2"
              alt="my_profile"
            />
          </ProfileImg>
          <span>유정민</span>
        </MyProfileLeft>
      </MyProfile>
      <SHr />
      <SSmall>친구 {friends.length}</SSmall>
      <FriendsContainer>
        {friends.map((friend) => (
          <Friend key={friend.id} to={`/user/${friend.id}/profile`}>
            <FriendLeft>
              <FriendImg>
                <img src={friend.profileImg} alt={friend.name} />
              </FriendImg>
              <span>{friend.name}</span>
            </FriendLeft>
          </Friend>
        ))}
      </FriendsContainer>
    </Container>
  );
};

export default Friends;
