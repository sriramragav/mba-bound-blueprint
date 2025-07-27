import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HighlightsSection from '@/components/HighlightsSection';
import LeadershipSection from '@/components/LeadershipSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <LeadershipSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default Index;
