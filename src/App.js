import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/Context/AuthProvider';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';
import Contact from './Pages/Home/Contact/Contact';
import ExploreMore from './Pages/Home/ExploreMore/ExploreMore';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import OrderPlace from './Pages/OrderPlace/OrderPlace';
import Login from './Pages/UserLogin/Login/Login';
import PrivateRoute from './Pages/UserLogin/PrivateRoute/PrivateRoute';
import Register from './Pages/UserLogin/Register/Register';

function App() {
  return (
   <AuthProvider>
      <BrowserRouter>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
          <Home></Home>
        </Route>
        {/* <Route  path="/contact">
          <Contact></Contact>
        </Route> */}
        {/* <Route path="/dashBoard">
          <DashBoard></DashBoard>
        </Route> */}
        <Route  path="/login">
         <Login></Login>
        </Route>
        <Route  path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute path="/placeOrder/:id">
         <OrderPlace></OrderPlace>
        </PrivateRoute>
        {/* <Route path="/explore">
          <ExploreMore></ExploreMore>
        </Route> */}
        <Route exact path="*">
         <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
   </AuthProvider>

  );
}

export default App;
