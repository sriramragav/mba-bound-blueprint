import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/samyuctaa.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={profileImage}
                alt="Samyuctaa Sriram"
                className="w-full max-w-md mx-auto rounded-2xl shadow-card hover:shadow-primary transition-all duration-300"
              />
            </div>
            <div className="absolute top-8 left-8 w-full h-full bg-gradient-primary opacity-20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full" />
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m a final-year Computer Science student at the College of Engineering, Guindy, where I’ve spent the last few years learning how to build systems, lead teams, and bring ideas to life.
              </p>
              <p>
                From building a mentoring app that serves real users on campus to contributing to production systems during my internship at Visa, I’ve developed a strong appreciation for the intersection of technology, product, and strategy.
              </p>
              <p>
                I plan to pursue a deferred MBA to deepen my strategic and leadership skills, and to build toward a future where I can lead product and innovation efforts at scale.
              </p>
            </div>

            {/* Key highlights - Single row of 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-xl font-bold text-primary">4th Year</div>
                  <div className="text-sm text-muted-foreground">CS Student, CEG</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-xl font-bold text-accent">5</div>
                  <div className="text-sm text-muted-foreground">Languages Spoken</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-xl font-bold text-foreground">Visa</div>
                  <div className="text-sm text-muted-foreground">Production Intern</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-xl font-bold text-secondary-foreground">U.S. Citizen</div>
                  <div className="text-sm text-muted-foreground">Based in India</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
