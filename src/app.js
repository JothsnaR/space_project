import React from 'react';
import MainComponent from './components/MainComponent';
// import Home from './pages/Home';
// import fetch from "isomorphic-fetch";

function App() {

  // const data = async() => {
  //   await fetch('https://api.spaceXdata.com/v3/launches?limit=100').then(res => res.json()).then(result => {
  //     return result
  //   })
  // }

  // console.log('data', data())
    return (
      <div className="App">
        <MainComponent />
      </div>
    );
  }
export default App;