import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/samyuctaa.png';

const About = () => {
  return (
    <section id="about" className="py-12 section-tinted scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mt-2">
          <h2 className="text-3xl font-semibold text-foreground mb-2 relative section-divider pb-4">
            About Me
          </h2>
          {/* Introductory Quote */}
          <p className="text-sm italic text-muted-foreground mt-2">
            “I’ve always shown up — on stage, on track, on the mat. I later learned to show up at the whiteboard too.”
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
          {/* Left Column: Image */}
          <div className="relative text-center lg:text-left">
            <div className="relative z-10">
              <img
                src={profileImage}
                alt="Samyuctaa Sriram"
                className="w-full max-w-[200px] mx-auto rounded-2xl shadow-card"
              />
            </div>

            {/* Background Tint */}
            <div className="absolute top-6 left-6 w-full h-full bg-gradient-primary opacity-20 rounded-2xl -z-10" />

            {/* Citizenship Note */}
            <p className="mt-4 text-xs italic text-muted-foreground text-center hidden md:block">
              Born in the U.S. • Living in India • OCI Holder
            </p>
          </div>

          {/* Right Column: Description */}
          <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
            <p>
              I was a child of energy and expression — from frog races and karate medals to singing contests and relay races, I loved to explore everything outside the classroom. But in Grade VII, I made a quiet decision: to direct that same energy into academics. At the time, I was in the bottom third of my class. By Class X, I graduated sixth in my school.
            </p>
            <p>
              Since then, I’ve kept building — not just marks, but mindset. Today, I’m a computer science student at one of India’s top engineering colleges, with a CGPA of 8.65, leadership roles on campus, and a “Must Hire” rating from my Visa internship.
            </p>
            <p>
              This portfolio is a map of that journey — from early spark to steady fire, from joyful curiosity to focused intent.
            </p>
          </div>
        </div>

        {/* Full-width Cards Section */}
        <div className="pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            <Card className="text-center card-enhanced">
              <CardContent className="p-4">
                <div className="text-xl font-bold text-primary">1</div>
                <div className="text-base text-muted-foreground mb-1">Prod App Deployed</div>
              </CardContent>
            </Card>
            <Card className="text-center card-enhanced">
              <CardContent className="p-4">
                <div className="text-xl font-bold text-accent">2</div>
                <div className="text-base text-muted-foreground mb-1">US Citizen • Indian Resident</div>
              </CardContent>
            </Card>
            <Card className="text-center card-enhanced">
              <CardContent className="p-4">
                <div className="text-xl font-bold text-primary">3</div>
                <div className="text-base text-muted-foreground mb-1">Internships Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center card-enhanced">
              <CardContent className="p-4">
                <div className="text-xl font-bold text-accent">4</div>
                <div className="text-base text-muted-foreground mb-1">Year in Engineering</div>
              </CardContent>
            </Card>
            <Card className="text-center card-enhanced">
              <CardContent className="p-4">
                <div className="text-xl font-bold text-primary" >5</div>
                <div className="text-base text-muted-foreground mb-1">Languages Spoken</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
