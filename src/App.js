import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Routes from './routes';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import './App.css';


const App = () => {
    return (
		<Provider store={store}>
			<Router>
				<Header />
				<Routes />
				<Footer />
			</Router>
		</Provider>
    );
}


export default App;
