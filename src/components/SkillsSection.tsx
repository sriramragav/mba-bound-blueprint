import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90, description: "Primary language, used in Visa internship" },
        { name: "Python", level: 85, description: "Data science and backend development" },
        { name: "JavaScript/TypeScript", level: 80, description: "Full-stack web development" },
        { name: "C++", level: 75, description: "System programming and DSA" },
        { name: "SQL", level: 85, description: "Database design and optimization" }
      ]
    },
    {
      title: "Frameworks & Technologies",
      skills: [
        { name: "React/Next.js", level: 85, description: "Modern frontend development" },
        { name: "Spring Boot", level: 80, description: "Enterprise Java applications" },
        { name: "Node.js", level: 75, description: "Backend API development" },
        { name: "Django/Flask", level: 70, description: "Python web frameworks" },
        { name: "Docker/Kubernetes", level: 65, description: "Containerization and orchestration" }
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", level: 70, description: "Cloud infrastructure and services" },
        { name: "Git/GitHub", level: 90, description: "Version control and collaboration" },
        { name: "Jenkins/CI-CD", level: 65, description: "DevOps and automation" },
        { name: "MySQL/PostgreSQL", level: 80, description: "Relational database management" },
        { name: "Redis/MongoDB", level: 70, description: "NoSQL and caching solutions" }
      ]
    },
    {
      title: "Business & Soft Skills",
      skills: [
        { name: "Financial Systems", level: 75, description: "Gained from Visa internship" },
        { name: "Project Management", level: 80, description: "Agile methodologies and team leadership" },
        { name: "Problem Solving", level: 90, description: "Analytical thinking and solution design" },
        { name: "Communication", level: 85, description: "Technical writing and presentations" },
        { name: "Team Collaboration", level: 85, description: "Cross-functional teamwork" }
      ]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner (In Progress)",
    "Oracle Java SE 11 Developer",
    "Google Cloud Digital Leader",
    "Scrum Fundamentals Certified"
  ];

  return (
    <section id="skills" className="py-12 section-tinted scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 relative section-divider pb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technical expertise spanning full-stack development, cloud technologies, and business applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="group hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full" />
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Certifications & Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 bg-gradient-subtle p-8 rounded-2xl border">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Technical Philosophy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, scalable code and staying current with emerging technologies. 
              My experience at Visa International has given me valuable insights into enterprise-level 
              software development and the importance of building secure, reliable systems. I'm passionate 
              about leveraging technology to solve complex business problems and drive innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;