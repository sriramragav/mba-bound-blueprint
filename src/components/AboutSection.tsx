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
            {/* Background decoration */}
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
                I'm a final-year Computer Science student at College of Engineering, Guindy with a passion for 
                tech, leadership, and product thinking. I've worked on production systems, built communities 
                at college, and love blending technical and creative work.
              </p>
              
              <p>
                My journey spans from winning the <span className="text-primary font-medium">NASA Space Settlement Contest (2nd Place Internationally)</span> to 
                leading cross-functional teams as Product Manager for the CEGian Mentoring App. Currently working as a 
                Data Analyst at GR Network while pursuing my degree.
              </p>

              <p>
                Through my diverse experience as Associate Head of Hacks at Computer Society Anna University, 
                Head of Contents at ACM CEG, and various tech roles, I've developed strong leadership and 
                technical skills. I'm now preparing for MBA programs to further develop my strategic thinking.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">3rd → 4th</div>
                  <div className="text-sm text-muted-foreground">Year CS Student</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-accent">3 Months</div>
                  <div className="text-sm text-muted-foreground">Visa Internship</div>
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
