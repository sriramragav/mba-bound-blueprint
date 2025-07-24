import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const BlogSection = () => {
  // Placeholder blog posts - will be replaced with actual content
  const blogPosts = [
    {
      id: 1,
      title: "My Journey from Code to Business: Lessons from Visa Internship",
      excerpt: "Reflecting on how my 3-month internship at Visa International opened my eyes to the intersection of technology and business strategy in the fintech world.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Career",
      featured: true,
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      id: 2,
      title: "Building Scalable Payment Systems: Technical Deep Dive",
      excerpt: "An exploration of the technical challenges in processing millions of transactions daily and the architectural decisions that make it possible.",
      date: "2023-12-20",
      readTime: "12 min read",
      category: "Technology",
      featured: true,
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      id: 3,
      title: "Why I'm Pursuing an MBA as a Computer Science Student",
      excerpt: "The strategic thinking behind my decision to pursue a deferred MBA and how it aligns with my long-term career goals in tech leadership.",
      date: "2023-11-10",
      readTime: "6 min read",
      category: "Education",
      featured: false,
      image: "photo-1519389950473-47ba0277781c"
    },
    {
      id: 4,
      title: "The Future of Fintech: Trends and Opportunities",
      excerpt: "Analyzing emerging trends in financial technology and how they're reshaping the global financial landscape.",
      date: "2023-10-25",
      readTime: "10 min read",
      category: "Fintech",
      featured: false,
      image: "photo-1581090464777-f3220bbe1b8b"
    }
  ];

  // Placeholder for upcoming blog posts
  const upcomingPosts = [
    {
      title: "Preparing for Top MBA Programs: A Technical Student's Guide",
      description: "Comprehensive guide for engineering students applying to premier business schools",
      status: "In Progress"
    },
    {
      title: "Building a Personal Brand in Tech",
      description: "Strategies for establishing thought leadership and professional presence",
      status: "Planned"
    },
    {
      title: "The Art of Technical Communication",
      description: "Bridging the gap between technical complexity and business clarity",
      status: "Planned"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Blog & Insights
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Sharing thoughts on technology, business, career growth, and the MBA journey
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Featured Articles
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-primary transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-subtle relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${post.image}?w=600&h=400&fit=crop`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Recent Posts
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-subtle rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={`https://images.unsplash.com/${post.image}?w=200&h=200&fit=crop`}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Content */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Coming Soon
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {upcomingPosts.map((post, index) => (
              <Card key={index} className="bg-gradient-subtle border-dashed">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {post.description}
                  </p>
                  
                  <Badge variant="outline" className="bg-accent/10 text-accent">
                    {post.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;