import { useRef } from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import FontProvider from "./themes/FontProvider";
import BackgroundProvider from "./themes/BackgroundProvider";
import "./App.css";
import Portfolio from "./Portfolio";
import Footer from './Footer';

function App() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <BackgroundProvider>
      <FontProvider>
        <Navbar />
        <Landing executeScroll={executeScroll} />
        <Portfolio refProp={myRef} />
        <Footer />
      </FontProvider>
    </BackgroundProvider>
  );
}

export default App;
