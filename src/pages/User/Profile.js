import { faTimes, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { friends } from "./Friends";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 5;

  position: relative;

  img {
    height: 100%;
    width: 100%;

    object-fit: cover;
  }

  & svg {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    font-size: 25px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ProfileMusic = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: max-content;
  padding: 0 20px;
  height: 30px;
  background-color: white;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;

  span {
    font-weight: 300;
  }
  svg {
    position: static;
    color: black;
    font-size: 15px;
  }
`;

const ProfileImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20%;

  img {
    width: 150px;
    height: 150px;

    object-fit: contain;
    border-radius: 55px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

    &:hover {
      cursor: pointer;
    }
  }
  span {
    font-size: 30px;
    color: white;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
  }
`;

const GradientBlack = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 212, 255, 0) 100%
  );
  width: 100%;
  height: 30%;

  position: absolute;
  left: 0;
  bottom: 0;
`;

const Profile = () => {
  const { userId } = useParams();
  const [user] = useState(
    ...friends.filter(({ id }) => parseInt(userId) === id)
  );

  return (
    <Container>
      <img src={user.backgroundImg} alt="background" />
      <Link to="/user/friends">
        <FontAwesomeIcon icon={faTimes} />
      </Link>
      <ProfileMusic>
        <FontAwesomeIcon icon={faMusic} />
        <span>{user.profileMusic}</span>
      </ProfileMusic>
      <ProfileImg>
        <img src={user.profileImg} alt="profile" />
        <span>{user.name}</span>
      </ProfileImg>
      <GradientBlack />
    </Container>
  );
};

export default Profile;
