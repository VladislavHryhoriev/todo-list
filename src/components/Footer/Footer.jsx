import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles["footer"]}>
			<h4 className={styles["footer-count"]}>5 items left</h4>
			<ul className={styles["status-list"]}>
				<li> <a href='#' className={styles["status-list__Item"]}>All</a></li>
				<li> <a href='#' className={styles["status-list__Item"]}>Active</a></li>
				<li> <a href='#' className={styles["status-list__Item"]}>Compeleted</a></li>
			</ul>
			<button>Clear Completed</button>
		</footer>
	);
};

export default Footer;