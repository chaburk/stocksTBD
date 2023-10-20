import React from "react";

//need to make utility classes for text so im not repeating again
const Header = () => {
  return (
    <header className="w-screen bg-primary-green flex items-center p-1">
      <h1 className="basic_text text-5xl pl-5">stocksTBD</h1>
      <p className="basic_text text-xl ml-auto pr-5">Log In</p>
    </header>
  );
};

export default Header;
