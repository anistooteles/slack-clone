import React from 'react';
import { auth, provider } from '../firebase';

function Login(props) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };

        localStorage.setItem('user', JSON.stringify(newUser));
        props.setUser(newUser);
      })

      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://image.flaticon.com/icons/png/512/1808/1808650.png"></img>
        <h1>Sign in Slack</h1>
        <button onClick={() => signIn()}>Sign In With Google</button>
      </div>
    </div>
  );
}

export default Login;
