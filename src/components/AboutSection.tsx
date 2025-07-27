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
                alt="Profile"
                className="w-full max-w-md mx-auto rounded-2xl shadow-card hover:shadow-primary transition-all duration-300"
              />
            </div>
            <div className="absolute top-8 left-8 w-full h-full bg-gradient-primary opacity-20 rounded-2xl -z-10" />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full" />
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m a final-year Computer Science student at CEG, wired for problem-solving—whether that’s debugging a stubborn backend issue or 
                untangling team dynamics in a group project.
              </p>
              <p>
                I’ve led student communities, shipped a mentoring app still in use, and spent a summer wrangling real-world systems during an internship at Visa. 
                That experience taught me that I love sitting at the intersection of product, strategy, and tech.
              </p>
              <p>
                While I grew up in India, I hold U.S. citizenship—meaning I bring both a global lens and an easy passport stamp to future opportunities. 
                A deferred MBA is on my radar in the next few years. Until then, you'll find me where logic meets empathy (and code meets caffeine).
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">4th Year</div>
                  <div className="text-sm text-muted-foreground">CS Student at CEG</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-accent">Visa</div>
                  <div className="text-sm text-muted-foreground">Summer Intern</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Fun Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-semibold text-primary">5</div>
              <div className="text-sm text-muted-foreground mt-1">Languages Spoken</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-semibold text-secondary">0</div>
              <div className="text-sm text-muted-foreground mt-1">Visa Applications Needed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-semibold text-foreground">∞</div>
              <div className="text-sm text-muted-foreground mt-1">Coffee-Fueled Ambitions</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
