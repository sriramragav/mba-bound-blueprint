import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projectCategories = [
    {
      category: "Full Stack",
      projects: [
        {
          title: "Campus Mentoring App",
          description:
            "End-to-end mentoring platform with secure login and feedback workflows.",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
        },
        {
          title: "E-commerce Platform",
          description:
            "Online storefront with user authentication and Stripe payments.",
          technologies: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
        },
      ],
    },
    {
      category: "Blockchain",
      projects: [
        {
          title: "Web3 Wallet Explorer",
          description:
            "Frontend interface to inspect wallet activity on Ethereum.",
          technologies: ["React", "Web3.js", "REST APIs"],
        },
        {
          title: "Decentralized Voting Prototype",
          description:
            "Built a minimal voting dApp on the Ethereum testnet.",
          technologies: ["Solidity", "Hardhat", "Ethers.js"],
        },
      ],
    },
    {
      category: "Machine Learning",
      projects: [
        {
          title: "Facial Expression Classifier",
          description:
            "CNN model for emotion detection from facial images.",
          technologies: ["Python", "TensorFlow", "OpenCV"],
        },
        {
          title: "Book Recommender",
          description:
            "Content-based recommender using NLP on book reviews.",
          technologies: ["Python", "Scikit-learn", "Pandas"],
        },
      ],
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-background overflow-hidden pt-14 px-4 sm:flex sm:items-center sm:justify-center sm:pt-0 sm:px-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">Projects</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.projects.map((project, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-semibold">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm mb-1">
                        {project.description}
                      </p>
                      <p className="text-muted-foreground text-xs italic">
                        {project.technologies.join(', ')}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <a
              href="https://github.com/not-a-coding-genius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="mr-2" />
              For more projects, visit my GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
