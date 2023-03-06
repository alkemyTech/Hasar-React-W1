import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Movimientos from './pages/Movimientos';
import { increment, decrement, incrementBy } from './store/slices/counter/counterSlice';

//prueba para enviar obj por props a Movimientos
const transactions = [
  {
    id: 1,
    date : '07/06/2023',
    description: 'Varios',
    amount: 4500,
    balance: 5000
  },
  {
    id: 2,
    date : '07/06/2023',
    description: 'Varios',
    amount: 5000,
    balance: 9500
  },
  {
    id: 3,
    date : '06/06/2023',
    description: 'Varios',
    amount: 500,
    balance: 10000
  },
]



function App() {

  const { counter } = useSelector( state => state.counter)
  const dispatch = useDispatch();

  return (

    <div className="App">
      <header className="App-header">
        <Movimientos transactions={ transactions }/>
        <p>Probando Redux - count is: {counter}</p>
        <button type="button" onClick = { () => dispatch( increment() ) }>
          increment
        </button>
        <button type="button" onClick = { () => dispatch( decrement() ) }>
          decrement
        </button>
        <button type="button" onClick = { () => dispatch( incrementBy(3) ) }>
          increment by 3
        </button>
      </header>
    </div>

  );
}

export default App;
