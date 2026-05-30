import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router'
import CartModal from './CartModal';

function NavBar() {

    const [openModal, setOpenModal] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [query, setQuery] = useState('');

    const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Trending Now', path: 'https://www.google.com' },
    { name: 'About Us', path: '/about' },
    ];
  
    const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/shop?search=${encodeURIComponent(query)}`);
  setShowSearch(false);
  };

  return (
    <>
      <nav className="border-b border-[#F5F5F5]">
        <div className="flex items-center justify-between px-6 py-4 lg:px-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-2xl cursor-pointer lg:hidden"
          >
            {mobileMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-5 uppercase text-[#656363] text-xl md:text-2xl">
            {navLinks.map((link) =>
            link.path.startsWith('http') ? (
              <a key={link.name} href={link.path} target="_blank" rel="noopener noreferrer" className="text-[#656363] hover:text-black">
                <li>{link.name}</li>
              </a>
            ) : (
              <NavLink key={link.path} to={link.path} className={({ isActive }) => isActive ? 'text-[#e3261f]' : 'text-[#656363] hover:text-black'
                }>
                <li>{link.name}</li>
              </NavLink>
            )
          )}
          </ul>

          {/* Logo */}
          <div className="border-2 border-[#F5F5F5] px-10 py-2.5 text-xl text-[#656363] md:text-2xl uppercase">
            <h1>Logo</h1>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-2xl md:text-3xl text-[#656363]">
            <button
              onClick={() => setOpenModal(true)}
              className="hover:text-black cursor-pointer"
            >
              <AiOutlineShoppingCart />
            </button>

            <button onClick={() => setShowSearch(!showSearch)} className="hover:text-black cursor-pointer">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        
        {/* Search Bar */}
        {showSearch && (
          <form
            onSubmit={handleSearch}
            className="px-6 pb-4 flex gap-2"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search ..."
              className="w-full border border-[#ECECEE] px-4 py-2 outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white"
            >
              Go
            </button>
          </form>
        )}

        {/* Mobile Menu */}
        {mobileMenu && (
          <ul className="lg:hidden flex flex-col gap-4 px-6 pb-4 uppercase text-[#656363]">
            {navLinks.map((link) => 
            link.path.startsWith('http') ? (
              <a key={link.name} href={link.path} target="_blank" rel="noopener noreferrer" className="text-[#656363] hover:text-black">
                <li>{link.name}</li>
              </a>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#e3261f]'
                    : 'text-[#656363] hover:text-black'
                }
              >
                <li>{link.name}</li>
              </NavLink>
            ))}
          </ul>
        )}
      </nav>

      {openModal && (
        <CartModal
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
}

export default NavBar