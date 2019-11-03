import React from "react";

export default function Friend(props) {
  const { friend } = props;
  return (
    <div>
      <h1>{friend.name}</h1>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <button onClick={()=>props.editFriend(friend)}>Edit</button>
      <button onClick={()=>props.deleteFriend(friend)}>X</button>
    </div>
  );
}
