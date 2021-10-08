import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Random from "./components/Random";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/random" component={Random} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
