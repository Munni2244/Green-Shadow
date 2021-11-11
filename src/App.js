import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/Context/AuthProvider';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/UserLogin/Login/Login';
import Register from './Pages/UserLogin/Register/Register';

function App() {
  return (
   <AuthProvider>
      <BrowserRouter>

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
        <Route exact path="/login">
         <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </BrowserRouter>
   </AuthProvider>

  );
}

export default App;
