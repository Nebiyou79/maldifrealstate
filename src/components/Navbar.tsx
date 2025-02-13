// Updated Navbar Component for Mobile
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const socialMediaLinks = [
    { icon: <FaFacebook />, href: 'https://www.facebook.com/profile.php?id=61568774526965&mibextid=ZbWKwL', color: 'text-blue-600' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/maldifrealstate/', color: 'text-pink-500' },
    { icon: <FaTiktok />, href: 'https://www.tiktok.com/@maldifrealstate', color: 'text-black' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com/@maldifrealstate', color: 'text-red-600' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <Image 
            src="/assets/logo.png" 
            alt="Maldif Real Estate Logo" 
            width={48}
            height={48} 
            className="rounded-full"
          />
          <span className="text-xl font-bold text-white">Maldif Real Estate</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-2xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {['Home', 'About', 'Sales', 'Rent', 'Contact'].map((item, index) => (
            <li key={index}>
              <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '')}`}
                 className="px-4 py-2 text-white hover:bg-primary rounded-md transition">
                  {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Links */}
        <div className="hidden md:flex space-x-4">
          {socialMediaLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl hover:scale-110 transition ${link.color}`}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white space-y-4 p-4">
          <ul className="space-y-4">
            {['Home', 'About', 'Houses', 'Rent', 'Contact'].map((item, index) => (
              <li key={index}>
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '')}`}
                   className="block text-center py-2 rounded-md hover:bg-primary transition">
                    {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center space-x-6 mt-4">
            {socialMediaLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl hover:scale-110 transition ${link.color}`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
