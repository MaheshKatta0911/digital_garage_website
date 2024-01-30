import React from "react";
import Header from './components/Header/Header';
import Hero from './components/Hero';
import './App.css';
import Companies from './components/Companies/Companies';
import Requests from "./components/Requests/Requests";
import Contact from "./components/Contact/Contact";
import BarChart from "./components/BarChart";



export const App = () => {
  return (
    <div className="App">
      <div className="white-gradient" />
      <Header />
      <Hero />
      <Companies />
      <Requests />
      <Contact />
      <BarChart />
    </div>
  );
}

export default App;
