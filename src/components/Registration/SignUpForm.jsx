import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, collection } from 'firebase/firestore';
import { auth, db, googleProvider } from '../../firebase';

const SignUpForm = ({styles, name, func, changeState}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function signUpWithEmail(e) {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      
      
      // Create user Firestore collections
      await setDoc(doc(db, "users", uid), {
        email,
        createdAt: new Date(),
      });
      await setDoc(doc(collection(db, "users", uid, "myCollections")), {});
      await setDoc(doc(collection(db, "users", uid, "favorites")), {});

      localStorage.setItem('user-id', uid);
      changeState();
      console.log("User signed up and Firestore collections created");
    } catch (error) {
      console.error("Error signing up:", error);
    }
    
  }
  
  const signUpWithGoogle = async (e) => {
    e.preventDefault();
    try {
      // Sign in with Google
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Create Firestore collections for the new user
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        email: user.email,
        displayName: user.displayName,
      });

      const myCollectionsRef = doc(db, `users/${user.uid}/myCollections/info`);
      await setDoc(myCollectionsRef, {});
      
      const favoriteRef = doc(db, `users/${user.uid}/favorite/info`);
      await setDoc(favoriteRef, {});
      
      
      localStorage.setItem('g-user-id', user.uid);
      changeState();

      console.log("User signed up and Firestore collections created!");
    } catch (error) {
      console.error("Error during sign-up:", error.message);
    }
  };
  
  return (
    <form onSubmit={signUpWithEmail}>  
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

            <button>SUBMIT</button>

            <p style={{textAlign: 'center'}}>or</p>
            <br />
        </div>

        <div className={styles.signup_with_google}>
          <button onClick={signUpWithGoogle}> 
            <img src="https://img.icons8.com/?size=100&id=JvOSspDsPpwP&format=png&color=000000" alt="" />
            <small>
              Sign Up with Google
            </small>
          </button>
        </div>

        <div className={styles.input_footer}>
            <small>Already have an account? <button onClick={func}> Log In</button></small>
        </div>
    </form>
  )
}

export default SignUpForm
