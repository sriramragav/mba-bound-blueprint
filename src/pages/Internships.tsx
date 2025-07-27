import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      title: "Software Engineering Intern",
      company: "Visa",
      location: "Austin, TX",
      duration: "Summer 2024",
      description: "Designated as a 'Must Hire' by her Director for outstanding performance. Entrusted with production code access and solved critical real-world issues — a rare responsibility for an intern.",
      skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "PostgreSQL"]
    },
    {
      title: "Software Development Intern",
      company: "Build Club, CEG",
      location: "Chennai, India",
      duration: "2023",
      description: "Built a web-based mentoring platform for the campus's innovation hub. Managed user workflows and admin dashboards; app is currently used by students and mentors.",
      skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript"]
    },
    {
      title: "Data Analyst Intern",
      company: "GR Network",
      location: "Bangalore, India", 
      duration: "3 Months",
      description: "Analyzed large datasets to identify trends and patterns. Created dashboards and reports for business stakeholders. Improved data processing efficiency by 40%.",
      skills: ["Python", "SQL", "Tableau", "Excel", "Power BI"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Internship Experience
            </h1>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional internship experiences that shaped my career journey and technical expertise.
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {internships.map((internship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{internship.title}</CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building size={16} />
                          <span>{internship.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{internship.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {internship.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;