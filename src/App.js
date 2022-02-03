
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Component/Pages/Homes/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Home></Home>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
