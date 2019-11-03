import React, { useState } from "react";
import AddFriend from "./AddFriend";

export default function Friend(props) {
  const { friend } = props;
  const [isEditing, setIsEditing] = useState(false);

  const editFriend = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {!isEditing ? (
        <>
          <h1>{friend.name}</h1>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
        </>
      ) : (
        <AddFriend friend={friend} addOrEditFriend={props.editFriend} setIsEditing={setIsEditing}/>
      )}
      <button onClick={editFriend}>Edit</button>
      <button onClick={() => props.deleteFriend(friend)}>X</button>
    </div>
  );
}
