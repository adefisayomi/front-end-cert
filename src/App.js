import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Random from './components/randon-quotes/random'

function App() {
  return (
    <Router>
      <div className= 'App'>
      <Switch>
        <Route  exact path= '/random' component= {Random} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
