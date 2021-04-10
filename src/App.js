import React from 'react';
import './App.css';
import Header from './component/Header'
import Categories from './component/Categories'
import UserDetails from './component/UserDetails';                                                                                                                                                                  
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: 'Grocery',
    }
  }
  changeName = () => {
    // alert("Grocery it going to update womens collection offers");
    this.setState({
      categoryName: 'Womes Collection offers',
    });
  }
 
  render() {
    return (
      <div class="Flipkart-wrapper">
        <Header />
        <div className="navigation">
          <Router>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
            </ul>
            {/* <Route exact path="/" component={Home} /> */}
            <Route  path="/about" component={About} />
            <Route  path="/Contact" component={Contact} />
          </Router>
        </div>
        <Categories cat={this.state.categoryName} />
        <button onClick={this.changeName} > Clik Here </button>
        <UserDetails />
       
      </div>
    );
  }
}

export default App;
