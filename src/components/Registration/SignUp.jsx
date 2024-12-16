import React, { useState } from 'react';
import styles from "../Registration/signup.module.css"
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({changeState}) => {
  
  const [name, setName] = useState(["Welcome Back👋", "We are happy to have you back"]);
  const [tag, settag] = useState("Sign Up");
  
  const chanageToSignUp = () => {
    settag("Sign Up");
    setName(["Create an Account👋", "Kindly fill in your details to create an account"]);
  }
  
  const changeToLogin = () => {
    settag("Log In");
    setName(["Welcome Back👋", "We are happy to have you back"]);
  }
 

  return (
    <div className={`container ${styles.signup_container}`}>
      <div className={styles.container_img}>
        {
          tag === "Log In" ? <img src="./images/login.jpg" alt="" /> : <img src="./images/signup.png" alt="" />
        }
      </div>

      <div className={styles.container_form}>
        <div className={styles.form_btn}>
          <button className={tag === "Log In" ? styles.active_form_btn : ""} onClick={() => changeToLogin()}>Log In</button>
          <button className={tag === "Sign Up" ? styles.active_form_btn : ""} onClick={() => chanageToSignUp()}>Sign Up</button>
        </div>

        <section className={styles.form}>
          {tag === "Log In" ? <LoginForm name={name} styles={styles} func = {chanageToSignUp} /> : <SignUpForm name={name} styles={styles} func = {changeToLogin} changeState={changeState}/>}
        </section>
      </div>
    </div>
  )
}

export default SignUp
