import React, { useState } from 'react'

const SignUpForm = ({styles, name, func, toast}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // logging in through postman's data
  async function signupUser(email, password, confirmPassword) {
    try {
      console.log('Attempting sign up with:', { email, password, confirmPassword });

      const response = await fetch('https://e-commerce-backend-9a82.onrender.com/auth/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, "re_password": confirmPassword }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // parse error message if available
        throw new Error(`Sign up failed: ${errorData?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      console.log('Signup successful:', data);
      return data; // Return data to handle it in handleSignup if needed
    } catch (error) {
      console.error('Error signing up in:', error.message);
      throw error; // Re-throw the error if you need to handle it in the caller
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      const userData = await signupUser(email, password, confirmPassword);
      console.log('User data:', userData);
      func();
      // handle signup success actions here, like storing user data
      toast();
    } catch (error) {
      console.error('Signup error:', error);
      // Optionally, display error to the user
    }
  };

  return (
    <form onSubmit={handleSignup}>  
        <div className={styles.heading}>
            <h1>{name[0]}</h1>
            <small>{name[1]}</small>
        </div>
        
        <div className={styles.input_fields}>
            <label htmlFor="email">Email*</label>
            <input 
              id='email' 
              placeholder='Email' 
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)} 
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

            <label htmlFor="repassword">Confirm Password*</label>
            <input 
              id='repassword' 
              placeholder='Password' 
              type="password" 
              value={confirmPassword} 
              required
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />

            <button>SUBMIT</button>
        </div>

        <div className={styles.input_footer}>
            <small>Already have an account? <button onClick={func}> Log In</button></small>
        </div>
    </form>
  )
}

export default SignUpForm
