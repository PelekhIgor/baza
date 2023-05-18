import React, { useState } from "react";
import styles from "./Header.module.css";

const languageLabels = {
    ua: "UA",
    en: "EN",
    pl: "PL"
};

function LanguageSwitcher() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("ua");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);

    };

    return (
        <div className={styles["language-switcher"]}>
            <div
                className={`${styles["language-switcher__button"]} ${
                    isDropdownOpen ? styles["language-switcher__button--open"] : ""
                }`}
                onClick={toggleDropdown}
            >
                {languageLabels[selectedLanguage]}
                <div className={styles["language-switcher__arrow"]}></div>
            </div>
            {isDropdownOpen && (
                <ul className={styles["language-switcher__dropdown"]}>
                    <li
                        className={styles["language-switcher__item"]}
                        onClick={() => selectLanguage("ua")}
                    >
                        {languageLabels.ua}
                    </li>
                    <li
                        className={styles["language-switcher__item"]}
                        onClick={() => selectLanguage("en")}
                    >
                        {languageLabels.en}
                    </li>
                    <li
                        className={styles["language-switcher__item"]}
                        onClick={() => selectLanguage("pl")}
                    >
                        {languageLabels.pl}
                    </li>
                </ul>
            )}
        </div>
    );
}

export default LanguageSwitcher;