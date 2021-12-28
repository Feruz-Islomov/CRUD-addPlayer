import React from "react";
import Player from "./Player";
import { Link } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

const PlayerList = ({ players, RemovePlayerHandler }) => {
  const getId = (id) => {
    RemovePlayerHandler(id);
  };
  return (
    <div className="ContactsContainer">
      <h1>PLAYER LISTS</h1>
      <Link to="/add">
        <button className="addigrok">
          Add Player <i className="fas fa-user-plus"></i>
        </button>
      </Link>

      {players.map((player) => {
        return <Player key={player.id} player={player} getId={getId} />;
      })}
    </div>
  );
};

export default PlayerList;
// const { users } = props;
// const [file, setFile] = useState("");
// const [singleInfo, setSingleInfo] = useState({})

// const fileHandler = (e) => {
//   setFile(e.target.files[0]);
//   console.log(file);
// };

// const onSubmit = async (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);
//   formData.append("file", file);

//   try {
//     const res = await axios.post("/uploads", formData, {
//       headers: { "Content-Type": "multipart/form-data" },
//     });
//     console.log(res.data);
//     // console.log(res.data);
//     // axios({
//     //   method: "post",
//     //   url: "/uploads",
//     //   data: formData,
//     //   headers: { "Content-Type": "multipart/form-data" },
//     // })
//     //   .then((res) => console.log(res.data))
//     //   .catch((err) => console.log(err));
//   } catch (err) {
//     console.log(err);
//   }
// };
