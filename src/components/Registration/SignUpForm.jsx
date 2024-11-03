import React from 'react'

const SignUpForm = ({styles, name, func}) => {
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

        <div className={styles.input_footer}>
            <small>Already have an account? <button onClick={func}> Log In</button></small>
        </div>
    </form>
  )
}

export default SignUpForm
