import { useContext, useState } from 'react';
import { UserContext } from '../contextApi/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    setUser({ email, password });
  };

  return (
    <div className="register-form">
      <h6>Login</h6>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placholder="enter the email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placholder="enter the password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
