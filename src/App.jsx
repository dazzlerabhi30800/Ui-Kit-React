import "./App.css";
import CalendarComp from "./components/Calendar/CalendarComp";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import SignComp from "./components/SignIn/SignComp";

function App() {
  return (
    <>
      <main className="grid grid-cols-3 gap-4 w-full max-w-[1000px] py-4">
        <Navbar />
        <SignComp />
        <CalendarComp />
        <Profile />
        <Gallery />
      </main>
    </>
  );
}

export default App;
