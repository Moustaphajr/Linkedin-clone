import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Welcome from "./Pages/Welcome";
import Profile from "./Pages/Profile";
import NotConnectedUserMiddleware from "./middleware/notconnectedUsermiddleware";
import ConnectedUserMiddleware from "./middleware/ConnectedUseMiddleware";
import PostJob from "./Pages/PostJob";
import DisplayingJob from "./Layouts/DisplayingJob";

function App() {
  return (
    <Routes>
      <Route element={<ConnectedUserMiddleware />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Route>

      <Route element={<NotConnectedUserMiddleware />}>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/profile/:nom" element={<Profile />} />
        <Route path="/emploi/new" element={<PostJob />} />
        <Route path="/emploi" element={<DisplayingJob />} />
      </Route>
    </Routes>
  );
}

export default App;
