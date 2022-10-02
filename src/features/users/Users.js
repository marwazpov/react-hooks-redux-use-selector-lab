import React from "react";
import {useSelector} from "react-redux";

function Users() {
  const users= useSelector((state) => state.users)
  const usersCount= users.length

  return (
    <div>
      <ul>
        Users!
        
        {users.map((user)=>
        <p key={user.username}>{user.username}</p>)}
        <p>Total Users: {usersCount}</p>
      </ul>
    </div>
  );
}

export default Users;
