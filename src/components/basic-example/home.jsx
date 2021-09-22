import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from 'react-redux';

import { counterSlice } from '../../store/counter/counterSlice'
const { increment, decrement, incrementByAmount } = counterSlice.actions
export const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div style={{display: 'flex', justifyContent: 'space-around',margin: '200px'}} >
      <span>{count}</span>
      <Button
        type="primary"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Button
        type="dashed"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(incrementByAmount(15))}
      >
        +15
      </Button>
    </div>
  );
};
