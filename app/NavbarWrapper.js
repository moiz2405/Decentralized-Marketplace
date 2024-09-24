'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/common/Navbar';

const NavbarWrapper = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: `${navHeight}px` }}></div>
    </>
  );
};

export default NavbarWrapper;
