import { useContext } from 'react';
import { UserContext } from '../contextApi/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <p> Please Login </p>;
  return <div>Welcome {user.email}</div>;
};

export default Profile;
