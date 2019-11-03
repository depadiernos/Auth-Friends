import React, { useState } from "react";

export default function(props) {
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e =>
    setFriend({ ...friend, [e.target.name]: e.target.value });
  return (
    <form onSubmit={(e) => props.addFriend(e, friend)}>
      <input
        type="text"
        name="name"
        value={friend.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={friend.age}
        placeholder="Age"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={friend.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <button type='submit'>Add</button>
    </form>
  );
}
