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
                <h3 className="text-lg font-semibold text-foreground mb-2">Software Engineering Intern – Visa</h3>
                <p className="text-muted-foreground text-sm mb-2">Summer 2024</p>
                <p className="text-muted-foreground">
                  Designated as a “Must Hire” by her Director for outstanding performance. Entrusted with production code access and solved critical real-world issues — a rare responsibility for an intern.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Software Development Intern – Build Club, CEG</h3>
                <p className="text-muted-foreground text-sm mb-2">2023</p>
                <p className="text-muted-foreground">
                  Built a web-based mentoring platform for the campus’s innovation hub. Managed user workflows and admin dashboards; app is currently used by students and mentors.
                </p>
              </CardContent>
            </Card>
          </div>
        );
      case "Leadership":
        return (
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Student Director – Women Techmakers CEG</h3>
                <p className="text-muted-foreground text-sm mb-2">2024–present</p>
                <p className="text-muted-foreground">
                  Revived an inactive chapter into a vibrant, inclusive tech community. Launched speaker events, peer mentoring, and built an executive team from scratch.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Core Organizer – Webops & Blockchain Club</h3>
                <p className="text-muted-foreground text-sm mb-2">2022–2023</p>
                <p className="text-muted-foreground">
                  Designed and led workshops, judged hackathons, and mentored junior members on web technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        );
      case "Projects":
        return (
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Campus Mentoring App</h3>
                <p className="text-muted-foreground text-sm mb-2">Build Club, 2023</p>
                <p className="text-muted-foreground">
                  Designed and shipped an end-to-end mentoring platform with secure login, matching logic, session scheduling, and feedback tracking. Hosted on the university intranet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Web3 Wallet Explorer</h3>
                <p className="text-muted-foreground text-sm mb-2">WnCC Hackathon, 2022</p>
                <p className="text-muted-foreground">
                  Built a frontend tool for Ethereum wallet inspection and token visualization. Learned the basics of blockchain APIs and decentralized data.
                </p>
              </CardContent>
            </Card>
          </div>
        );
      case "Awards":
        return (
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Academic Distinction</h3>
                <p className="text-muted-foreground text-sm mb-2">CEG, 2023</p>
                <p className="text-muted-foreground">
                  Ranked in top 10% of the department with consistent semester-over-semester CGPA growth. Overcame a modest academic start through sheer persistence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Best Organizer Award</h3>
                <p className="text-muted-foreground text-sm mb-2">Webops & Blockchain Club, 2023</p>
                <p className="text-muted-foreground">
                  Recognized for spearheading hands-on workshops that attracted hundreds of attendees and for building tools to improve event logistics.
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
