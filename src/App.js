import './App.css';
import Home from './Components/Home';
// import Characters from './Components/Characters/Characters';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Create from './Components/Characters/Create';
// import Music from './Components/Music/Music';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <div className="App">
        <Navigationbar />
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="/Characters" component={Characters} /> */}
          <Route path="/Music" component={Music} />
          {/* <Route path="/Create" component={Create} /> */}
        </Switch>

      </div>
    </Router>
  );
}
export default App;
