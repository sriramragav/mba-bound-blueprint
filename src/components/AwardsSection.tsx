import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const schoolCertificates = Array.from({ length: 24 }, (_, i) => `/certificates/school/cert${i + 1}.jpeg`);
const afterHighSchoolCertificates = [
  '/certificates/afterschool/NASA.jpeg',
  '/certificates/after-high-school/cert2.jpeg',
];

const AwardsSection = () => {
  const [schoolIndex, setSchoolIndex] = useState(0);
  const [afterIndex, setAfterIndex] = useState(0);
  const [schoolLoading, setSchoolLoading] = useState(true);
  const [afterLoading, setAfterLoading] = useState(true);

  // Preload all images once on mount
  useEffect(() => {
    [...schoolCertificates, ...afterHighSchoolCertificates].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const nextSchoolImage = () => {
    setSchoolLoading(true);
    setSchoolIndex((prevIndex) => (prevIndex + 1) % schoolCertificates.length);
  };

  const prevSchoolImage = () => {
    setSchoolLoading(true);
    setSchoolIndex((prevIndex) =>
      prevIndex === 0 ? schoolCertificates.length - 1 : prevIndex - 1
    );
  };

  const nextAfterImage = () => {
    setAfterLoading(true);
    setAfterIndex((prevIndex) => (prevIndex + 1) % afterHighSchoolCertificates.length);
  };

  const prevAfterImage = () => {
    setAfterLoading(true);
    setAfterIndex((prevIndex) =>
      prevIndex === 0 ? afterHighSchoolCertificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="awards" className="py-12 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Awards & Recognition</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-4" />
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Recognition for academic excellence, leadership, and contributions to technology and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* School Achievements Card */}
          <Card className="text-center group hover:shadow-primary transition-all duration-300">
            <CardContent className="p-4">
              <div className="w-full mb-2 flex justify-between items-center text-sm text-foreground font-semibold">
                <span>Roots and Wings</span>
                <span className="text-xs text-muted-foreground">
                  Certificate {schoolIndex + 1} of {schoolCertificates.length}
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

              <div className="flex justify-between mt-2">
                <button onClick={prevSchoolImage} className="text-xs text-primary hover:underline">
                  ← Prev
                </button>
                <button onClick={nextSchoolImage} className="text-xs text-primary hover:underline">
                  Next →
                </button>
              </div>
            </CardContent>
          </Card>

          {/* After High School Card */}
          <Card className="text-center group hover:shadow-primary transition-all duration-300">
            <CardContent className="p-4">
              <div className="w-full mb-2 flex justify-between items-center text-sm text-foreground font-semibold">
                <span>Where Purpose Took Hold</span>
                <span className="text-xs text-muted-foreground">
                  Certificate {afterIndex + 1} of {afterHighSchoolCertificates.length}
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

              <div className="flex justify-between mt-2">
                <button onClick={prevAfterImage} className="text-xs text-primary hover:underline">
                  ← Prev
                </button>
                <button onClick={nextAfterImage} className="text-xs text-primary hover:underline">
                  Next →
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
