import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projectCategories = [
    {
      category: "Full Stack",
      projects: [
        {
          title: "Campus Mentoring App",
          description:
            "End-to-end mentoring platform with secure login, matching logic, and feedback tracking.",
          technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
        },
        {
          title: "E-commerce Platform",
          description:
            "Online store with product catalog, authentication, and Stripe payment integration.",
          technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
        },
      ],
    },
    {
      category: "Blockchain",
      projects: [
        {
          title: "Web3 Wallet Explorer",
          description:
            "Frontend tool to inspect Ethereum wallets and visualize token activity.",
          technologies: ["React", "Web3.js", "Ethereum", "REST APIs"],
        },
        {
          title: "Decentralized Voting Prototype",
          description:
            "Built a minimal dApp for secure, transparent voting on the Ethereum testnet.",
          technologies: ["Solidity", "Hardhat", "React", "Ethers.js"],
        },
      ],
    },
    {
      category: "Machine Learning",
      projects: [
        {
          title: "Facial Expression Classifier",
          description:
            "Trained a CNN to classify facial emotions from images using the FER dataset.",
          technologies: ["Python", "TensorFlow", "OpenCV", "Keras"],
        },
        {
          title: "Personalized Book Recommender",
          description:
            "Built a content-based book recommender using NLP techniques on user reviews.",
          technologies: ["Python", "Scikit-learn", "Pandas", "NLP"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Projects</h1>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto" />
          </div>

          {projectCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                {category.category}
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {category.projects.map((project, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                      <p className="text-muted-foreground text-xs italic">
                        {project.technologies.join(', ')}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-8">
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
      </div>
    </div>
  );
};

export default Projects;
