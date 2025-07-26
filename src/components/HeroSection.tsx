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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Background Landmark Images - Responsive and Clean */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Left - Space Needle */}
        <img
          src="/space-needle.svg"
          alt="Space Needle"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-32 sm:w-40 md:w-52 lg:w-60 opacity-30 max-w-[40vw]"
        />
        {/* Right - Chennai Central */}
        <img
          src="/chennai-central.svg"
          alt="Chennai Central"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-32 sm:w-40 md:w-52 lg:w-60 opacity-30 max-w-[40vw]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Name and Title */}
          <div className="space-y-4">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="/Samyuctaa_Resume.pdf" download="Samyuctaa_Resume.pdf">
              <Button variant="default" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>

          {/* Current Status */}
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
