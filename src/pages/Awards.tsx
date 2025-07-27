import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Star, Calendar } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "Academic Distinction",
      organization: "CEG",
      year: "2023",
      description: "Ranked in top 10% of the department with consistent semester-over-semester CGPA growth. Overcame a modest academic start through sheer persistence.",
      category: "Academic",
      icon: Star
    },
    {
      title: "Best Organizer Award", 
      organization: "Webops & Blockchain Club",
      year: "2023",
      description: "Recognized for spearheading hands-on workshops that attracted hundreds of attendees and for building tools to improve event logistics.",
      category: "Leadership",
      icon: Trophy
    },
    {
      title: "Must Hire Recognition",
      organization: "Visa",
      year: "2024",
      description: "Designated as a 'Must Hire' by Director for outstanding performance during internship. Rare recognition showing exceptional potential.",
      category: "Professional",
      icon: Award
    },
    {
      title: "Innovation Challenge Winner",
      organization: "Build Club CEG",
      year: "2023",
      description: "Won first place in campus innovation challenge for developing the mentoring platform that is now used by hundreds of students.",
      category: "Innovation",
      icon: Trophy
    },
    {
      title: "Community Leadership Award",
      organization: "Women Techmakers CEG",
      year: "2024",
      description: "Recognized for reviving an inactive chapter and building it into a thriving community of 200+ members.",
      category: "Leadership",
      icon: Star
    },
    {
      title: "Technical Excellence Award",
      organization: "Hackathon 2022",
      year: "2022",
      description: "Best technical implementation for Web3 Wallet Explorer project at the WnCC Hackathon.",
      category: "Technical",
      icon: Award
    }
  ];

  const categories = ["All", "Academic", "Leadership", "Professional", "Innovation", "Technical"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAwards = selectedCategory === "All" 
    ? awards 
    : awards.filter(award => award.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h1>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Recognition and achievements that highlight my dedication to excellence in academics, leadership, and technical innovation.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-2 bg-muted p-1 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAwards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{award.category}</Badge>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar size={14} />
                        <span>{award.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent size={20} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">{award.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{award.organization}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredAwards.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No awards found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Awards;