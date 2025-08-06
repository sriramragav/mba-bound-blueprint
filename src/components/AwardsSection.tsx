import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState, useRef } from 'react';
import { Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const schoolCertificates = Array.from({ length: 24 }, (_, i) => `/certificates/school/cert${i + 1}.jpeg`);
const afterHighSchoolCertificates = [
  '/certificates/afterschool/NASA.jpeg',
  '/certificates/afterschool/visa.jpeg',
];

const AwardsSection = () => {
  const [schoolIndex, setSchoolIndex] = useState(0);
  const [afterIndex, setAfterIndex] = useState(0);
  const [schoolLoading, setSchoolLoading] = useState(true);
  const [afterLoading, setAfterLoading] = useState(true);
  const [isAutoplaying, setIsAutoplaying] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Preload all images
  useEffect(() => {
    [...schoolCertificates, ...afterHighSchoolCertificates].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Autoplay school certificates every 8 seconds
  useEffect(() => {
    if (isAutoplaying) {
      autoplayRef.current = setInterval(() => {
        setSchoolIndex((prev) =>
          prev < schoolCertificates.length - 1 ? prev + 1 : 0
        );
        setSchoolLoading(true);
      }, 8000);
    } else {
      clearInterval(autoplayRef.current!);
    }

    return () => clearInterval(autoplayRef.current!);
  }, [isAutoplaying]);

  const toggleAutoplay = () => {
    setIsAutoplaying((prev) => !prev);
  };

  const nextSchoolImage = () => {
    if (schoolIndex < schoolCertificates.length - 1) {
      setSchoolLoading(true);
      setSchoolIndex((prev) => prev + 1);
    }
  };

  const prevSchoolImage = () => {
    if (schoolIndex > 0) {
      setSchoolLoading(true);
      setSchoolIndex((prev) => prev - 1);
    }
  };

  const nextAfterImage = () => {
    if (afterIndex < afterHighSchoolCertificates.length - 1) {
      setAfterLoading(true);
      setAfterIndex((prev) => prev + 1);
    }
  };

  const prevAfterImage = () => {
    if (afterIndex > 0) {
      setAfterLoading(true);
      setAfterIndex((prev) => prev - 1);
    }
  };

  const buttonStyle = (disabled: boolean) =>
    `text-xs hover:underline ${
      disabled ? 'text-muted-foreground opacity-50 cursor-not-allowed' : 'text-primary'
    }`;

  return (
    <section id="awards" className="py-12 section-tinted scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Sam image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-center md:text-left">
          
          {/* Sam image */}
          <div className="flex justify-center w-full md:w-auto">
            <img
              src="/lovable-uploads/6d3685c0-e65a-4cd2-a633-6610881b144f.png"
              alt="Sam showing project blueprints"
              className="h-28 w-auto"
              loading="lazy"
            />
          </div>

          {/* Heading and Subtitle */}

          {/* Title + Subtitle */}
          <div className="flex flex-col justify-center items-center sm:items-start">
            <h2 className="text-3xl font-bold text-foreground mb-1 relative after:content-[''] after:block after:h-1 after:w-24 after:bg-primary after:mt-2 after:absolute after:left-1/2 after:transform after:-translate-x-1/2">
            Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Where showing up got noticed.
            </p>
          </div>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* School Achievements */}
          <Card className="text-center card-enhanced">
            <CardContent className="p-4">
              <div className="w-full mb-2 flex justify-between items-center text-sm text-foreground font-semibold">
                <span>On Stage, On Track, On Mat</span>
                <span className="text-xs text-muted-foreground">
                  {schoolIndex + 1} of {schoolCertificates.length}
                </span>
              </div>

              <div className="relative h-64 overflow-y-auto rounded border hover:scrollbar-thin hover:scrollbar-thumb-muted scrollbar-thumb-rounded">
                <div className="w-full aspect-[3/2] relative rounded overflow-hidden">
                  {schoolLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/70 z-10">
                      <div className="animate-spin h-6 w-6 border-2 border-t-transparent border-primary rounded-full" />
                    </div>
                  )}
                  <img
                    src={schoolCertificates[schoolIndex]}
                    alt={`Certificate ${schoolIndex + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                      schoolLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => setSchoolLoading(false)}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center gap-4 mt-4">
                {/* Previous Button */}
                <button
                  onClick={prevSchoolImage}
                  className={buttonStyle(schoolIndex === 0)}
                  disabled={schoolIndex === 0}
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              
                {/* Autoplay Toggle Button */}
                <button
                  onClick={toggleAutoplay}
                  className="text-muted-foreground hover:text-primary transition"
                  aria-label={isAutoplaying ? 'Pause autoplay' : 'Resume autoplay'}
                >
                  {isAutoplaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
              
                {/* Next Button */}
                <button
                  onClick={nextSchoolImage}
                  className={buttonStyle(schoolIndex === schoolCertificates.length - 1)}
                  disabled={schoolIndex === schoolCertificates.length - 1}
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* After High School Achievements */}
          <Card className="text-center card-enhanced">
            <CardContent className="p-4">
              <div className="w-full mb-2 flex justify-between items-center text-sm text-foreground font-semibold">
                <span>At the White Board</span>
                <span className="text-xs text-muted-foreground">
                  {afterIndex + 1} of {afterHighSchoolCertificates.length}
                </span>
              </div>

              <div className="relative h-64 overflow-y-auto rounded border hover:scrollbar-thin hover:scrollbar-thumb-muted scrollbar-thumb-rounded">
                <div className="w-full aspect-[3/2] relative rounded overflow-hidden">
                  {afterLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/70 z-10">
                      <div className="animate-spin h-6 w-6 border-2 border-t-transparent border-primary rounded-full" />
                    </div>
                  )}
                  <img
                    src={afterHighSchoolCertificates[afterIndex]}
                    alt={`Certificate ${afterIndex + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                      afterLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={() => setAfterLoading(false)}
                  />
                </div>
              </div>

              {/*<div className="flex justify-between mt-2">*/}
              <div className="flex justify-center items-center gap-4 mt-4">  
                <button
                  onClick={prevAfterImage}
                  className={buttonStyle(afterIndex === 0)}
                  disabled={afterIndex === 0}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextAfterImage}
                  className={buttonStyle(afterIndex === afterHighSchoolCertificates.length - 1)}
                  disabled={afterIndex === afterHighSchoolCertificates.length - 1}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
