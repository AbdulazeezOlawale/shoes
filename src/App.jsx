import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Store from './components/Store/Store'
import NavBar from './components/Navbar/NavBar'
import Headroom from 'react-headroom'
import SignUp from './components/Registration/SignUp'
import Cart from './components/cart/Cart'
import Profile from './components/profile/Profile'
import FavouriteSection from './components/FavouriteSection/FavouriteSection'
import SliderAnimation from './components/Home/Animations/SliderAnimation'


const App = () => {

  const [user, setUser] = useState(null)
  const [guser, setGuser] = useState(null)

  useEffect(() => {
      const storedUser = localStorage.getItem('user-id');
      const storedGUser = localStorage.getItem('g-user-id');
      setUser(storedUser);
      setGuser(storedGUser);

      console.log('User data updated:', { user: storedUser, guser: storedGUser });
  }, []);
  
  const changeState = () => {
    const storedUser = localStorage.getItem('user-id');
    const storedGUser = localStorage.getItem('g-user-id');
    setUser(storedUser);
    setGuser(storedGUser);

    console.log('User data updated:', { user: storedUser, guser: storedGUser });
  } 
  

  return (
    <div>
      <div className="nav-bar">
        <Headroom>
          <NavBar user={user} guser={guser} changeState = {changeState}/>
        </Headroom>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        {
          (user || guser) && <Route path="/profile" element={<Profile />} />
        }
        {
          (user || guser) && <Route path="/liked" element={<FavouriteSection />} />
        }
        <Route path="*" element={<Navigate to="/" replace />} />
        {
          (user === null && guser === null) && <Route path='/register' element={<SignUp changeState = {changeState}/>}/>
        }
      </Routes>
      
      <SliderAnimation>
        <footer className="footer container">
          <div className="footer_top">
            <div className="left">
              <h3>Join our KicksPlus Club & get 15% off</h3>
              <small>Sign up for free! Join the community.</small>

              <form action="">
                <input type="text" />
                <button>SUBMIT</button>
              </form>
            </div>

            <div className="right">
              <img src="./images/footer-img1.png" alt="" />
            </div>
          </div>

          <div className="footer_bottom">
            <div className="desc">
              <ul className="about_us">
                <h3>About us</h3>
                <li>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</li>
              </ul>
              <ul className="cate">
                <h3>Categories</h3>
                <li>Runners</li>
                <li>Sneakers</li>
                <li>Basketball</li>
                <li>Outdoor</li>
                <li>Golf</li>
                <li>Hiking</li>
              </ul>
              <ul className="company">
                <h3>Company</h3>
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
              </ul>
              <ul className="follow_us">
                <h3>Follow us </h3>
                <li><img src="./images/socials.png" alt="" /></li>
              </ul>
            </div>

            <div className="logo">
              <img src="./images/footer-img2.png" alt="" />
            </div>
          </div>

        </footer>
        <p style={{textAlign: "center", marginBottom: "1rem"}} className='container'>All rights reserved | Made by <span style={{color: "#4A69E2"}}>Õriõn</span></p>
      </SliderAnimation>
    </div>
    
  )
}

export default App
