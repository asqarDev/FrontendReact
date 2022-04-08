import { Button, Card } from "react-bootstrap";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className=" ">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
