import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from "./pages/Home";
import Services from "./pages/Services"
import Nav from './components/Navbar/Nav'
import Footer from "./components/Footer/Footer"
import Product from './pages/Product'
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Services" exact component={Services}/>
        <Route path="/Product" exact component={Product}/>

      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
