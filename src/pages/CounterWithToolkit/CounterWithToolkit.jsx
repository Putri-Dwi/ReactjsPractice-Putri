// src/components/CounterWithToolkit.js
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../features/counterWithToolkitSlice';

const CounterWithToolkit = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterToolkitReducer.count);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Counter With Toolkit</h1>
      <p className="text-xl font-semibold mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterWithToolkit;
