import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown, X, Eye } from 'lucide-react';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative py-12 bg-background overflow-hidden scroll-mt-16"
    >
      {/* Modal for Viewing Resume */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative bg-white rounded-xl shadow-2xl w-[90%] max-w-4xl h-[90%] p-4">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close Modal"
            >
              <X className="w-6 h-6" />
            </button>
            <object
              data="/Samyuctaa_Resume.pdf"
              type="application/pdf"
              className="w-full h-full rounded-md"
            >
              <p className="text-center mt-4">
                Your device does not support embedded PDFs.
                <br />
                <a
                  href="/Samyuctaa_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Click here to open the resume in a new tab
                </a>
              </p>
            </object>
          </div>
        </div>
      )}

      {/* Main Content with Image on Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Cartoon Sam on Left */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="/lovable-uploads/6c603f0c-4c03-4127-a960-b4c370620538.png"
              alt="Cartoon Samyuctaa waving"
              className="w-40 md:w-48 lg:w-56 max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Main Text Block */}
          <div className="text-center md:text-left w-full md:w-2/3">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Samyuctaa Sriram</span>
              <span className="block text-3xl md:text-4xl text-primary font-normal mt-2">
                Computer Science Engineering Student
              </span>
            </h1>
            <br />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
              <em>"Eighty percent of success is showing up."</em>
              <br />– Woody Allen
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-4">
              <a href="/Samyuctaa_Resume.pdf" download="Samyuctaa_Resume.pdf">
                <Button variant="white" size="lg" className="group">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>
              <Button
                variant="white"
                size="lg"
                className="group"
                onClick={() => {
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                  const isInApp = /FBAN|FBAV|Instagram|Line|Twitter|MicroMessenger|LinkedInApp|Edge/i.test(navigator.userAgent);
                  if (isMobile || isInApp) {
                    window.open('/Samyuctaa_Resume.pdf', '_blank');
                  } else {
                    setIsModalOpen(true);
                  }
                }}
              >
                <Eye className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                View Resume
              </Button>
            </div>

            {/* Arrow Down */}
            <div className="mt-8 flex justify-center md:justify-start">
              <button
                onClick={scrollToAbout}
                className="text-primary hover:text-foreground transition"
                aria-label="Scroll to About"
              >
                <ArrowDown className="w-6 h-6 animate-bounce" />
              </button>
            </div>

            {/* Status */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm text-muted-foreground pt-8">
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
      </div>
    </section>
  );
};

export default HeroSection;
