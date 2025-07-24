import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  // Placeholder projects - will be replaced with actual GitHub projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack web application with modern design, secure payment integration, and real-time inventory management. Built with scalability and user experience in mind.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      category: "Full Stack",
      featured: true,
      github: "#",
      demo: "#",
      impact: "Handles 1000+ concurrent users"
    },
    {
      id: 2,
      title: "Financial Analytics Dashboard",
      description: "Real-time dashboard for financial data visualization and analysis. Inspired by my Visa internship experience with financial systems.",
      technologies: ["Python", "Django", "React", "D3.js", "Redis"],
      category: "Data Science",
      featured: true,
      github: "#",
      demo: "#",
      impact: "Processes 50GB+ data daily"
    },
    {
      id: 3,
      title: "Machine Learning Predictor",
      description: "AI-powered prediction system using advanced algorithms for business forecasting and trend analysis.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask", "AWS"],
      category: "AI/ML",
      featured: false,
      github: "#",
      demo: "#",
      impact: "95% accuracy rate"
    },
    {
      id: 4,
      title: "Mobile Task Manager",
      description: "Cross-platform mobile application for team collaboration and project management with offline capabilities.",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      category: "Mobile",
      featured: false,
      github: "#",
      demo: "#",
      impact: "10K+ downloads"
    },
    {
      id: 5,
      title: "Cloud Infrastructure Tool",
      description: "DevOps automation tool for cloud deployment and monitoring with CI/CD pipeline integration.",
      technologies: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins"],
      category: "DevOps",
      featured: false,
      github: "#",
      demo: "#",
      impact: "Reduces deployment time by 60%"
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "Secure, transparent voting system using blockchain technology ensuring immutable records and voter privacy.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      category: "Blockchain",
      featured: false,
      github: "#",
      demo: "#",
      impact: "100% transparent elections"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Curated selection of projects demonstrating technical expertise and business impact
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-primary transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-background">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                  <span className="text-sm font-medium text-primary">Impact: </span>
                  <span className="text-sm text-muted-foreground">{project.impact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Additional Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {otherProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Github className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="text-xs text-primary font-medium">
                    {project.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Projects on GitHub
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
