import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={'./alkemy_logo.svg'} className="App-logo" alt="logo" />
          <p>
            Bienvenido a AlkyBank
          </p>
        </header>
      </div>
    </ReduxProvider>
  );
}

export default App;
