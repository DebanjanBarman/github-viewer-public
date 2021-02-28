import { useState, useEffect } from "react";
import SearchAppBar from "./components/navbar";
import axios from "axios";
import Content from "./components/content";
import token from "./config/config";

function App() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState({});
  const [hasUser, setHasUser] = useState(false);

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `token ${token}`;

    axios
      .get(`https://api.github.com/users/${username}`)
      .then((data) => {
        setProfile(data.data);
        setHasUser(true);
      })
      .catch((err) => {
        setHasUser(false);
        setProfile({});
      });
  }, [username]);
  return (
    <div className="App">
      <SearchAppBar username={username} setUsername={setUsername} />
      <Content profile={profile} hasUser={hasUser} />
    </div>
  );
}

export default App;
