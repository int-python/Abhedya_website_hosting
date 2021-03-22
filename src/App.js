import './App.css';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ServicePage from './Components/ServicePage';
import NewsPage from './Components/NewsPage';
import BlogPage from './Components/BlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Componets">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/ServicePage" component={ServicePage} />
            <Route exact path="/NewsPage" component={NewsPage} />
            <Route exact path="/BlogPage" component={BlogPage} />
          </Switch>
        </div>  
        <Footer />
      </div>
    </Router>  
  );
}

export default App;
