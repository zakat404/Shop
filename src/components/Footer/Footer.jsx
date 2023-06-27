import React from 'react';
import styles from '../../Styles/Footer.module.css';
import LOGO from '../../images/logo.svg';
import { ROUTES } from '../../utils/routes';
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
          <Link to={ROUTES.HOME}>
              <img src={LOGO} alt="Stuff" />
          </Link>   
      </div>

      <div className={styles.rights}>
          Developed by {" "}
          <a 
            href="https://github.com/zakat404"
            target="_blank"
            rel="noreferrer"
          >
            zakat404
          </a>
      </div>
      <div className={styles.socials}>
      <a  href="https://www.instagram.com/_zakat_404/"
          target="_blank"
          rel="noreferrer">
            <svg className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
            </svg>
          </a>
      <a  href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer" >
            <svg className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
            </svg>
          </a>
      <a  href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer">
            <svg className="icon">
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
            </svg>
          </a>
      </div>
    </section>
  )
}

export default Footer;