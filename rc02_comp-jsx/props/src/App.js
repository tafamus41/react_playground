import Dog from "./components/Dog";

function App() {
  return (
    //! JSX
    <div className="App">
      <Dog
        name="Husky"
        img="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_640.jpg"
        color="brown"
        // isBlueEyed={false}
      />
      <Dog
        name="Karabaş"
        img="https://cdn.pixabay.com/photo/2024/02/05/16/23/labrador-8554882_640.jpg"
        color="black"
        // isBlueEyed={false}
      />
      <Dog
        name="Kangal"
        img="https://cdn.pixabay.com/photo/2016/10/15/12/01/dog-1742295_640.jpg"
        // color="gray"
        // isBlueEyed={true}
        isBlueEyed
      />
    </div>
  );
}

export default App;
