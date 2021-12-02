import {
  faCog,
  faComments,
  faHome,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 60px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    color: ${(props) => (props.isSelected ? "black" : "rgba(0, 0, 0, 0.5)")};
    font-size: 25px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Navigation = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Container>
      <IconContainer isSelected={selected === 0} onClick={() => setSelected(0)}>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </IconContainer>
      <IconContainer isSelected={selected === 1} onClick={() => setSelected(1)}>
        <Link to="/user/friends">
          <FontAwesomeIcon icon={faUserFriends} />
        </Link>
      </IconContainer>
      <IconContainer isSelected={selected === 2} onClick={() => setSelected(2)}>
        <Link to="/chat/rooms">
          <FontAwesomeIcon icon={faComments} />
        </Link>
      </IconContainer>
      <IconContainer isSelected={selected === 3} onClick={() => setSelected(3)}>
        <Link to="/setting">
          <FontAwesomeIcon icon={faCog} />
        </Link>
      </IconContainer>
    </Container>
  );
};

export default Navigation;
