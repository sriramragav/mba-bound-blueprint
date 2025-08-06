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
          description: "End-to-end mentoring platform with secure login and feedback workflows.",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
        },
        {
          title: "E-commerce Platform",
          description: "Online storefront with user authentication and Stripe payments.",
          technologies: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
        },
      ],
    },
    {
      category: "Blockchain",
      projects: [
        {
          title: "Web3 Wallet Explorer",
          description: "Frontend interface to inspect wallet activity on Ethereum.",
          technologies: ["React", "Web3.js", "REST APIs"],
        },
        {
          title: "Decentralized Voting Prototype",
          description: "Built a minimal voting dApp on the Ethereum testnet.",
          technologies: ["Solidity", "Hardhat", "Ethers.js"],
        },
      ],
    },
    {
      category: "Machine Learning",
      projects: [
        {
          title: "Facial Expression Classifier",
          description: "CNN model for emotion detection from facial images.",
          technologies: ["Python", "TensorFlow", "OpenCV"],
        },
        {
          title: "Book Recommender",
          description: "Content-based recommender using NLP on book reviews.",
          technologies: ["Python", "Scikit-learn", "Pandas"],
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-12 section-tinted scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title & Sam Image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {/* Left Column: Image */}
          <div className="flex justify-end w-full md:w-1/3">
            <img
              src="/lovable-uploads/6d3685c0-e65a-4cd2-a633-6610881b144f.png"
              alt="Cartoon Samyuctaa with product key"
              className="h-24 w-auto"
              loading="lazy"
            />
          </div>

          {/* Right Column: Heading */}
          <div className="text-center md:text-left md:w-2/3">
            <h2 className="text-3xl font-bold text-foreground mb-3 relative pb-4 section-divider">
              Projects
            </h2>
            <p className="text-xl text-muted-foreground mt-6">
              "Where I showed up to build on my own."
            </p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projectCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.projects.map((project, index) => (
                  <Card key={index} className="card-enhanced">
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

        {/* GitHub Button */}
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
