import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Fragment} from "react"

import "./scss/app.scss"

function App() {
  return (
    // <Fragment key="">
    <>
      <Navbar />
      <Card />
      <Footer />
    </>
  );
}

export default App;
