
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Shield, Cpu, Network, Globe, MessageSquare, 
  ChevronRight, ArrowRight, UserCheck, Lock
} from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Master from './pages/Master';
import Ecosystem from './pages/Ecosystem';
import Governance from './pages/Governance';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'M.A.S.T.E.R', path: '/master' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Governance', path: '/governance' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 glass-nav border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-lg font-semibold tracking-widest text-[#2C2C2C]">MAGNIPROJEKTA</span>
              <span className="text-[10px] tracking-[0.2em] text-[#8FA691] font-medium">(Pty) Ltd</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive(link.path) ? 'text-[#8FA691]' : 'text-gray-500 hover:text-[#2C2C2C]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium ${
                  isActive(link.path) ? 'text-[#8FA691]' : 'text-gray-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#1A2421] text-gray-400 py-16 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="text-white font-semibold tracking-widest text-lg">MAGNIPROJEKTA</div>
          <p className="text-sm leading-relaxed max-w-xs">
            An autonomous business operating at the intersection of artificial intelligence, media systems, and ethical governance.
          </p>
          <div className="pt-4 flex items-center gap-2 text-[#8FA691] text-xs font-medium uppercase tracking-widest">
            <Globe size={14} />
            South Africa | Global Operations
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">Philosophy</Link></li>
            <li><Link to="/master" className="hover:text-white transition-colors">M.A.S.T.E.R System</Link></li>
            <li><Link to="/ecosystem" className="hover:text-white transition-colors">Entity Ecosystem</Link></li>
            <li><Link to="/governance" className="hover:text-white transition-colors">Ethical Controls</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Governance</h4>
          <p className="text-sm mb-4 italic">
            "Autonomy without governance is risk. We build both."
          </p>
          <div className="flex items-center gap-2 text-xs">
            <Shield size={14} className="text-[#8FA691]" />
            <span>Human Oversight Lead: K. Thapedi</span>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-800 text-xs text-center">
        &copy; {new Date().getFullYear()} MAGNIPROJEKTA (Pty) Ltd. All rights reserved. 
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-[#D4DDD0] selection:text-[#1A2421]">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/master" element={<Master />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
