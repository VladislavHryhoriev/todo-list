import React, { useState } from 'react';
import styles from './Header.module.css'
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
	// const [theme, setTheme] = useState(0);


	return (
		<header className={styles["header"]}>
			<h2 className={styles["header__logo"]}>Todo App</h2>
			<ThemeSwitcher />
		</header>
	);
};

export default Header;