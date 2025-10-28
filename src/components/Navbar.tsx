
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Menu, X} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Produtos', path: '/produtos' },
    //{ name: 'Portfólio', path: '/portfolio' },
    //{ name: 'Blog', path: '/blog' },
    //{ name: 'Carreiras', path: '/carreiras' },
    { name: 'Contato', path: '/contato' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="./H.png" alt="Logo HM" className="w-8 h-8 object-contain" />
            </div>

            <div className="flex items-baseline space-x-1">
              <span className="text-xl font-bold text-gray-900">HM</span>
              <span className="text-xl font-semibold text-[#2da487]">Restaurações</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#2da487] ${
                  location.pathname === item.path 
                    ? 'text-[#2da487] border-b-2 border-[#2da487] pb-1' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contato"
              className="bg-[#2da487] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#1aa84a] transition-colors duration-200"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#2da487] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path 
                      ? 'text-[#2da487]' 
                      : 'text-gray-700 hover:text-[#2da487]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contato"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-[#2da487] text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-[#1aa84a] transition-colors duration-200"
                >
                  Fale Conosco
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
