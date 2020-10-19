import React from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies/Movies';


function App() {

  // const [movies,setMovies]=useState();
  
  return (
    <div className="App">
      <Header />
      <Movies />
    </div>
  );
}

export default App;
