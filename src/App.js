
import Header from './app/header/Header';
import Footer from './app/footer/Footer';
import Homepage from "./components/homepage/Homepage";


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
