import Navigation from "Navigation";
import Chats from "pages/Chat/Chats";
import Rooms from "pages/Chat/Rooms";
import Home from "pages/Home";
import Setting from "pages/Setting/Setting";
import Friends from "pages/User/Friends";
import Login from "pages/User/Login";
import Profile from "pages/User/Profile";
import Register from "pages/User/Register";

import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/login" element={<Login />} />
        <Route exact path="/user/register" element={<Register />} />
        <Route exact path="/user/friends" element={<Friends />} />
        <Route exact path="/user/profile" element={<Profile />} />
        <Route exact path="/chat" element={<Chats />} />
        <Route exact path="/chat/rooms" element={<Rooms />} />
        <Route exact path="/setting" element={<Setting />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
