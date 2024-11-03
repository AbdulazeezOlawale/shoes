import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Store from './components/Store/Store'
import NavBar from './components/Navbar/NavBar'
import Headroom from 'react-headroom'
import SignUp from './components/Registration/SignUp'
import Cart from './components/cart/Cart'
import Profile from './components/profile/Profile'
import { useSelector } from 'react-redux'

const App = () => {
  
  // access google oauth data from redux
  const user = useSelector((state) => state.user);

  return (
    <div>
      <div className="nav-bar">
        <Headroom>
          <NavBar/>
        </Headroom>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {
          !user && <Route path='/signup' element={<SignUp/>}/>
        }
      </Routes>

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
    </div>
    
  )
}

export default App
