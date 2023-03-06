import { Provider } from 'react-redux';
import './App.css';
import Movimientos from './pages/Movimientos';


function App() {
  return (
    <Provider>
    <div className="App">
      <header className="App-header">
        <Movimientos />
      </header>
    </div>
    </Provider>
  );
}

export default App;
