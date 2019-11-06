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
  const editFriend = (e, friend) => {
    e.preventDefault();
    api()
      .put(`/friends/${friend.id}`, friend)
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const deleteFriend = (friend) => {
    api()
      .delete(`/friends/${friend.id}`)
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <AddFriend addOrEditFriend={addFriend} />
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
