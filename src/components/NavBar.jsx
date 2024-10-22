import React from 'react';
import { Link } from 'react-router-dom';
import styles from  '../styles/navbar.module.css';

const NavBar = () => {
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

                <Link to="/contact">
                    <li>
                        <div className={styles.nav_icon}>
                            <img src="https://img.icons8.com/?size=100&id=kqlTT3Fp2Ga1&format=png&color=000000" alt="contact" />
                        </div>
                    </li>
                </Link>

                <Link to="/contact">
                    <li>
                        <div className={styles.nav_icon}>
                            <img src="https://img.icons8.com/?size=100&id=0j6tDxtI4hv1&format=png&color=000000" alt="contact" />
                        </div>
                    </li>
                </Link>
            </ul>
            <div className={styles.logo}>
                <img src="./images/logo.png" alt="logo" />
            </div>
            
            <div className={styles.search_container}>
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
