'use client'; // This marks the component as a client component

import { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';

const NavbarWrapper = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    // Find the navbar element and get its height
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <>
      <Navbar />
      {/* Apply dynamic padding based on navbar height */}
      <div style={{ paddingTop: `${navHeight}px` }}></div>
    </>
  );
};

export default NavbarWrapper;
