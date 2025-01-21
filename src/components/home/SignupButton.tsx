"use client";
import React from "react";

const SignupButton = () => {
  const handleClick = () => {
    window.location.href = "https://youtube.com";
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="border-4 border-black bg-blue-500 px-10 py-6 font-inika text-5xl text-white hover:bg-blue-800"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignupButton;
