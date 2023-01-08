import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/index.scss';
import { HOME, ABOUT, WORK, CONTACT } from './constants/paths';
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Home from "./components/pages/Home"
import Work from "./components/pages/Work";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";


export default function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route exact path={ HOME } element={< Home />}></Route>
            <Route exact path={ ABOUT } element={< About />}></Route>
            <Route exact path={ WORK } element={< Work />}></Route>
            <Route exact path={ CONTACT } element={< Contact />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
