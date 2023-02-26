import './App.css';
import NavBar from './components/header/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img  src={'./alkemy_logo.svg'} className="App-logo" alt="logo" />
        <p>
          Bienvenido a AlkyBank
        </p>
      </header>
    </div>
  );
}

export default App;
