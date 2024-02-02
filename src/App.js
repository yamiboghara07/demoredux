import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment , decrement , setcount } from './app/Counterslice';
import { useState } from 'react';

function App() {

  // const [input , setinput] = useState('');

  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  const handeltn = (e) => {
      // console.log('counter:' , input)

      // dispatch(setcount(input))
      dispatch(setcount(e.target.value))
    }
  
  return (
    <div className="App">
      <h1>COUNT : {counter}</h1>
      <input type='text' onChange={handeltn}></input>
      {/* <button onClick={handeltn}>set counter</button><br></br> */}
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>

    </div>
  );
}

export default App;
