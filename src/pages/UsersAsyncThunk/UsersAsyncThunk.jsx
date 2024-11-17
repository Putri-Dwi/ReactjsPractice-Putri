// src/components/UserPage.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/usersWithAsyncThunkSlice';

const UsersWithAsyncThunk = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p className="text-center text-blue-500 font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-red-500 font-semibold">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">User Page</h1>
      <ul className="w-full max-w-md bg-white rounded shadow">
        {users.map((user) => (
          <li
            key={user.id}
            className="py-2 px-4 border-b last:border-b-0 hover:bg-gray-50"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersWithAsyncThunk;
