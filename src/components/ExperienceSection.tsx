import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

const ExperienceSection = () => {
  const internships = [
    {
      title: "Software Engineering Intern",
      company: "Visa",
      location: "Bengaluru, India",
      duration: "Jun - Aug 2025",
      description: "Designated as a 'Must Hire' by her Director for outstanding performance. Entrusted with production code access and solved critical real-world issues — a rare responsibility for an intern.",
      skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "PostgreSQL"]
    },
    {
      title: "Data Analyst Intern",
      company: "GR Network",
      location: "Chennai, India", 
      duration: "March - April 2024",
      description: "Performed Data Mining and Analysis, Applied Machine Learning and Predictive Models for Student Performane Forecasting.",
      skills: ["Python", "SQL", "Tableau", "Excel", "Power BI"]
    },
    {
      title: "Tech Intern",
      company: "The Internet Generation",
      location: "Chennai, India", 
      duration: "Sep - Oct 2023",
      description: "Collaborated with cross-functional teams, gathered and analyzed data, trained LLM on creative queries; implemented sentiment analysis resulting in a reduction in time spent on updating training data.",
      skills: ["Python", "SQL", "Tableau", "Excel", "Power BI"]
    }
  ];

  return (
    <section id="internships" className="py-12 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3 relative section-divider pb-4">
            Internship Experience
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Professional internship experiences that shaped my career journey and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship, index) => (
            <Card key={index} className="card-enhanced h-full">
              <CardHeader className="pb-2">
                <div>
                  <CardTitle className="text-lg mb-1">{internship.title}</CardTitle>
                  <div className="flex flex-col gap-1 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1">
                      <Building size={14} />
                      <span>{internship.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{internship.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{internship.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p className="mb-3">{internship.description}</p>
                <div className="flex flex-wrap gap-1">
                  {internship.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs px-2 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
