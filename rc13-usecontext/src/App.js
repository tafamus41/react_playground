import { useContext, useState } from "react";
import Home from "./components/Home"
import data from "./data"

function App() {
  export const StudentContext=useContext()
  const[students,setStudents]=useState(data)
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
