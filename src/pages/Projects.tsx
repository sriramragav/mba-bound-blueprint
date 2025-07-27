import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Campus Mentoring App',
      description: 'End-to-end mentoring platform with secure login, smart matching, scheduling, and feedback. Deployed internally at the university.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      category: 'Full Stack',
      year: '2023',
      github: 'https://github.com/not-a-coding-genius/campus-mentoring-app',
      featured: true,
    },
    {
      title: 'Web3 Wallet Explorer',
      description: 'Frontend tool for exploring Ethereum wallets and token balances using blockchain APIs.',
      technologies: ['React', 'Web3.js', 'Ethereum', 'REST APIs'],
      category: 'Blockchain',
      year: '2022',
      github: 'https://github.com/not-a-coding-genius/web3-wallet-explorer',
      featured: true,
    },
    {
      title: 'Frontend Mentor Challenges',
      description: 'Solutions to advanced frontend challenges with pixel-perfect layouts and accessibility best practices.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'Frontend',
      year: '2023',
      github: 'https://github.com/not-a-coding-genius/frontend-mentor',
      featured: true,
    },
    {
      title: 'E-commerce Platform',
      description: 'Shopping platform with auth, product catalog, cart, and payment flow.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
      category: 'Full Stack',
      year: '2023',
      github: 'https://github.com/not-a-coding-genius/ecommerce-platform',
      featured: false,
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task tracker with real-time sync and progress boards.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      category: 'Frontend',
      year: '2022',
      github: 'https://github.com/not-a-coding-genius/task-manager',
      featured: false,
    },
    {
      title: 'Graph Algorithm Visualizer',
      description: 'Interactive visualization of graph algorithms like Dijkstra and A* for learning purposes.',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
      category: 'Frontend',
      year: '2021',
      github: 'https://github.com/not-a-coding-genius/graph-visualizer',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
            <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A curated collection of projects spanning full-stack development, blockchain, and UI challenges. Each taught me something new.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar size={14} />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Other Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs">{project.category}</Badge>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar size={14} />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <a href="https://github.com/not-a-coding-genius" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
