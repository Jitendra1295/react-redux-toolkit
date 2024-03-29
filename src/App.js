import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './reducers/counterReducer';
import './App.css'; // Import CSS file for styling

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className="counter-container">
        <div className="counter-text">Count: {count}</div>
        <div className="button-container">
          <button className="button" onClick={() => dispatch(increment())}>Increment</button>
          <button className="button" onClick={() => dispatch(decrement())}>Decrement</button>
          <button className="button" onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
      </div>
    </div>
  );
}

export default App;
