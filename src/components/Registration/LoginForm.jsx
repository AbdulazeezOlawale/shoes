import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { auth, googleProvider } from '../../firebase';


const LoginForm = ({styles, name, func, changeState}) => {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);

      
      localStorage.setItem('user-id', userCredential.user.uid);
      changeState();
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("Login failed. Check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);      
      localStorage.setItem('g-user-id', result.user.uid);
      changeState();
      console.log("Google login successful:", result.user);
    } catch (error) {
      console.error("Error with Google login:", error.message);
      alert("Google login failed.");
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
        
        
        <div className={styles.signup_with_google}>
          <button onClick={() => handleGoogleLogin()}> 
            <img src="https://img.icons8.com/?size=100&id=JvOSspDsPpwP&format=png&color=000000" alt="" />
            <small style={{color: 'black', fontWeight: 'bold'}}>
              Sign Up with Google
            </small>
          </button>
        </div>
      </div>

      <div className={styles.input_footer}>
          <small>Don’t have an account? <button onClick={func}>Sign up fo free! </button></small>
      </div>
    </form>
  )
}

export default LoginForm
