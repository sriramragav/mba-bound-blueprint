import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "123@xyz.com",
      href: "mailto:123@xyz.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (877) abc-defg",
      href: "tel:+1877abcdefg"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
   <div className="min-h-screen bg-background overflow-x-hidden">
   <Navigation />
    <section id="contact" className="pt-20 pb-12 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-lg md:text-xl text-muted-foreground mt-6 px-4">
            Open to opportunities, collaborations, and meaningful conversations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
                  <a 
                    href={info.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center space-y-4 md:space-y-6">
          <div className="flex justify-center gap-3 md:gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <IconComponent className="w-5 h-5" />
                  </a>
                </Button>
              );
            })}
          </div>
          
          <div className="bg-background p-4 md:p-6 rounded-2xl border mx-4 md:mx-0">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              I'm always excited to discuss technology, business opportunities, MBA programs, 
              or potential collaborations. Feel free to reach out – I'd love to connect!
            </p>
          </div>
        </div>
      </div>
    </section>
     </div>
  );
};

export default Contact;
