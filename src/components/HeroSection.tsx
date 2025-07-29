import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
  id="hero"
  className="relative min-h-screen bg-background overflow-hidden pt-14 px-4 sm:flex sm:items-center sm:justify-center sm:pt-0 sm:px-0"
    >

     {/* Main Content */}
      <div className="relative z-10 text-center w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div>
          {/* Title */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Samyuctaa Sriram
              <span className="block text-3xl md:text-4xl text-primary font-normal mt-2">
                Computer Science Engineering Student
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <em>"I forgot who I was. So I decided to become who I am."</em>
              <br />– Hoshi Takayuki
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="/Samyuctaa_Resume.pdf" download="Samyuctaa_Resume.pdf">
              <Button variant="default" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
          </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={scrollToAbout}
            className="text-primary hover:text-foreground transition"
            aria-label="Scroll to About"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
          {/* Status */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground pt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span>Engineer in Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Leader in Training</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
