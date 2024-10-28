import FlexAndResponsive from "./components/FlexAndResponsive";
import HoverAndFocus from "./components/HoverAndFocus";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import SpacingAndSizing from "./components/SpacingAndSizing";
import Typography from "./components/Typography";

function App() {
  return (
    <div className="dark:bg-gray-600 min-h-screen">
      <Navbar />
      <h1 className="text-2xl text-center text-purple-700 font-bold dark:text-white font-bold">Merhaba Tailwind</h1>
      <ProfileCard />
      {/* <Typography /> */}
      {/* <SpacingAndSizing /> */}
      {/* <HoverAndFocus /> */}
      {/* <FlexAndResponsive /> */}
    </div>
  );
}

export default App;
