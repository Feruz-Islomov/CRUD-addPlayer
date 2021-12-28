// import data from "./data";
import PlayerList from "./components/PlayerList";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddForm from "./components/AddForm";
import Edit from "./components/Edit";
import PlayerDetail from "./components/PlayerDetail";
import { v4 as uuidv4 } from "uuid";

const FromLocal = JSON.parse(localStorage.getItem("players")) || [];

function App() {
  const [players, setplayers] = useState(FromLocal);

  const addPlayerHandler = async (player) => {
    // console.log(player);
    const request = {
      id: uuidv4(),
      ...player,
    };
    const res = await axios.post("/Users", request);
    // console.log(res.data);
    setplayers([...players, res.data]);
  };
  const editPlayerHandler = async (player) => {
    const res = await axios.put(`/Users/${player.id}`, player);

    const { id } = res.data;
    setplayers(
      players.map((player) => {
        return player.id === id ? { ...res.data } : player;
      })
    );
    console.log(res.data.id);
    // setplayers();
  };

  const RemovePlayerHandler = async (id) => {
    await axios.delete(`/Users/${id}`);
    setplayers(
      players.filter((player) => {
        return player.id !== id;
      })
    );
  };
  //--------------------------------GET------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/Users");
      // console.log(response.data);
      setplayers(response.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);
  //--------------------------------------------------------------------------
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <PlayerList
                {...props}
                RemovePlayerHandler={RemovePlayerHandler}
                players={players}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddForm {...props} addPlayerHandler={addPlayerHandler} />
            )}
          />
          <Route
            path="/edit"
            render={(props) => (
              <Edit {...props} editPlayerHandler={editPlayerHandler} />
            )}
          />
          {/* <Route path="/detail" render={() => <PlayerDetail />} /> */}
          <Route path="/detail/:id" component={PlayerDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
