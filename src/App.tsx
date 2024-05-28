import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from "./Redux";
import RepositoriesList from "./components/RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
