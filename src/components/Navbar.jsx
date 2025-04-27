import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'education', text: 'Education' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <div className={`fixed w-full h-[80px] flex justify-between items-center px-4 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 shadow-lg backdrop-blur-sm' : 'bg-primary'}`}>
      <div>
        <h1 className="text-2xl font-bold text-secondary">MC</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map(({ id, text }) => (
          <li key={id}>
            <Link 
              to={id} 
              smooth={true} 
              duration={500} 
              spy={true} 
              activeClass="text-secondary"
              className="nav-link cursor-pointer"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer text-2xl">
        {!nav ? <FaBars /> : <FaTimes className="text-secondary" />}
      </div>

      {/* Mobile Menu */}
      <ul className={`${nav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-primary flex-col justify-center items-center gap-8`}>
        {navLinks.map(({ id, text }) => (
          <li key={id} className="py-4 text-2xl">
            <Link 
              onClick={closeMenu}
              to={id} 
              smooth={true} 
              duration={500}
              className="nav-link"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar; 