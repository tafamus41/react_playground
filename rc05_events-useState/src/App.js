import Event from "./components/1-events/Event";
import Counter from "./components/2-classComponent/Counter";
import UseStateCounter from "./components/3-usestate/UseStateCounter";
import UseStateObject from "./components/3-usestate/UseStateObject";

function App() {
  return (
    <div className="App text-center">
      <h1>Events - useState Hook</h1>
      {/* <Event /> */}
      {/* <Counter /> */}
      {/* <UseStateCounter /> */}
      <UseStateObject />
    </div>
  );
}

export default App;
