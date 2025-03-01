import React from 'react';

interface NavbarProps {
  children: React.ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  return (
    <nav className="navbar">
      {children}
    </nav>
  );
} 