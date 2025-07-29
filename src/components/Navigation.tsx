import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Internships', href: '#internships' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
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
            onClick={() => handleNavigation('#hero')}
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

          {/* Mobile menu button - hidden on all screen sizes */}
          <div className="hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {}}
              className="h-10 w-10"
            >
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
