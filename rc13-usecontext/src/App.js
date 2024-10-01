import { createContext, useContext, useState } from "react";
import Home from "./components/Home";
import data from "./data";
export const StudentContext = createContext();
function App() {
  const [students, setStudents] = useState(data);
const changeColor=(id,newRenk)=>{
  setStudents(students.map((a)=>a.id===id && {...a,color:newRenk}))

}

  return (
    <div className="App">
      <StudentContext.Provider value={{students,changeColor}}>
        <Home />
      </StudentContext.Provider>
    </div>
  );
}

export default App;
