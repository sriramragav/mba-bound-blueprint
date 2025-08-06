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
      description: (
        <div className="h-64 overflow-y-auto pr-2 space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li>Built a custom security issue dashboard using multiple APIs with advanced filtering, partial-text search, CSV/JSON export, and visual analytics for faster issue triage.</li>
            <li>Re-designed Splunk email logging and query tracking for 16 common errors, improving debugging across both production and non-production environments.</li>
            <li>Developed an interactive log analysis dashboard:
              <ul className="list-disc pl-5 space-y-1">
                <li>Parses Splunk logs into Mermaid flow diagrams and summarizes key fields.</li>
                <li>Includes an NLP-powered log retriever, log classifier with dropdowns, and customizable GenAI queries for quick analysis.</li>
                <li>Supports loading multiple logs within a session.</li>
              </ul>
            </li>
            <li>Proposed a patent idea on optimizing semantic prompting for LLMs in log analysis.</li>
            <li>Explored multi-agent architectures and AST-based RAG models to enhance code understanding and trace execution chains.</li>
            <li>Contributed to team documentation (FX New Member Onboarding Wiki) and supported testing of internal tools (React19 portal).</li>
            <li>Resolved 18 production bugs and supported data migration between SQL and MySQL environments.</li>
          </ul>
        </div>
      ),
      skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "PostgreSQL"]
    },
    {
      title: "Data Analyst Intern",
      company: "GR Network",
      location: "Chennai, India",
      duration: "Mar - Apr 2024",
      description: (
        <div className="h-64 overflow-y-auto pr-2 space-y-2">
          <ul className="list-disc pl-5 space-y-1">
            <li>Performed data mining and analysis to identify trends in student performance.</li>
            <li>Developed interactive dashboards for monitoring academic progress and risk indicators.</li>
            <li>Applied machine learning and predictive models to forecast student outcomes.</li>
            <li>Improved student retention through data-driven early warning systems.</li>
            <li>Enabled personalized learning paths and targeted interventions based on performance analytics.</li>
          </ul>
        </div>
      ),
      skills: ["Python", "SQL", "Tableau", "Excel", "Power BI"]
    },
    {
      title: "Tech Intern",
      company: "The Internet Generation",
      location: "Chennai, India",
      duration: "Sep - Oct 2023",
      description:
        "Collaborated with cross-functional teams, gathered and analyzed data, trained LLM on creative queries; implemented sentiment analysis resulting in a reduction in time spent on updating training data.",
      skills: ["Python", "SQL", "Tableau", "Excel", "Power BI"]
    }
  ];

  return (
    <section id="internships" className="py-12 section-tinted scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content with Image on Left */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-center sm:text-left">
          {/* Sam Image */}
          <img
            src="/lovable-uploads/fec492ee-4066-4e0c-951e-4174f8d9dd87.png"
            alt="Cartoon Samyuctaa with tools and blueprint"
            className="h-28 w-auto object-contain"
            loading="lazy"
          />
        
          {/* Title + Subtitle */}
          <div className="flex flex-col justify-center items-center sm:items-start">
            <h2 className="text-3xl font-bold text-foreground mb-1 relative">
              Internship Experience
              <span className="block h-1 w-24 bg-primary mt-1 mx-auto sm:mx-0"></span>
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Where I showed up to solve real-world problems.
            </p>
          </div>
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
                <div className="mb-3">
                  {typeof internship.description === "string"
                    ? <p>{internship.description}</p>
                    : internship.description}
                </div>
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
