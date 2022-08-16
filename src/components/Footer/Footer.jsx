import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles["footer"]}>
			<h4 className={styles["footer-count"]}>5 items left</h4>
			<ul className={styles["status-list"]}>
				<li><button className={styles["button"]}>All</button></li>
				<li><button className={styles["button"]}>Active</button></li>
				<li><button className={styles["button"]}>Comleted</button></li>
			</ul>
			<button className={styles["button"]}>Clear Completed</button>
		</footer>
	);
};

export default Footer;