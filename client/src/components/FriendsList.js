import React, { useState, useEffect } from "react";
import api from "../utils/axios";
import Friend from "./Friend";
import AddFriend from "./AddFriend";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    api()
      .get("/friends")
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const addFriend = (e, friend) => {
    e.preventDefault();
    api()
      .post("/friends", friend)
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const editFriend = friend => {};
  const deleteFriend = friend => {};

  return (
    <div>
      <AddFriend addFriend={addFriend} />
      {friends &&
        friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            editFriend={editFriend}
            deleteFriend={deleteFriend}
          />
        ))}
    </div>
  );
}
