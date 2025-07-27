import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projectsByCategory = {
    "Full Stack": [
      {
        title: "Campus Mentoring App",
        description: "Built a mentoring platform with matching logic, secure login, and feedback workflows."
      },
      {
        title: "E-commerce Platform",
        description: "Designed a full-featured online store with payments, authentication, and product catalog."
      }
    ],
    "Blockchain": [
      {
        title: "Web3 Wallet Explorer",
        description: "Visualized Ethereum wallet activity using Web3.js and decentralized APIs."
      },
      {
        title: "Token Ownership Tracker",
        description: "Tracked and rendered ERC-721/1155 token balances from wallet addresses."
      }
    ],
    "Machine Learning": [
      {
        title: "Pneumonia Detection from X-rays",
        description: "Built a CNN model to classify medical images using transfer learning."
      },
      {
        title: "ML Pipeline for Missing Data",
        description: "Compared imputation techniques and trained regressors on synthetic datasets."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-4">Projects</h1>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto" />
        </div>

        {/* Project Categories in Columns */}
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {Object.entries(projectsByCategory).map(([category, projects]) => (
            <Card key={category} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <Badge variant="outline" className="text-xs">{category}</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index}>
                    <CardTitle className="text-base font-semibold mb-1">{project.title}</CardTitle>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/not-a-coding-genius" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" />
              For more projects, visit my GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
