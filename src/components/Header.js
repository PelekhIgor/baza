import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/img/logo.png";
import "../fonts/fonts.css";


function Header() {
    const location = useLocation();

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className={styles["header-nav"]}>
            <div className={styles["header-left"]}>
                <div className={styles["header-logo-container"]}>
                    <NavLink exact to="/" className={styles["header-logo-link"]}>
                        <img src={logo} alt="Logo" className={styles["header-logo"]} />
                    </NavLink>
                </div>
            </div>
            <div className={styles["header-middle"]}>
                <ul className={styles["header-nav__ul"]}>
                    <li className={styles["header-nav__li"]}>
                        <NavLink
                            exact
                            to="/"
                            className={`${styles["header-link"]} ${
                                isActiveLink("/") && styles["header-link--active"]
                            }`}
                        >
                            Проекти
                        </NavLink>
                    </li>
                    <li className={styles["header-nav__li"]}>
                        <NavLink
                            to="/partners"
                            className={`${styles["header-link"]} ${
                                isActiveLink("/partners") && styles["header-link--active"]
                            }`}
                        >
                            Партнери
                        </NavLink>
                    </li>
                    <li className={styles["header-nav__li"]}>
                        <NavLink
                            to="/links"
                            className={`${styles["header-link"]} ${
                                isActiveLink("/links") && styles["header-link--active"]
                            }`}
                        >
                            Корисні посилання
                        </NavLink>
                    </li>
                    <li className={styles["header-nav__li"]}>
                        <NavLink
                            to="/contacts"
                            className={`${styles["header-link"]} ${
                                isActiveLink("/contacts") && styles["header-link--active"]
                            }`}
                        >
                            Контакти
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles["header-right"]}>
                <LanguageSwitcher />
            </div>
        </nav>
    );
}

export default Header;