import React from "react";
import propTypes from "prop-types";
// import "../App.css";
const user = (props) => {
  console.log(props);
  alert(props.x.fullName);
  return (
    <div>
      <p className="Name">
        <h1> Name :</h1>
        <span> {props.x.fullName}</span>
      </p>
      <p className="bio">
        <h1> Bio :</h1> <span>{props.x.bio}</span>
      </p>
      <p className="Profession">
        <h1> Profession :</h1> <span>{props.x.profession}</span>
      </p>
      <img className="img" src={props.x.image} alt={"dddd"} />
    </div>
  );
};
export default user;
user.propTypes = {
  Type: propTypes.object,
};
