import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';
import profileImage from '@/assets/samyuctaa.png';

const about = () => {
  return (
    <section id="about" className="py-12 bg-gradient-subtle scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={profileImage}
                alt="Samyuctaa Sriram"
                className="w-full max-w-xs mx-auto rounded-2xl shadow-card hover:shadow-primary transition-all duration-300"
              />
            </div>
            <div className="absolute top-6 left-6 w-full h-full bg-gradient-primary opacity-20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-2">
                About Me
              </h2>
              <div className="w-16 h-1 bg-gradient-primary rounded-full" />
            </div>

            <div className="space-y-3 text-[15px] text-muted-foreground leading-relaxed">
              <p>
                I’m a final-year Computer Science student at CEG who enjoys solving messy, cross-disciplinary problems—technical, human, or somewhere in between.
              </p>
              <p>
                I’ve led student communities, built a mentoring app that’s actually being used, and spent the summer tackling real-world production issues during an internship at Visa. That experience confirmed I love working where engineering, product, and strategy overlap.
              </p>
              <p>
                Though I’ve spent most of my life in India, I’m a U.S. citizen gearing up for a return—hopefully as an MBA student in a few years. I’m most at home where logic meets empathy (and deadlines meet coffee).
              </p>
            </div>

            {/* Key Facts - Cards */}
            <div className="pt-4">
              <div className="grid grid-cols-4 gap-2 max-w-3xl">
                <Card className="text-center">
                  <CardContent className="p-3">
                    <div className="text-xl font-bold text-primary">4th Year</div>
                    <div className="text-xs text-muted-foreground">CS Student</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-3">
                    <div className="text-xl font-bold text-accent">5</div>
                    <div className="text-xs text-muted-foreground">Languages Spoken</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-3">
                    <div className="text-xl font-bold text-primary">0</div>
                    <div className="text-xs text-muted-foreground">Visa Applications (US)</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-3">
                    <div className="text-xl font-bold text-accent">1</div>
                    <div className="text-xs text-muted-foreground">Mentoring App (Shipped!)</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
