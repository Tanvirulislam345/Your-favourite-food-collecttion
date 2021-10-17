import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Breakfast from './components/Dishes/Brakfast/Breakfast';
import Lunch from './components/Dishes/Lunch/Lunch';
import Dinner from './components/Dishes/Dinner/Dinner';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MiddleNav from './components/MiddleNav/MiddleNav';
import OurService from './components/OurService/OurService';
import OurFoods from './components/OurFoods/OurFoods';

function App() {

  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/breakFast">
            <MiddleNav></MiddleNav>
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <MiddleNav></MiddleNav>
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <MiddleNav></MiddleNav>
            <Dinner></Dinner>
          </Route>
          <Route path="/ourFood">
            <OurFoods></OurFoods>
          </Route>
          <Route path="/services">
            <OurService></OurService>
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
