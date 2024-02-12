import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  return (
    <div className="m-4 p-4 bg-gray-200 rounded-lg">
      <h1>Functional Component</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h3>count: {count}</h3>
      <h3>count2: {count2}</h3>
    </div>
  );
};

export default User;
