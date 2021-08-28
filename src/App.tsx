import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import {store} from './state'
import RepositoriesList from './components/RepositoriesList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Search for a package</h1>
        <RepositoriesList/>
      </div>
    </Provider>
  );
}

export default App;
