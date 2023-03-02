import "./App.css"
import NavBar from "./components/navbar/NavBar"
import Router from "./routes/Router"

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      <Router />
      </header>
    </div>
  );
}

export default App;
