import react, { Component } from 'react';
import logo from './logo.svg';
import Clicker from './Clicker';
import './App.css';

class App extends Component {
  render (){
  return (
    <div className="App">
      <Clicker />
    </div>
  );
  }
}

export default App;
