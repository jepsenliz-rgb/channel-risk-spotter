import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Lizzie Holmes
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <Button onClick={() => scrollToSection('contact')} variant="default">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <Button onClick={() => scrollToSection('contact')} variant="default" className="w-full">
              Contact
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;