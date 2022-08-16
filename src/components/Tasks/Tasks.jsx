import React from 'react';
import styles from './Tasks.module.css'

const Tasks = () => {

	return (
		<section className={styles["tasks"]}>
			<div className={styles["task"]}>
				<label className={styles["task-body"]} >
					<input type="checkbox" name="task-checkbox" id={styles["task-body__status"]} />
					<p className={styles["task-body__text"]}>Just first task in my day</p>
				</label>
				<button className={styles["task-body__delete"]}>
					<svg className={styles["image-svg"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
				</button>
			</div>
			<div className={styles["task"]}>
				<label className={styles["task-body"]} >
					<input type="checkbox" name="task-checkbox" id={styles["task-body__status"]} />
					<p className={styles["task-body__text"]}>Just first task in my day</p>
				</label>
				<button className={styles["task-body__delete"]}>
					<svg className={styles["image-svg"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
				</button>
			</div>
		</section>
	);
};

export default Tasks;