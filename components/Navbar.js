import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className='h-19 bg-purple-500 flex justify-between px-3 items-center text-white shadow-lg'>
        <div className='logo font-bold text-lg'>
          <Link href="/" className='logo hover:scale-110 hover:shadow-2xl transition-transform duration-300 text-3xl'>BitLinks</Link>
        </div>
        <ul className='flex justify-center gap-4 items-center'>
          <Link href="/" className='hover:text-purple-300 transition-colors duration-200 hover:scale-110'><li>Home</li></Link>
          <Link href="/about" className='hover:text-purple-300 transition-colors duration-200 hover:scale-110'><li>About</li></Link>
          <Link href="/shorten" className='hover:text-purple-300 transition-colors duration-200 hover:scale-110'><li>Shorten</li></Link>
          <Link href="/contact" className='hover:text-purple-300 transition-colors duration-200 hover:scale-110'><li>Contact Us</li></Link>
          <li className='flex gap-2'>
            <Link href="/shorten">
              <button className='bg-purple-400 hover:scale-110 shadow-lg p-3 rounded-xl py-2 hover:bg-purple-500 transition-transform duration-200'>Try Now</button>
            </Link>
            <Link href="/github">
              <button className='bg-purple-400 hover:scale-110 shadow-lg p-3 rounded-xl py-2 hover:bg-purple-500 transition-transform duration-200'>Github</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
