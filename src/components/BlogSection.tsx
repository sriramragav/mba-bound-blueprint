import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const BlogSection = () => {
  // Real blog posts from WordPress
  const blogPosts = [
    {
      id: 1,
      title: "I'm back!",
      excerpt: "I'm dumb. I'm known to be a pessimist and an ardent philosopher of optimistic nihilism. I didn't arrive at this conclusion with ease. It's the way I struggle to understand concepts my friends do nothing but glaze over...",
      date: "2023-03-20",
      readTime: "5 min read",
      category: "Personal",
      featured: true,
      image: "photo-1498050108023-c5249f4df085",
      url: "https://notsogoodblog289079317.wordpress.com/2023/03/20/im-back/"
    },
    {
      id: 2,
      title: "Life Of Your Own",
      excerpt: "Moms are all-rounders. From the minute you wake up to when you go to sleep they take care of you. I can't even imagine my life without my mother. Sometimes I do wonder we all have a life of our own. Our goals, ambitions, etc...",
      date: "2020-08-30",
      readTime: "4 min read",
      category: "Life",
      featured: true,
      image: "photo-1461749280684-dccba630e2f6",
      url: "https://notsogoodblog289079317.wordpress.com/2020/08/30/life-of-your-own/"
    },
    {
      id: 3,
      title: "The Dash Of Life",
      excerpt: "You are running. All you can hear is the echo of your footsteps and a high pitched voice ringing in your ears. You want to give up, but you can't. Have to keep running. The earth below you start to fracture...",
      date: "2020-08-29",
      readTime: "6 min read",
      category: "Philosophy",
      featured: false,
      image: "photo-1519389950473-47ba0277781c",
      url: "https://notsogoodblog289079317.wordpress.com/2020/08/29/the-dash-of-life/"
    }
  ];

  // Planned blog posts for MBA application period
  const upcomingPosts = [
    {
      title: "My MBA Application Journey: From Tech to Business School",
      description: "Documenting the MBA application process, essays, interviews, and decision-making",
      status: "Planned"
    },
    {
      title: "Product Management vs Engineering: Finding My Path",
      description: "Exploring career transitions from technical roles to product management",
      status: "In Progress"
    },
    {
      title: "Building Communities: Lessons from College Leadership",
      description: "Insights from leading tech societies and organizing college events",
      status: "Planned"
    },
    {
      title: "The Future of Fintech in India",
      description: "Analysis of India's digital payment revolution and emerging opportunities",
      status: "Planned"
    },
    {
      title: "Data Science for Social Good",
      description: "Using analytics and machine learning to solve real-world problems",
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