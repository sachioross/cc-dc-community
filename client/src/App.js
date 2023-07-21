import "./App.css";
import Homepage from "./components/home/Homepage";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/xpf5njd.css"
        ></link>
      </header>
      <div className="container">
        {/* <Navbar /> */}
        <Homepage />
      </div>
    </div>
  );
}

export default App;
