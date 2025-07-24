import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/profile-placeholder.jpg';

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
                I'm a final-year Computer Science Engineering student with a passion for 
                bridging the gap between technology and business. My recent internship at 
                <span className="text-primary font-medium"> Visa International, Bangalore</span>, 
                has given me valuable insights into the fintech industry and how technology 
                drives financial innovation.
              </p>
              
              <p>
                As I approach my final year, I'm excited about pursuing a deferred MBA 
                to further develop my business acumen and leadership skills. My goal is 
                to become a technology leader who can drive digital transformation and 
                create meaningful impact at the intersection of tech and business.
              </p>

              <p>
                Through my academic projects, internship experience, and leadership roles, 
                I've developed a strong foundation in software development, problem-solving, 
                and team collaboration. I'm particularly interested in how emerging 
                technologies can solve real-world business challenges.
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