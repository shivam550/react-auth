import { useState } from 'react';
import './Form.css';

const Register = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };
  return (
    <>
      <div className="register-form">
        <h6>Register</h6>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placholder="enter the name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
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

        <div>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};

export default Register;
