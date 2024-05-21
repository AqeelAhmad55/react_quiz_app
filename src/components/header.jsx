import Image from "next/image";
import React from "react";
import logo from "../../public/logo512.png";

const Header = () => {
  return (
    <header className="app-header">
      <Image src={logo} alt="" width={500} height={500} />
      <h1 className="text-8xl h1">The React Quiz</h1>
    </header>
  );
};

export default Header;
