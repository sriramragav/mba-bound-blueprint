import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Internships', href: '#internships' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Blog', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection: string | null = null;
      navItems.forEach(({ href }) => {
        const id = href.replace('#', '');
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = href;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center w-full">
          {/* Home Icon Button */}
          <button
            onClick={() => handleNavigation('#about')}
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors duration-200"
          >
            <Home className="w-5 h-5" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className={`transition-colors duration-200 px-3 py-2 text-sm font-medium ${
                  activeSection === item.href
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
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
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border border-border rounded-lg">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.href
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
