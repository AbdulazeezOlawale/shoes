import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react'
import { setUser } from '../../store/ReduxStore';
import { useDispatch } from 'react-redux';

const LoginForm = ({styles, name, func}) => {

  const dispatch = useDispatch();

  const handleCallbackResponse = (response) => {
    // decode the responce data coming from google oauth
    const userObject = jwtDecode(response.credential);
    console.log(userObject);

    // Dispatch the user data to Redux store
    dispatch(setUser(userObject));
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
  

  return (
    <form action="">
        <div className={styles.heading}>
            <h1>{name[0]}</h1>
            <small>{name[1]}</small>
        </div>

        <div className={styles.input_fields}>
            <label htmlFor="email">Email*</label>
            <input id='email' placeholder='Email' type="email" />

            <label htmlFor="password">Password*</label>
            <input id='password' placeholder='Password' type="password" />

            <label htmlFor="repassword">Confirm Password*</label>
            <input id='repassword' placeholder='Password' type="password" />
            <input type="submit" value="SUBMIT" />
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
