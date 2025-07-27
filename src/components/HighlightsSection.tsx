import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HighlightsSection = () => {
  const [activeTab, setActiveTab] = useState("Internships");
  
  const tabs = ["Internships", "Leadership", "Projects", "Awards"];

  const renderContent = () => {
    switch (activeTab) {
      case "Internships":
        return (
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Software Engineering Intern - Visa</h3>
                <p className="text-muted-foreground text-sm mb-2">Summer 2024</p>
                <p className="text-muted-foreground">Worked on production systems and tackled real-world engineering challenges in a collaborative team environment.</p>
              </CardContent>
            </Card>
          </div>
        );
      case "Leadership":
        return (
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Student Community Leader</h3>
                <p className="text-muted-foreground text-sm mb-2">Ongoing</p>
                <p className="text-muted-foreground">Led various student communities, organizing events and fostering collaborative learning environments.</p>
              </CardContent>
            </Card>
          </div>
        );
      case "Projects":
        return (
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Mentoring App</h3>
                <p className="text-muted-foreground text-sm mb-2">Shipped & In Use</p>
                <p className="text-muted-foreground">Built and shipped a mentoring application that is currently being used by students and mentors.</p>
              </CardContent>
            </Card>
          </div>
        );
      case "Awards":
        return (
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground text-sm mb-2">Computer Science</p>
                <p className="text-muted-foreground">Recognition for outstanding performance in computer science studies.</p>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="highlights" className="py-12 bg-background scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-foreground mb-2">
            Highlights
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 bg-muted p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;