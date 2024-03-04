"use client";
import React, { useEffect, useState } from 'react';

interface CollapsableNavbarProps {
  children: React.ReactNode;
}

const CollapsableNavbar: React.FC<CollapsableNavbarProps> = ({ children }) => {
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolledUp(currentScrollPos <= 0 || currentScrollPos < scrollPos);
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  return (
    <div
      className={`fixed  w-full transition-all duration-300 bg-white ${
        isScrolledUp ? 'opacity-100' : 'opacity-0 -translate-y-full'
      }`}
    >
      {children}
    </div>
  );
};

export default CollapsableNavbar;
