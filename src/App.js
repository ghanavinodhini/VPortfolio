
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './app/header/Header';
import Footer from './app/footer/Footer';
import Homepage from "./components/homepage/Homepage";
import MenuItems from "./app/navbar/MenuItems";
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Experiences from './components/experiences/Experiences';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <Header />
      </div> 
      <div className="app-homepage">
        <Homepage />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
