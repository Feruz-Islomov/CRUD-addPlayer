import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Player = (props) => {
  const { player, getId } = props;
  return (
    <Fragment>
      <div className="ListContainer">
        <Link
          to={{ pathname: `/detail/${player.id}`, state: { player: player } }}
          style={{ textDecoration: "none", color: "yellow" }}
        >
          <div className="UserInfo">
            <img className="userImg" src={player.img} alt="user" />

            <h2>{player.name}</h2>

            <h2>{player.country}</h2>
          </div>
        </Link>
        <div className="icons">
          <h2>{player.course}</h2>
          <h2>{player.result} %</h2>
          <i
            className="fas fa-trash-alt"
            style={{ color: "red" }}
            onClick={() => getId(props.player.id)}
          ></i>
          <Link to={{ pathname: "/edit", state: { player: player } }}>
            <i className="fas fa-edit" style={{ color: "blue" }}></i>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Player;
