// counter.ts
import { useState, useCallback } from 'react';
// import React, { useState, useCallback } from 'react';

export default () => {
// const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((c) => c + 1), []);
  const decrement = useCallback(() => setCounter((c) => c - 1), []);
  return { counter, increment, decrement };
};
// export default Counter