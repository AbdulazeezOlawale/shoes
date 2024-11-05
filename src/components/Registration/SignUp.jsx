import React, { useState } from 'react';
import styles from "../Registration/signup.module.css"
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({notifyMe}) => {
  
	const notify = () => toast.success("Sign Up successful !");

  fetch('https://e-commerce-backend-9a82.onrender.com/user/all_users/')
    .then((res) => (
      res.json()
    ))
    .then((data) => (
      console.log(data)
      
    ))

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
          {tag === "Log In" ? <LoginForm name={name} styles={styles} func = {chanageToSignUp} ToastContainers={ToastContainer} notifyMe={notifyMe}/> : <SignUpForm name={name} styles={styles} func = {changeToLogin} toast = {notify}/>}
        </section>
      </div>
    </div>
  )
}

export default SignUp
