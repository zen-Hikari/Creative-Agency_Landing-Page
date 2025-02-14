import { useState } from 'react';
import './Global.css';
import Logo from './assets/logo.svg';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id='Home' className="py-6">
            <nav className="flex justify-center">
                <div className="container flex items-center justify-center">
                    <div className="logo">
                        <img src={Logo} alt="logo" className="w-[110px]" />
                    </div>

                    {/* Menu */}
                    <div className={`link-menu text-gray-400 text-lg ml-auto flex gap-10 ${isMenuOpen ? 'absolute flex-col top-40 ' : 'hidden'} xl:flex xl:flex-row`}>
                        <a href="#" className="text-black font-medium hover:text-blue-500">Home</a>
                        <a href="#about" className="hover:text-blue-500 transition">About</a>
                        <a href="#" className="hover:text-blue-500 transition">Service</a>
                        <a href="#" className="hover:text-blue-500 transition">Project</a>
                    </div>

                    {/* Tombol Contact */}
                    <div className="btn md:hidden xl:block text-lg ml-auto hover:bg-blue-500 border-2 rounded-4xl py-2 px-10 font-medium text-blue-500 hover:text-white transition">
                        <a href="#">Contact Us</a>
                    </div>

                    {/* Button Hamburger */}
                    <button 
                        className="hamburger flex flex-col space-y-2 ml-auto xl:hidden" 
                        onClick={toggleMenu}
                    >
                        <span className={`bg-black w-8 rounded-4xl h-[4px] transition-all ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`}></span>
                        <span className={`bg-black w-8 rounded-4xl h-[4px] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`bg-black w-8 rounded-4xl h-[4px] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
