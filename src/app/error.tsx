"use client"
import React from 'react';

interface ErrorProps {
  error: Error;
}

const ErrorComponent: React.FC<ErrorProps> = ({ error, }) => {
  return (
    <div className="flex flex-col items-center p-5 justify-center  bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600">Something went wrong</h1>
      <p className="mt-4 text-lg text-gray-700">{error.message}</p>
      <button
        onClick={()=>{
          window.location.reload();
        }}
        className="mt-6 rounded bg-primary-500 px-4 py-2 text-white hover:bg-primary-600"
      >
        Retry
      </button>
    </div>
  );
};

export default ErrorComponent;

