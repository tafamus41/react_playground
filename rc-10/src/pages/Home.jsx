import React from "react";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";

const Home = () => {
  const [tutorials, setTutorials] = useState([])
  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  
  return (
    <div>
      <AddBilgi />
      <BilgiList />
    </div>
  );
};

export default Home;
