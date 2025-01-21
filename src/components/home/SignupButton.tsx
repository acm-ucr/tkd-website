'use client';
import React from 'react';

const SignupButton = () => {
  const handleClick = () => {
    window.location.href = 'https://youtube.com';
  };

  return (
    <div>
      <button 
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-800 text-white text-5xl font-inika py-6 px-10 border-4 border-black"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignupButton;