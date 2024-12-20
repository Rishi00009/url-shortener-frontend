import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Welcome to the URL Shortener App
        </h1>
        <p className="text-center text-gray-700 mb-4">
          Please{' '}
          <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold">
            Login
          </Link>{' '}
          or{' '}
          <Link to="/register" className="text-blue-500 hover:text-blue-700 font-semibold">
            Register
          </Link>{' '}
          to get started.
        </p>
      </div>
    </div>
  );
}

export default Home;

