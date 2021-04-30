import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProjectBlog from "./components/ProjectBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/* Home page */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Blogs about projects */}
          <Route exact path="/blog/:name" component={ProjectBlog}>

          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
