import { createContext, useContext, useState } from "react";
import Home from "./components/Home"
import data from "./data"
export const StudentContext=createContext()
function App() {
  
  const[students,setStudents]=useState(data)
  return (
    <div className="App">
      
     <Home/>
    </div>
  );
}

export default App;
