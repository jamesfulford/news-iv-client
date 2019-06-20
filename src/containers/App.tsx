import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

const App: React.FC = () => {
  return (
    <Provider store={store()}>
      <BrowserRouter>
        <div className="onboarding">
          <Navbar />
        </div>

        <div>Hello World!</div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
