import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
/*
  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Internships', href: '/internships' },
    { label: 'Projects', href: '/projects' },
    { label: 'Awards', href: '/awards' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
  ];
*/
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Internships', href: '#internships' },
    { label: 'Projects', href: '#projects' },
    { label: 'Awards', href: '#awards' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Blog', href: '#blogs' },
    { label: 'Contact', href: '#contact' },
  ];
  
  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  const isActiveRoute = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation('/')}
              className="flex flex-row items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors duration-200"
            >
              <Home className="w-5 h-5" />
              Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className={`transition-colors duration-200 px-3 py-2 text-sm font-medium ${
                    isActiveRoute(item.href)
                      ? 'text-primary font-semibold'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-10 w-10"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border border-border rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    isActiveRoute(item.href)
                      ? 'text-primary font-semibold'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
