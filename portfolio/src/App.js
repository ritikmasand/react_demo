import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Profile />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
