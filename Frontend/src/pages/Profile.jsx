import { Context } from "../context/userContext/Context";
import { useContext } from "react";
import './profile.css';

function Profile() {
  const { user } = useContext(Context);

  return (
    <div className="profile-container">
      <h3 className="profile-heading">Username</h3>
      <p className="profile-info">{user.username}</p>
      <h3 className="profile-heading">Email</h3>
      <p className="profile-info">{user.email}</p>
    </div>
  );
}

export default Profile;
