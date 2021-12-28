import React from "react";
import { Link } from "react-router-dom";

const PlayerDetail = (props) => {
  const { name, country, course, result } = props.location.state.player;
  console.log(props);
  return (
    <>
      <h1>Detail of the Player</h1>
      <Link to="/">
        <button className="addigrok">Back to List</button>
      </Link>
      <div className="detailContainer">
        <div className="infoContainer">
          <img className="detailimg" src="/images/beckham.jpg" alt="name" />
          <div className="detailnames">
            <h3>Name : {name}</h3>
            <h3>Country : {country}</h3>
            <h3>Course : {course}</h3>
            <h3>Result : {result}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerDetail;
