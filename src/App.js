import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Home/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/dashboard">
          <DashBoard></DashBoard>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
