import './App.css';
import Home from './Components/Home';
import Characters from './Components/Characters/Characters';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Music from './Components/Music/Music';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Characters" component={Characters} />
          <Route path="/Music" component={Music} />
        </Switch>

      </div>
    </Router>
  );
}
export default App;
