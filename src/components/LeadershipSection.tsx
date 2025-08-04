import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Target, TrendingUp } from 'lucide-react';

const LeadershipSection = () => {
  const experiences = [
    {
      role: "Deputy Director Of Photography",
      organization: "The Guindy Times",
      period: "Aug 2024 - Jun 2025",
      description: "Supporting the creative vision of the publication through visual storytelling. Managed event photography and editorial shoots.",
      achievements: [
        "Led coverage for 5+ university-wide events with 1000+ attendees",
        "Introduced a new editing workflow, reducing turnaround time by 30%",
        "Mentored 3 junior photographers"
      ],
      skills: ["Photography", "Team Coordination", "Media Production"],
      icon: Users
    },
    {
      role: "Associate Head Of Hacks",
      organization: "CSAU - Computer Society of Anna University",
      period: "Jul 2024 - Jun 2025",
      description: "Co-led university-wide hackathons and coding events, enhancing tech engagement across departments.",
      achievements: [
        "Spearheaded 2 flagship hackathons with 300+ participants each",
        "Designed problem statements in collaboration with sponsors",
        "Built outreach plan to double registrations YOY"
      ],
      skills: ["Hackathon Planning", "Collaboration", "Marketing"],
      icon: Award
    },
    {
      role: "Head of Operations",
      organization: "Literary Club of Anna University",
      period: "Sep 2023 - Jun 2024",
      description: "Managed club logistics, event operations, and coordination with university stakeholders.",
      achievements: [
        "Streamlined event planning process, improving efficiency by 40%",
        "Organized 10+ literary and debate events",
        "Instituted onboarding for new members"
      ],
      skills: ["Operations", "Event Management", "Leadership"],
      icon: Target
    },
    {
      role: "Junior Co-Ordinator Contents",
      organization: "ACM Student Chapter of CEG",
      period: "Jun 2023 - Jun 2024",
      description: "Handled technical content creation and knowledge-sharing initiatives within the ACM student chapter.",
      achievements: [
        "Published 15+ educational blogs and resources",
        "Led 3 technical writeup campaigns for internal workshops",
        "Contributed to increasing blog traffic by 50%"
      ],
      skills: ["Technical Writing", "Content Strategy", "Team Collaboration"],
      icon: TrendingUp
    }
  ];

  return (
    <section id="leadership" className="py-12 bg-background scroll-mt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-foreground mb-4 relative section-divider pb-4">
        Leadership & Impact
      </h2>
      <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
        Driving positive change through technology, teamwork, and community engagement
      </p>
    </div>

    {/* Leadership Experiences */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {experiences.map((exp, index) => {
        const IconComponent = exp.icon;
        return (
          <Card key={index} className="group hover:shadow-primary transition-all duration-300 overflow-hidden relative">
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
  </div>
</section>
  );
};

export default LeadershipSection;
