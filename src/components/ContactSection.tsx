import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
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
    <section id="contact" className="py-12 section-tinted scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sam image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-center md:text-left">
            <img
              src="/lovable-uploads/6d3685c0-e65a-4cd2-a633-6610881b144f.png"
              alt="Sam showing project blueprints"
              className="h-28 w-auto"
              loading="lazy"
            />
          </div>

          {/* Title + Subtitle */}
          <div className="flex flex-col justify-center items-center sm:items-start">
            <h2 className="text-3xl font-bold text-foreground mb-1 relative after:content-[''] after:block after:h-1 after:w-24 after:bg-primary after:mt-2 after:absolute after:left-1/2 after:transform after:-translate-x-1/2">
            Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Where you can show up too.
            </p>
          </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

        <div className="text-center space-y-6">
          <div className="flex justify-center gap-4">
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
          
          <div className="bg-background p-6 rounded-2xl border">
            <p className="text-muted-foreground leading-relaxed">
              I'm always excited to discuss technology, business opportunities, MBA programs, 
              or potential collaborations. Feel free to reach out – I'd love to connect!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
