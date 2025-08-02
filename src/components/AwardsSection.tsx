import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const schoolCertificates = [
  '/certificates/school/cert1.jpeg',
  '/certificates/school/cert2.jpeg',
  '/certificates/school/cert3.jpeg',
  '/certificates/school/cert4.jpeg',
  '/certificates/school/cert5.jpeg',
  '/certificates/school/cert6.jpeg',
  '/certificates/school/cert7.jpeg',
  '/certificates/school/cert8.jpeg',
  '/certificates/school/cert9.jpeg',
  '/certificates/school/cert10.jpeg',
  '/certificates/school/cert11.jpeg',
  '/certificates/school/cert12.jpeg',
  '/certificates/school/cert13.jpeg',
  '/certificates/school/cert14.jpeg',
  '/certificates/school/cert15.jpeg',
  '/certificates/school/cert16.jpeg',
  '/certificates/school/cert17.jpeg',
  '/certificates/school/cert18.jpeg',
  '/certificates/school/cert19.jpeg',
  '/certificates/school/cert20.jpeg',
  '/certificates/school/cert21.jpeg',
  '/certificates/school/cert22.jpeg',
  '/certificates/school/cert23.jpeg',
  '/certificates/school/cert24.jpeg'
];

const afterHighSchoolCertificates = [
  '/certificates/afterschool/NASA.jpeg',
  '/certificates/after-high-school/cert2.jpeg',
];

const AwardsSection = () => {
  const [schoolIndex, setSchoolIndex] = useState(0);
  const [afterIndex, setAfterIndex] = useState(0);
  const [schoolLoading, setSchoolLoading] = useState(true);
  const [afterLoading, setAfterLoading] = useState(true);

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
          {/* School Achievements */}
          <Card className="group hover:shadow-primary transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold text-sm text-foreground text-left">
                  The Climb Begins
                </div>
                <div className="text-xs text-muted-foreground text-right">
                  {`Certificate ${schoolIndex + 1} of ${schoolCertificates.length}`}
                </div>
              </div>
              <div className="relative w-full aspect-[3/2] rounded overflow-hidden">
                {schoolLoading && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
                )}
                <img
                  src={schoolCertificates[schoolIndex]}
                  alt={`Certificate ${schoolIndex + 1}`}
                  loading="eager"
                  onLoad={() => setSchoolLoading(false)}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    schoolLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {/* Preload next and previous */}
                <link
                  rel="preload"
                  as="image"
                  href={schoolCertificates[(schoolIndex + 1) % schoolCertificates.length]}
                />
                <link
                  rel="preload"
                  as="image"
                  href={schoolCertificates[(schoolIndex - 1 + schoolCertificates.length) % schoolCertificates.length]}
                />
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

          {/* After High School */}
          <Card className="group hover:shadow-primary transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="font-semibold text-sm text-foreground text-left">
                  Breaking Orbits
                </div>
                <div className="text-xs text-muted-foreground text-right">
                  {`Certificate ${afterIndex + 1} of ${afterHighSchoolCertificates.length}`}
                </div>
              </div>
              <div className="relative w-full aspect-[3/2] rounded overflow-hidden">
                {afterLoading && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
                )}
                <img
                  src={afterHighSchoolCertificates[afterIndex]}
                  alt={`Certificate ${afterIndex + 1}`}
                  loading="eager"
                  onLoad={() => setAfterLoading(false)}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    afterLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {/* Preload next and previous */}
                <link
                  rel="preload"
                  as="image"
                  href={afterHighSchoolCertificates[(afterIndex + 1) % afterHighSchoolCertificates.length]}
                />
                <link
                  rel="preload"
                  as="image"
                  href={afterHighSchoolCertificates[(afterIndex - 1 + afterHighSchoolCertificates.length) % afterHighSchoolCertificates.length]}
                />
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
