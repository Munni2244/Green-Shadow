import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route>
       <Home></Home>
       </Route>
     </Switch>
    </BrowserRouter>
  
  );
}

export default App;
