import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Building expertise at the intersection of technology and finance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Visa Internship */}
          <Card className="relative overflow-hidden group hover:shadow-primary transition-all duration-300 border-l-4 border-l-primary">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
            
            <CardHeader className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl text-foreground">
                    Data Analyst
                  </CardTitle>
                  <div className="flex items-center gap-2 text-primary font-medium text-lg mt-1">
                    <Building className="w-5 h-5" />
                    GR Network
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge variant="outline" className="w-fit">
                    <Calendar className="w-3 h-3 mr-1" />
                    3 Months
                  </Badge>
                  <Badge variant="secondary" className="w-fit">
                    <MapPin className="w-3 h-3 mr-1" />
                    Bangalore, India
                  </Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Gained hands-on experience in fintech innovation at one of the world's 
                leading digital payments companies. Worked on critical systems that 
                process millions of transactions daily, contributing to the digital 
                transformation of global financial services.
              </p>

              {/* Key Achievements */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Contributions:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Developed and optimized payment processing modules improving transaction efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Collaborated with cross-functional teams on security and compliance initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Contributed to API development and integration testing for merchant services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Gained insights into global fintech operations and regulatory compliance</span>
                  </li>
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Microservices', 'Git', 'Agile', 'Financial Systems'].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="bg-gradient-subtle p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">Business Impact:</h4>
                <p className="text-muted-foreground">
                  This experience deepened my understanding of how technology drives financial 
                  innovation and the importance of scalable, secure systems in global commerce. 
                  It reinforced my passion for pursuing an MBA to bridge technical expertise 
                  with business strategy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;