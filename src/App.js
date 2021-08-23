import NavBar from './navbar/Navbar';
import Homepage from "./components/homepage/Homepage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Projects from './components/projects/Projects';
function App() {
  return (
    <div>
    <div className="app-main" >
        <NavBar/>
        
      </div>
      <Router>
      <Switch>
        <Route path="/"><Homepage/></Route>
        <Route path="/projects"><Projects /></Route>
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
