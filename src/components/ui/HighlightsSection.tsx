import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const tabs = ["Internships", "Leadership", "Projects", "Awards"];

const HighlightsSection = () => {
  const [activeTab, setActiveTab] = useState("Internships");

  const renderContent = () => {
    switch (activeTab) {
      case "Internships":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-primary">Visa Inc.</h3>
                <p className="text-sm text-muted-foreground">
                  Solved real-world production issues and built tools during a
                  3-month internship in 2025.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-primary">GR Data Analyst</h3>
                <p className="text-sm text-muted-foreground">
                  Conducted data analysis and built dashboards in a part-time
                  role during undergrad.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case "Leadership":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-primary">Head, CEG Tech Forum</h3>
                <p className="text-sm text-muted-foreground">
                  Led events, speaker series, and mentorship programs for 300+
                  students.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-primary">Mentoring App Builder</h3>
                <p className="text-sm text-muted-foreground">
                  Built a college mentoring app still used across departments.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case "Projects":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-primary">GitHub Portfolio</h3>
                <p className="text-sm text-muted-foreground">
                  Developed and maintained personal projects like Todo apps,
                  full-stack dashboards, and a JS game engine.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-primary">AI-Powered Resume Parser</h3>
                <p className="text-sm text-muted-foreground">
                  Built using Python and ML to extract resume data for HR tools.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case "Awards":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-primary">Academic Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Consistently improved CGPA and received top 10% merit
                  recognition in college.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold text-primary">Visa Must-Hire Intern</h3>
                <p className="text-sm text-muted-foreground">
                  Earned rare "must-hire" rating from internship director.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="highlights" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
          Highlights
        </h2>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-300
                ${
                  activeTab === tab
                    ? "bg-primary text-white border-primary"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div>{renderContent()}</div>
      </div>
    </section>
  );
};

export default HighlightsSection;
