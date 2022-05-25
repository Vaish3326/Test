import React, { Component } from 'react';
import './App.css';
import Register from './components/register';
import Login from './components/login'
import AddMovie from './components/addMovieForm';

class App extends Component {
  render(){
  return (
    <div>
    <main className="container">
      <Register />
    </main>
    </div>
  );
}
}

export default App;
