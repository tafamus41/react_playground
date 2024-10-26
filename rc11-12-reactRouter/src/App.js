import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route/>
        <Route/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
