import Navbar from "./Navbar";
import Landing from "./Landing";
import FontProvider from "./themes/FontProvider";
import BackgroundProvider from "./themes/BackgroundProvider";
import "./App.css";
import Portfolio from "./Portfolio";
import Footer from './Footer';

function App() {
  return (
    <BackgroundProvider>
      <FontProvider>
        <Navbar />
        <Landing />
        <Portfolio />
        <Footer />
      </FontProvider>
    </BackgroundProvider>
  );
}

export default App;
