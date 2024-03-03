import React from "react";
import Image from "next/image";

const Logo = () => {
  // Use a static import for the image file
  const logoImage = require("../../public/logo");

  return <Image src="/logo" alt="Your Logo Title" className="logo" />;
};

export default Logo;
