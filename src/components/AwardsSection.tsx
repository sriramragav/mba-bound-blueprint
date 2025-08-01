import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Star, Medal, Rocket, School, Lightbulb } from 'lucide-react';
import { useState } from 'react';

const schoolCertificates = [
  'https://raw.githubusercontent.com/sriramragav/mba-bound-blueprint/main/public/certificates/school/cert1.jpeg
  'https://raw.githubusercontent.com/sriramragav/mba-bound-blueprint/main/public/certificates/school/cert1.jpeg',
  'https://raw.githubusercontent.com/sriramragav/mba-bound-blueprint/main/public/certificates/school/cert2.jpeg',
  'https://raw.githubusercontent.com/sriramragav/mba-bound-blueprint/main/public/certificates/school/cert3.jpeg'
];

const AwardsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % schoolCertificates.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? schoolCertificates.length - 1 : prevIndex - 1
    );
  };

  const awards = [
    {
      icon: Rocket,
      title: "NSS Space Settlement Contest",
      description:
        "Awarded Second Place Internationally in the NASA Space Society Settlement Contest.",
      year: "2019",
    },
    {
      icon: Star,
      title: "Visa UPLIFT Award – Lead Courageously",
      description:
        "Samyuctaa has been an outstanding addition to our team as an intern. Her initiative and teamwork are truly appreciated. - Rahul Mittal, Visa",
      year: "2025",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* School Certificates Carousel Card */}
          <Card className="text-center group hover:shadow-primary transition-all duration-300">
            <CardContent className="p-4">
              <div className="w-full mb-2 text-center font-semibold text-sm text-foreground">
                School Achievements
              </div>
              <div className="relative">
                <img
                  src={schoolCertificates[currentIndex]}
                  alt={`Certificate ${currentIndex + 1}`}
                  className="w-full h-48 object-contain rounded"
                />
                <div className="flex justify-between mt-2">
                  <button
                    onClick={prevImage}
                    className="text-xs text-primary hover:underline"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={nextImage}
                    className="text-xs text-primary hover:underline"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Remaining Awards */}
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <Card
                key={index}
                className="text-center group hover:shadow-primary transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{award.title}</h3>
                  <p className="text-muted-foreground text-xs mb-2">{award.description}</p>
                  <div className="text-primary font-medium text-xs">{award.year}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
