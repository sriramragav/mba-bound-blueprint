import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Rocket, School, Lightbulb, Star } from "lucide-react";

const about = [
  {
    icon: <Lightbulb size={20} />,
    title: "This is about page",
    description:
      "Developed a hydroponics-based farming system; won the State Level Science Competition.",
    year: "2013",
  },
  {
    icon: <Rocket size={20} />,
    title: "NSS Space Settlement Contest",
    description:
      "Awarded Second Place Internationally in the NASA Space Society Settlement Contest.",
    year: "2019",
  }/*,
  {
    icon: <Award size={20} />,
    title: "Visa 'Must Hire' Intern",
    description:
      "Entrusted with production-level access and debugging responsibilities — rare among interns.",
    year: "2025",
  }*/
  ];

const Awards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Awards & Recognition</h1>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            Milestones that reflect a journey of initiative, curiosity, and impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-start gap-3 pb-2">
                <div className="text-primary mt-1">{award.icon}</div>
                <CardTitle className="text-base font-semibold text-foreground leading-tight">
                  {award.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm text-muted-foreground">
                <p>{award.description}</p>
                <p className="mt-2 text-xs text-right text-muted-foreground italic">{award.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
