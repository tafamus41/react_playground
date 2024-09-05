import React from "react";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";

const Home = () => {
  const [tutorials, setTutorials] = useState([])
  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  

const getBilgiler=async()=>{
const res=await axios.get(url)
setTutorials(res.data)
}
// getBilgiler()
  return (
    <div>
      <AddBilgi />
      <BilgiList />
    </div>
  );
};

export default Home;
