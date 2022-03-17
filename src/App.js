import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Genres from "./components/Genres";
import WishList from "./components/WishList";
import Login from "./components/Login";
import Movies from "./components/Header/Movies";
import Series from "./components/Header/Series";

//The router is the component that will handle the routing of the application.
//The Switch component is used to render the first matching route.
//The Route component is used to render a specific component when a specific path is requested.
//The exact path is used to render the component only when the exact path is requested.
//The path is used to render the component when the path is requested. The path is a regular expression. The path can contain variables. The variables are defined with a colon (:).

//The variable name is used in the component as a prop.

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/genre/:genre">
            <Genres />
          </Route>
          <Route path="/wishlist">
            <WishList />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route>
            <Series/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
