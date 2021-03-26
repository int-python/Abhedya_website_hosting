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
import GraphicDesignPage from './Components/ServicePage/GraphicDesignPage/GraphicDesignPage';
import ML_AIServicePage from './Components/ServicePage/ML&AI/ML_AIServicePage';
import CyberSecurityPage from './Components/ServicePage/CyberSecurity/CyberSecurityPage';
import WebDevelopmentPage from './Components/ServicePage/WebDevelopment/WebDevelopmentPage';
import AppDevelopPage from './Components/ServicePage/AppDevelopment/AppDevelopPage';
import Trainings_WorkshopsPage from './Components/ServicePage/Trainings_Workshops/Trainings_WorkshopsPage';
import Privacy_Policy from './Components/Privacy_Policy';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Componets">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/ServicePage" component={ServicePage} />
              <Route exact path="/ServicePage/GraphicDesignPage" component={GraphicDesignPage} />
              <Route exact path="/ServicePage/ML&AIPage" component={ML_AIServicePage} />
              <Route exact path="/ServicePage/CyberSecurityPage" component={CyberSecurityPage} />
              <Route exact path="/ServicePage/WebDevelopmentPage" component={WebDevelopmentPage} />
              <Route exact path="/ServicePage/AppDevelopPage" component={AppDevelopPage} />
              <Route exact path="/ServicePage/Trainings&Workshops" component={Trainings_WorkshopsPage} />
            <Route exact path="/NewsPage" component={NewsPage} />
            <Route exact path="/BlogPage" component={BlogPage} />
            <Route exact path="/Privacy_Policy" component={Privacy_Policy} />
          </Switch>
        </div>  
        <Footer />
      </div>
    </Router>  
  );
}

export default App;
