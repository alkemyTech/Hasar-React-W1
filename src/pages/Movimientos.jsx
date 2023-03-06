// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchTransactions } from '../actions/transactions';

// const Movimientos = () => {
//   const dispatch = useDispatch();
//   const transactions = useSelector(state => state.transactions);

//   useEffect(() => {
//     dispatch(fetchTransactions());
//   }, []);

//   return (
//     <div>
//       <h2>Movimientos</h2>
//       <ul>
//         {transactions.map(transaction => (
//           <li key={transaction.id}>
//             <span>{transaction.date}</span>
//             <span>{transaction.description}</span>
//             <span>{transaction.amount}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Movimientos;

//provisorio

import { useSelector } from 'react-redux';
import { mySlice } from '../mySlice'

const Movimientos = () => {
  const mySliceState = useSelector((state) => state.mySlice);

  return (
    <div>Movimientos</div>
  )
}

export default Movimientos