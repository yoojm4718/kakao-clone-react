import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user/login">Login</Link>
      </li>
      <li>
        <Link to="/user/register">Register</Link>
      </li>
      <li>
        <Link to="/user/friends">Friends</Link>
      </li>
      <li>
        <Link to="/user/profile">Profile</Link>
      </li>
      <li>
        <Link to="/chat">Chats</Link>
      </li>
      <li>
        <Link to="/chat/rooms">Rooms</Link>
      </li>
      <li>
        <Link to="/setting">Setting</Link>
      </li>
    </ul>
  </>
);

export default Navigation;
