import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const curatedBlogs = [
  {
    id: 1,
    title: "Everyday Superheroes",
    category: "Reflections",
    excerpt:
      "A tribute to frontline workers and the small acts of courage that define everyday heroism—written during the COVID-19 lockdown.",
    url: "https://notsogoodblog289079317.wordpress.com/2020/08/24/example-post-3/",
  },
  {
    id: 2,
    title: "Life: A Bizarre Occurrence",
    category: "Philosophy",
    excerpt:
      "An introspective look at fate, coincidence, and free will—complete with a Sims analogy and a wave-particle duality twist.",
    url: "https://notsogoodblog289079317.wordpress.com/2020/08/26/life-a-bizarre-occurrence/",
  },
  {
    id: 3,
    title: "The Things We Should Do",
    category: "Empathy",
    excerpt:
      "A personal take on social conscience, hunger, and doing the right thing—even when no one is watching.",
    url: "https://notsogoodblog289079317.wordpress.com/2020/07/11/the-things-we-should-do/",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-12 section-tinted scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 relative section-divider pb-4">
            Personal Writings
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Where I showed up to share, when I was just a teenager.
          </p>
        </div>
        */}
           {/* Header with Sam image */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-center md:text-left">
          
          {/* Sam image */}
          <div className="flex justify-center w-full md:w-auto">
            <img
              src="/avatar/PersonalWritings.png"
              alt="Sam showing project blueprints"
              className="h-28 w-auto"
              loading="lazy"
            />
          </div>

          {/* Heading and Subtitle */}

          {/* Title + Subtitle */}
          <div className="flex flex-col justify-center items-center sm:items-start">
            <h2 className="text-3xl font-bold text-foreground mb-1 relative after:content-[''] after:block after:h-1 after:w-24 after:bg-primary after:mt-2 after:absolute after:left-1/2 after:transform after:-translate-x-1/2">
            Personal Writings
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Where I showed up to share, when I was just a teenager.
            </p>
          </div>
        </div>
          
     
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curatedBlogs.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-primary transition-all duration-300 overflow-hidden"
            >
              <CardHeader>
                <Badge
                  variant="secondary"
                  className="bg-primary text-primary-foreground w-fit mb-2"
                >
                  {post.category}
                </Badge>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary group/btn hover:bg-transparent"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
