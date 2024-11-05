import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { setUser, setAuthToken } from '../../store/ReduxStore';
import { useDispatch } from 'react-redux';

const LoginForm = ({styles, name, func}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('');

  // logging in with google
  const dispatch = useDispatch();

  const handleCallbackResponse = (response) => {
    // decode the responce data coming from google oauth
    const userObject = jwtDecode(response.credential);
    console.log(userObject);

    // Dispatch the user data to Redux store
    dispatch(setUser(userObject));
    window.location.href = '/';
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1091551583178-3vq67cloll7k9lh4kjaab89qms6a0vu9.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  })

  // logging in through postman's data
  async function loginUser(email, password) {
    try {
      console.log('Attempting login with:', { email, password });

      const response = await fetch('https://e-commerce-backend-9a82.onrender.com/auth/token/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // parse error message if available
        throw new Error(`Login failed: ${errorData?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      dispatch(setAuthToken(data.auth_token));

      console.log('Login successful:', data);
      return data; // Return data to handle it in handleLogin if needed
    } catch (error) {
      console.error('Error logging in:', error.message);
      throw error; // Re-throw the error if you need to handle it in the caller
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const userData = await loginUser(email, password);
      console.log('User data:', userData);
      // handle login success actions here, like storing user data
    } catch (error) {
      console.error('Login error:', error);
      // Optionally, display error to the user
    }
  };


  return (
    <form onSubmit={handleLogin}>
        <div className={styles.heading}>
            <h1>{name[0]}</h1>
            <small>{name[1]}</small>
        </div>

        <div className={styles.input_fields}>
          <label htmlFor="email">Email*</label>
          <input 
            id='email'
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email' 
            type="email" 
            required
          />

          <label htmlFor="password">Password*</label>
          <input 
            id='password' 
            placeholder='Password' 
            type="password"
            value={password} 
            required
            onChange={(e) => setPassword(e.target.value)} 
          />
          
          <button>SUBMIT</button>
        </div>

        <div className={styles.google_reg}>
            <div className={styles.reg_heading}>
                <span></span>
                <small>OR</small>
                <span></span>
            </div>

            <button id='signInDiv'>
                <span className={styles.img}>
                    <img src="https://img.icons8.com/?size=100&id=JvOSspDsPpwP&format=png&color=000000" alt="" />
                </span>
                Register with Google
            </button>
        </div>

        <div className={styles.input_footer}>
            <small>Don’t have an account? <button onClick={func}>Sign up fo free! </button></small>
        </div>
    </form>
  )
}

export default LoginForm
