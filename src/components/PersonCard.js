import React from 'react';

const PersonCard = (props) =>{
  return (
  <div>
    <h1>{props.lastName} {props.firstName}</h1>
    <h2>{props.age}</h2>
    <h3>{props.hairColor}</h3>
  </div>
  );
}
export default PersonCard;
