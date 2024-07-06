import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 rounded">
      <header className="bg-purple-500">
        <nav className="flex gap-10 justify-between max-w-[900px] mx-auto my-0 items-center py-5 px-6">
          <div className="">
            <h1 className="font-bold text-2xl">Cards</h1>
          </div>
          <div className="flex gap-5 sm:flex-row flex-wrap sm:flex-nowrap">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
