import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const categorizedProjects = {
    "Full Stack": [
      {
        title: "Campus Mentoring App",
        description: "End-to-end mentoring platform with login, session scheduling, and feedback tracking.",
      },
      {
        title: "E-commerce Platform",
        description: "Online shopping app with authentication, product catalog, and Stripe integration.",
      },
    ],
    "Frontend": [
      {
        title: "Task Management System",
        description: "Real-time task collaboration with progress tracking using Firebase.",
      },
      {
        title: "Portfolio Website",
        description: "Personal site built with React and Tailwind to showcase work and achievements.",
      },
    ],
    "Blockchain": [
      {
        title: "Web3 Wallet Explorer",
        description: "Visual tool to inspect Ethereum wallet balances and token data.",
      },
      {
        title: "NFT Minting Demo",
        description: "Prototype dApp to mint, list, and view NFTs on Ethereum testnets.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground text-sm">
      <Navigation />
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {Object.entries(categorizedProjects).map(([category, projects]) => (
            <div key={category}>
              <h2 className="text-lg font-semibold mb-4 text-center">
                <Badge variant="outline" className="text-xs px-2 py-1">{category}</Badge>
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-muted/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md font-medium">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 text-muted-foreground">
                      {project.description}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/not-a-coding-genius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} className="mr-2" />
              For more projects, visit GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
