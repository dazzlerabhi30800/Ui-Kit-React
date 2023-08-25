import "./App.css";
import Navbar from "./components/Navbar";
import SignComp from "./components/SignIn/SignComp";

function App() {
  return (
    <>
      <main className="grid gap-4 w-full max-w-[1000px]">
        <Navbar />
        <SignComp />
      </main>
    </>
  );
}

export default App;
