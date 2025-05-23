import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './NewTask.module.css'

const NewTask = (props) => {
	let [updateText, setUpdateText] = useState('');
	let onAddPost = e => {
		let newPost = {
			id: 0,
			isChecked: false,
			postText: updateText,
		}
		if (updateText !== '') {
			props.setPosts(posts => [...posts, newPost]);
			setUpdateText(updateText = '');
		}

	};

	let onUpdateText = e => setUpdateText(updateText = e.target.value);

	return (
		<section className={styles["new-task"]}>
			<TextareaAutosize
				className={styles["new-task__input"]}
				value={updateText}
				onChange={onUpdateText} />
			<button className={styles["new-task__send"]} onClick={onAddPost}>
				<svg className={styles["image-svg"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" /></svg>
			</button>
		</section>
	);
};

export default NewTask;