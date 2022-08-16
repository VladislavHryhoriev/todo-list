import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import state from './state'

let StateContext = React.createContext(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<StateContext.Provider value={state}>
			<App />
		</StateContext.Provider>
	</React.StrictMode>
);