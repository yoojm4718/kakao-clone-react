import {
  faCog,
  faCommentDots,
  faMusic,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import defaultImg from "images/default.jpeg";

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
  margin-bottom: 30px;
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

const RoomsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
`;

const Room = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120%;
  margin: 0 -20px;
  padding: 5px 20px;
  color: black;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const RoomLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const RoomImg = styled.div`
  width: 70px;
  height: 70px;
  object-fit: cover;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }
`;

const RoomText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
  & span {
    font-size: 20px;
  }
  & small {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const RoomRight = styled.div`
  margin-right: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  & small {
    font-size: 10px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const rooms = [
  {
    id: 1,
    title: "홍길동",
    roomImg:
      "https://img1.daumcdn.net/thumb/C500x500.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/6qYm/image/eAFjiZeA-fGh8Y327AH7oTQIsxQ.png",
    lastChat: "동에번쩍 서에번쩍",
    lastDate: new Date("December 17, 2021 03:24:00"),
  },
  {
    id: 2,
    title: "2021 HUHS 채팅방",
    roomImg: "",
    lastChat: "성과발표회 결과입니다.",
    lastDate: new Date("December 31, 2021 03:24:00"),
  },
  {
    id: 3,
    title: "이몽룡",
    roomImg:
      "https://pbs.twimg.com/profile_images/634387664158920705/QFrLZJ3O_400x400.jpg",
    lastChat: "춘향이 어디감?",
    lastDate: new Date("December 27, 2021 03:24:00"),
  },
];

const Rooms = () => (
  <Container>
    <Header>
      <h1>채팅</h1>
      <HeaderRight>
        <FontAwesomeIcon icon={faSearch} />
        <FontAwesomeIcon icon={faCommentDots} />
        <FontAwesomeIcon icon={faMusic} />
        <FontAwesomeIcon icon={faCog} />
      </HeaderRight>
    </Header>
    <RoomsContainer>
      {rooms.map((room) => (
        <Room key={room.id} to={`/chat/rooms/${room.id}`}>
          <RoomLeft>
            <RoomImg>
              <img
                src={room.roomImg.length === 0 ? defaultImg : room.roomImg}
                alt={room.title}
              />
            </RoomImg>
            <RoomText>
              <span>{room.title}</span>
              <small>{room.lastChat}</small>
            </RoomText>
          </RoomLeft>
          <RoomRight>
            <small>{`${room.lastDate.getMonth()}월 ${room.lastDate.getDay()}일`}</small>
          </RoomRight>
        </Room>
      ))}
    </RoomsContainer>
  </Container>
);

export default Rooms;
