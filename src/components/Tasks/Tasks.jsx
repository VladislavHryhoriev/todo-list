import React from 'react';
import Task from './Task';
import styles from './Tasks.module.css'

const Tasks = (props) => {
	let taskElements = props.posts.map(item => {
		return <Task
			posts={props.posts}
			key={item.id}
			isChecked={item.isChecked}
			postText={item.postText}
			id={item.id} />
	});


	return (
		<section className={styles["tasks"]}>
			{taskElements}
		</section>
	);
};

export default Tasks;