import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Provider store={store()}>
      <BrowserRouter>
        <div>
          Hello World!
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
