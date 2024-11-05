import React from 'react';
import { Link } from 'react-router-dom';
import styles from  '../Navbar/navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../store/ReduxStore';

const NavBar = () => {
    
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearUser()); // Dispatch the CLEAR_USER action to reset user state
        localStorage.removeItem('user'); // Optional: Remove from localStorage if needed
    };

    const user = useSelector((state) => state.user);
    const auth_token = useSelector((state) => state.authToken);

    return (
        <nav>
            <div className={`container ${styles.navbar}`}>

                <ul>
                    <Link to="/">
                        <li>
                            <div className={styles.nav_icon}>
                                <img src="https://img.icons8.com/?size=100&id=6RlaHUy2CmGh&format=png&color=000000" alt="home" />
                            </div>
                        </li>
                    </Link>

                    <Link to="/store">
                        <li>
                            <div className={styles.nav_icon}>
                                <img src="https://img.icons8.com/?size=100&id=TEMM7IXaaarX&format=png&color=000000" alt="store" />
                            </div>
                        </li>
                    </Link>

                    <Link to="/cart">
                        <li>
                            <div className={styles.nav_icon}>
                                <img src="https://img.icons8.com/?size=100&id=kqlTT3Fp2Ga1&format=png&color=000000" alt="contact" />
                            </div>
                        </li>
                    </Link>

                    {
                        (user || auth_token) && <Link to="/profile">
                            <li>
                                <div className={styles.nav_icon}>
                                    <img src="https://img.icons8.com/?size=100&id=0j6tDxtI4hv1&format=png&color=000000" alt="contact" />
                                </div>
                            </li>
                        </Link>
                    }
                </ul>

                <div className={styles.logo}>
                    <img src="./images/logo.png" alt="logo" />
                </div>

                <div className={styles.search_container}>  

                    {
                        (user === null && auth_token === null) && <div className={styles.reg}>
                            <Link className={styles.signup} to='/register'>Sign Up</Link>
                        </div> 
                    } 

                    {
                        (user !== null || auth_token !== null) && <div onClick={() => handleLogout()} className={styles.reg}>
                            <Link className={styles.signup} to='/'>Logout</Link>
                        </div>
                    }

                    <form className={styles.search_box}>
                        <input placeholder='search...' type="text" className={styles.input_search}/>
                        <button>
                            <img src="https://img.icons8.com/?size=100&id=12513&format=png&color=000000" alt="search icon" />
                        </button>
                    </form>
                </div>            
            </div>
        </nav>
    )
}

export default NavBar
