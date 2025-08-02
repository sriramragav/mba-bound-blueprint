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
  '/certificates/after-high-school/cert2.jpeg'
];

const AwardsSection = () => {
  const [schoolIndex, setSchoolIndex] = useState(0);
  const [afterIndex, setAfterIndex] = useState(0);

  const nextSchoolImage = () => {
    setSchoolIndex((prevIndex) => (prevIndex + 1) % schoolCertificates.length);
  };

  const prevSchoolImage = () => {
    setSchoolIndex((prevIndex) =>
      prevIndex === 0 ? schoolCertificates.length - 1 : prevIndex - 1
    );
  };

  const nextAfterImage = () => {
    setAfterIndex((prevIndex) => (prevIndex + 1) % afterHighSchoolCertificates.length);
  };

  const prevAfterImage = () => {
    setAfterIndex((prevIndex) =>
      prevIndex === 0 ? afterHighSchoolCertificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="awards" className="py-12 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Awards & Recognition
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-4" />
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Recognition for academic excellence, leadership, and contributions to technology and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* School Achievements */}
          <Card className="text-center group hover:shadow-primary transition-all duration-300">
            <CardContent className="p-4">
              <div className="w-full mb-2 text-center font-semibold text-sm text-foreground">
                School Achievements
              </div>
              <div className="relative">
                <div className="w-full aspect-[3/2] relative rounded overflow-hidden">
                  <img
                    src={schoolCertificates[schoolIndex]}
                    alt={`Certificate ${schoolIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  Certificate {schoolIndex + 1} of {schoolCertificates.length}
                </div>
                <div className="flex justify-between mt-1">
                  <button onClick={prevSchoolImage} className="text-xs text-primary hover:underline">
                    ← Prev
                  </button>
                  <button onClick={nextSchoolImage} className="text-xs text-primary hover:underline">
                    Next →
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* After High School */}
          <Card className="text-center group hover:shadow-primary transition-all duration-300">
            <CardContent className="p-4">
              <div className="w-full mb-2 text-center font-semibold text-sm text-foreground">
                After High School
              </div>
              <div className="relative">
                <div className="w-full aspect-[3/2] relative rounded overflow-hidden">
                  <img
                    src={afterHighSchoolCertificates[afterIndex]}
                    alt={`Certificate ${afterIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  Certificate {afterIndex + 1} of {afterHighSchoolCertificates.length}
                </div>
                <div className="flex justify-between mt-1">
                  <button onClick={prevAfterImage} className="text-xs text-primary hover:underline">
                    ← Prev
                  </button>
                  <button onClick={nextAfterImage} className="text-xs text-primary hover:underline">
                    Next →
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
