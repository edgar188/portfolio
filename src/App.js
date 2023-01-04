import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { HOME, WORK, ABOUT, CONTACT } from './constants/paths';
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";
import Home from "./components/Home"
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path={ HOME } element={< Home />}></Route>
          <Route exact path={ WORK } element={< Work />}></Route>
          <Route exact path={ ABOUT } element={< About />}></Route>
          <Route exact path={ CONTACT } element={< Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
