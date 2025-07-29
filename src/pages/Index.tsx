import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AwardsSection from '@/components/AwardsSection';
import LeadershipSection from '@/components/LeadershipSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="pt-16 scroll-smooth">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AwardsSection />
        <LeadershipSection />
        <BlogSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
