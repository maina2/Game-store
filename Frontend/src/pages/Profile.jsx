
import { Context } from "../context/userContext/Context";
import { useContext } from "react";


function Profile() {
  const {user} =useContext(Context);

  return (
    <div>
      <h3>Username</h3>
      <p>{user.username}</p>
      <h3>Email</h3>
      <p>{user.email}</p>
      


    </div>
  )
}

export default Profile