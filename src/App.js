import './App.css';
import Header from './components/Header/Header';
import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className='todo-app'>
			<Header />
			<NewTask />
			<div className='todo-menu'>
				<Tasks />
				<Footer />
			</div>
		</div>
	)
}

export default App;