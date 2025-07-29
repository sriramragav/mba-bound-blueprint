import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Star, Medal } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Outstanding Leadership Award",
      description: "Recognized for exceptional leadership in student community initiatives and mentoring programs.",
      year: "2024"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Maintained consistent high performance throughout computer science coursework.",
      year: "2021-2024"
    },
    {
      icon: Star,
      title: "Innovation in Technology",
      description: "Developed innovative solutions during internship that improved system efficiency.",
      year: "2024"
    },
    {
      icon: Medal,
      title: "Community Impact Recognition",
      description: "Acknowledged for contributions to student welfare and community development.",
      year: "2023"
    }
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
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-primary transition-all duration-300">
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