import { useState } from 'react';


const LoginForm = ({styles, name, func, ToastContainers, notifyMe}) => {  
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('');


  return (
    <form>
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
