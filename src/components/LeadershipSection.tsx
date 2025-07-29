import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Target, TrendingUp } from 'lucide-react';

const LeadershipSection = () => {
  const experiences = [
    {
      role: "Technical Team Lead",
      organization: "College Final Year Project",
      period: "2024",
      description: "Leading a 4-member team in developing a comprehensive web application for academic management. Responsible for project planning, code reviews, and ensuring timely delivery.",
      achievements: [
        "Coordinated sprint planning and daily standups using Agile methodology",
        "Mentored junior team members in React and Node.js development",
        "Delivered project 2 weeks ahead of schedule with 100% feature completion"
      ],
      skills: ["Team Management", "Agile", "Mentoring", "Project Planning"],
      icon: Users
    },
    {
      role: "Student Representative",
      organization: "Computer Science Department",
      period: "2023-2024",
      description: "Elected representative for the CS department, serving as a liaison between students and faculty. Organized academic events and addressed student concerns.",
      achievements: [
        "Organized department's first-ever tech symposium with 500+ attendees",
        "Facilitated curriculum feedback sessions improving course satisfaction by 30%",
        "Established peer tutoring program helping 50+ struggling students"
      ],
      skills: ["Event Management", "Communication", "Problem Solving", "Advocacy"],
      icon: Award
    },
    {
      role: "Volunteer Coordinator",
      organization: "Local NGO - Education Initiative",
      period: "2022-2023",
      description: "Coordinated volunteer activities for an education-focused NGO, managing a team of 15 volunteers to provide coding workshops for underprivileged students.",
      achievements: [
        "Trained 100+ students in basic programming concepts",
        "Increased volunteer retention rate by 40% through better engagement",
        "Developed curriculum for beginner-friendly coding workshops"
      ],
      skills: ["Social Impact", "Curriculum Design", "Volunteer Management", "Teaching"],
      icon: Target
    }
  ];

  const awards = [
    {
      title: "Dean's List",
      description: "Academic Excellence Award for maintaining top 5% CGPA",
      year: "2023-2024"
    },
    {
      title: "Best Innovation Award",
      description: "College hackathon winner for fintech solution",
      year: "2023"
    },
    {
      title: "Outstanding Volunteer",
      description: "Recognition for community service and leadership",
      year: "2022"
    },
    {
      title: "Programming Competition",
      description: "Regional level coding competition - 2nd place",
      year: "2022"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Leadership & Impact
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Driving positive change through technology, teamwork, and community engagement
          </p>
        </div>

        {/* Leadership Experiences */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">
                          {exp.role}
                        </CardTitle>
                        <p className="text-primary font-medium">{exp.organization}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-accent/10 text-accent">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Awards & Recognition */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            Awards & Recognition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {award.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {award.description}
                  </p>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                    {award.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
