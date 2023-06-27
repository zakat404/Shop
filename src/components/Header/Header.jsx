import React from 'react'
import styles from '../../Styles/Header.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg';
import avatar from '../../images/avatar.jpg'



const Header = () => {
  return (
   <div className={styles.header}>
    <div className={styles.logo}>
    <Link to={ROUTES.HOME}>
        <img src={LOGO} alt="Stuff" />
    </Link>   
    </div>
    <div className={styles.info}>
        <div className={styles.user}>
            <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }}></div>
            <div className={styles.username}>gosti</div>
        </div>

        <form className={styles.form}>
        <div className={styles.icon}>
            <svg className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
        </div>
        <div className={styles.input}>
            <input type="search" 
            name='search' 
            placeholder='search' 
            autoComplete='off' 
            onChange={() => {}}
            value=""
            />
        </div>
        {false && <div className={styles.box}></div>}
        </form>

        <div className={styles.account}>
            <Link to={ROUTES.HOME} className={styles.favourites}>
                <svg className={styles["icon-fav"]}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                </svg>
            </Link>

            <Link to={ROUTES.CART} className={styles.cart}>
                <svg className={styles["icon-cart"]}>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                </svg>
                <span className={styles.count}>23</span>
            </Link>
        </div>

    </div>
   </div>
  )
}

export default Header;