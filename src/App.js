import './App.css';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'./alkemy_logo.svg'} className="App-logo" alt="logo" />
        <p>
          Bienvenido a AlkyBank
        </p>
      </header>
      <Footer/>
    </div>
   
  );
}

export default App;
