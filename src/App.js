import './App.css';
import Home from './Components/Home';
import Navigationbar from './Components/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
    <Navigationbar />
     <Home />
     <Login />
    </div>
  );
}
export default App;
