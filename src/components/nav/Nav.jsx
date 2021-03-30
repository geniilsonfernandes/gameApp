import React from "react";
//css
import styles from "./nav.module.css";
import global from "../../styles/global.module.css";
//svg
import Logo from "../../svg/nav/Logo";
import Favorite from "../../svg/nav/FavoriteSvg";
//import InputNav from "./InputNav/InputNav";
import { Link } from "react-router-dom";

// comp
const Nav = (props) => {
  
  return (
    <section className={global.mwfix}>
      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          <Link to="/" > <Logo colorOne="#757578" colorTwo="#202528" /> </Link> 
          
        </div>
        <div className={styles.nav__input}>
          {/* <InputNav /> */}
        </div>
        <div className={styles.nav__favorites}>
          <Favorite />
        </div>
      </nav>
    </section>
  );
};

export default Nav;
