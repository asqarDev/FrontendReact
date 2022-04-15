import "./App.css";

import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { About } from "./Components/About";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
