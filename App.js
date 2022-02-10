import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Buku from "./components/Buku";
import Bukud from "./components/Bukud";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/buku" component={Buku} />
        <Route exact path="/buku/:id" component={Bukud} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
