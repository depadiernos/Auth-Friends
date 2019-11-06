import React, { useState } from "react";

export default function(props) {
  const defaultState = {
    name: "",
    age: "",
    email: ""
  };
  const [friend, setFriend] = useState(props.friend || defaultState);

  const handleChange = e =>
    setFriend({ ...friend, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    props.addOrEditFriend(e, friend);
    props.setIsEditing && props.setIsEditing(false);
    !props.friend && setFriend(defaultState);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        name="name"
        value={friend.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        name="age"
        value={friend.age}
        placeholder="Age"
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        value={friend.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <br />
      <button type="submit">{!props.friend ? `Add` : `Save`}</button>
    </form>
  );
}
