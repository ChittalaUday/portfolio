import RightSidebarNav from "@/components/RightSidebarNav";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import InterestsLanguagesSection from "@/components/InterestsLanguagesSection";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <LoadingScreen />

      <RightSidebarNav />

      <section id="hero">
        <Hero />
      </section>

      {/* Full resume-based sections */}
      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="interests">
        <InterestsLanguagesSection />
      </section>
      <section id="contact">
        <ContactInfo />
      </section>
      <Footer />

    </main>
  );
}
