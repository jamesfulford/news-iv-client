import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import Main from '../Main';
import initialize from './initialization';
import './App.css';

initialize(store);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="onboarding">
          <Navbar />
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
