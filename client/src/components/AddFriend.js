import React, { useState } from "react";

export default function(props) {
  const [friend, setFriend] = useState(
    props.friend || {
      name: "",
      age: "",
      email: ""
    }
  );

  const handleChange = e =>
    setFriend({ ...friend, [e.target.name]: e.target.value });

  return (
    <form onSubmit={e => {props.addOrEditFriend(e, friend); props.setIsEditing(false)}}>
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
      <button type="submit">{!props.friend ? `Add` : `Save`}</button>
    </form>
  );
}
