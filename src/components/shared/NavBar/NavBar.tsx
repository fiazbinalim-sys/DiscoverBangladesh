'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { GoPerson } from 'react-icons/go';
import { HiOutlineSearch, HiX, HiMenu } from 'react-icons/hi';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md shadow-sm">
        <div className="customContainer mx-auto px-4 sm:px-6 py-3 sm:py-4 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
            >
              <Image 
                src="/Home/logo.png" 
                alt="Discover Bangladesh" 
                height={32}
                width={32}
                className="w-7 h-7 sm:w-8 sm:h-8" 
              />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#10B981] via-blue-400 to-emerald-400 bg-clip-text text-transparent  hover:text-[#73B7FF] hidden sm:inline">
                Discover Bangladesh
              </span>
              <span className="text-lg font-bold text-gray-800 hover:text-[#73B7FF] sm:hidden">
                DB
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              <Link 
                href="/" 
                className={`${
                  isActive('/') 
                    ? 'text-[#10B981] font-semibold' 
                    : 'text-gray-700'
                } hover:text-[#73B7FF] transition-colors`}
              >
                Home
              </Link>
              <Link 
                href="/destination" 
                className={`${
                  isActive('/destination') 
                    ? 'text-[#10B981] font-semibold' 
                    : 'text-gray-700'
                } hover:text-[#73B7FF] transition-colors`}
              >
                Destinations
              </Link>
              <Link 
                href="/packages" 
                className={`${
                  isActive('/packages') 
                    ? 'text-[#10B981] font-semibold' 
                    : 'text-gray-700'
                } hover:text-[#73B7FF] transition-colors`}
              >
                Packages
              </Link>
              <Link 
                href="/partners" 
                className={`${
                  isActive('/partners') 
                    ? 'text-[#10B981] font-semibold' 
                    : 'text-gray-700'
                } hover:text-[#73B7FF] transition-colors`}
              >
                Partners
              </Link>

               <Link 
                href="/contact" 
                className={`${
                  isActive('/contact') 
                    ? 'text-[#10B981] font-semibold' 
                    : 'text-gray-700'
                } hover:text-[#73B7FF] transition-colors`}
              >
                Contact Us
              </Link>
            </nav>
            
            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="p-2 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#73B7FF] text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#73B7FF]"
                >
                  <HiOutlineSearch className="w-5 h-5" />
                </button>
              </form> */}
              
              <Link 
                href="/profile" 
                className={`${
                  isActive('/profile') 
                    ? 'text-[#10B981] font-semibold' 
                    : 'text-gray-700'
                } hover:text-[#73B7FF] transition-colors`}
              >
                <GoPerson className='w-6 h-6' />
              </Link>
              
              <Link 
                href="/auth/login" 
                className="font-bold hover:text-[#73B7FF] transition-colors text-gray-700"
              >
                Login
              </Link>
              
              <Link 
                href="/auth/register" 
                className="border border-[#10B981] text-[#10B981] px-4 py-1 font-semibold rounded hover:bg-[#73B7FF] hover:text-white transition-colors"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Right Section */}
            <div className="flex lg:hidden items-center space-x-3">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-700 hover:text-[#73B7FF] transition-colors"
              >
                <HiOutlineSearch className="w-6 h-6" />
              </button>

              {/* Profile Icon */}
              <Link 
                href="/profile" 
                className={`${
                  isActive('/profile') 
                    ? 'text-[#10B981] font-semibold' 
                    : 'text-gray-700'
                } hover:text-[#73B7FF] transition-colors`}
              >
                <GoPerson className='w-6 h-6' />
              </Link>

              {/* Burger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#73B7FF] transition-colors p-1"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <HiX className="w-7 h-7" />
                ) : (
                  <HiMenu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="lg:hidden mt-3 pb-1">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, packages..."
                  className="w-full p-3 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#73B7FF] text-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#73B7FF]"
                >
                  <HiOutlineSearch className="w-5 h-5" />
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b">
            <h2 className="text-lg font-bold text-gray-800">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-[#73B7FF] transition-colors"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col px-6 py-4 space-y-1 flex-1 overflow-y-auto">
            <Link 
              href="/" 
              className={`${
                isActive('/') 
                  ? 'text-[#10B981] font-semibold bg-blue-50' 
                  : 'text-gray-700'
              } hover:text-[#73B7FF] hover:bg-blue-50 transition-colors px-4 py-3 rounded-lg`}
            >
              Home
            </Link>
            <Link 
              href="/destination" 
              className={`${
                isActive('/destination') 
                  ? 'text-[#10B981] font-semibold bg-blue-50' 
                  : 'text-gray-700'
              } hover:text-[#73B7FF] hover:bg-blue-50 transition-colors px-4 py-3 rounded-lg`}
            >
              Destinations
            </Link>
            <Link 
              href="/packages" 
              className={`${
                isActive('/packages') 
                  ? 'text-[#10B981] font-semibold bg-blue-50' 
                  : 'text-gray-700'
              } hover:text-[#73B7FF] hover:bg-blue-50 transition-colors px-4 py-3 rounded-lg`}
            >
              Packages
            </Link>
            <Link 
              href="/partners" 
              className={`${
                isActive('/partners') 
                  ? 'text-[#10B981] font-semibold bg-blue-50' 
                  : 'text-gray-700'
              } hover:text-[#73B7FF] hover:bg-blue-50 transition-colors px-4 py-3 rounded-lg`}
            >
              Partners
            </Link>

            <div className="border-t my-4"></div>

            <Link 
              href="/profile" 
              className={`${
                isActive('/profile') 
                  ? 'text-[#10B981] font-semibold bg-blue-50' 
                  : 'text-gray-700'
              } hover:text-[#73B7FF] hover:bg-blue-50 transition-colors px-4 py-3 rounded-lg flex items-center gap-2`}
            >
              <GoPerson className='w-5 h-5' />
              Profile
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="px-6 py-5 border-t space-y-3">
            <Link 
              href="/auth/login" 
              className="block text-center font-bold text-gray-700 hover:text-[#73B7FF] transition-colors py-2"
            >
              Login
            </Link>
            
            <Link 
              href="/auth/register" 
              className="block text-center border border-[#10B981] text-[#10B981] px-4 py-2 font-semibold rounded hover:bg-[#73B7FF] hover:text-white transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
