import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  // Real projects from GitHub
  const projects = [
    {
      id: 1,
      title: "Traffic Management System",
      description: "Distributed traffic management system using Spark-Kafka for real-time traffic flow optimization and smart city infrastructure.",
      technologies: ["Python", "Apache Spark", "Kafka", "Distributed Systems"],
      category: "Big Data",
      featured: true,
      github: "https://github.com/Not-a-coding-genius/TrafficManagement",
      demo: "#",
      impact: "Real-time traffic optimization"
    },
    {
      id: 2,
      title: "Banking Application",
      description: "Secure banking system with modern UI/UX, transaction management, and account services built with SpringBoot and MySQL.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      category: "Full Stack",
      featured: true,
      github: "https://github.com/Not-a-coding-genius/BankingApp",
      demo: "#",
      impact: "Secure financial transactions"
    },
    {
      id: 3,
      title: "Formula 1 Winner Predictor",
      description: "Machine learning model that predicts F1 race winners using historical data, driver statistics, and track conditions.",
      technologies: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn"],
      category: "AI/ML",
      featured: false,
      github: "https://github.com/Not-a-coding-genius/Formula1-Predictor",
      demo: "#",
      impact: "Predictive racing analytics"
    },
    {
      id: 4,
      title: "Yelp Sentiment Analysis",
      description: "NLP project analyzing customer reviews from Yelp to determine sentiment patterns and business insights.",
      technologies: ["Python", "NLP", "Jupyter Notebook", "Machine Learning"],
      category: "Data Science",
      featured: false,
      github: "https://github.com/Not-a-coding-genius/YelpSenitmentAnalysis",
      demo: "#",
      impact: "Business sentiment insights"
    },
    {
      id: 5,
      title: "CEG Safety App UI",
      description: "Mobile application interface designed to make College of Engineering, Guindy a safer place for students and staff.",
      technologies: ["UI/UX Design", "Mobile Design", "Safety Systems"],
      category: "Mobile",
      featured: false,
      github: "https://github.com/Not-a-coding-genius/CEGSafetyAppUI",
      demo: "#",
      impact: "Enhanced campus safety"
    },
    {
      id: 6,
      title: "Movie Recommendation System",
      description: "Intelligent movie recommendation engine using collaborative filtering and content-based algorithms.",
      technologies: ["Python", "Machine Learning", "Recommendation Systems"],
      category: "AI/ML",
      featured: false,
      github: "https://github.com/Not-a-coding-genius/MovieRecSystem",
      demo: "#",
      impact: "Personalized recommendations"
    },
    {
      id: 7,
      title: "Thanglish Tokenizer",
      description: "Natural language processing tool for tokenizing Tamil-English mixed text, useful for regional language analysis.",
      technologies: ["Python", "NLP", "Jupyter Notebook", "Tokenization"],
      category: "NLP",
      featured: false,
      github: "https://github.com/Not-a-coding-genius/ThanglishTokenizer",
      demo: "#",
      impact: "Regional language processing"
    },
    {
      id: 8,
      title: "C19 Research",
      description: "COVID-19 data analysis and research project examining pandemic trends and patterns using statistical methods.",
      technologies: ["Python", "Data Analysis", "Statistical Modeling"],
      category: "Research",
      featured: false,
      github: "https://github.com/Not-a-coding-genius/C19Research",
      demo: "#",
      impact: "Pandemic trend analysis"
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
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com/Not-a-coding-genius" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
