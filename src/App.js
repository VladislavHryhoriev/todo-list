import './App.css';
import Header from './components/Header/Header';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
	let [posts, setPosts] = useState([]);

	useEffect(e => {
		console.log(posts);
	});

	return (
		<div className='todo-app'>
			<Header />
			<NewTask posts={posts} setPosts={setPosts} />
			<div className='todo-menu'>
				<Tasks posts={posts} />
				<Footer />
			</div>
		</div>
	)
}

export default App;