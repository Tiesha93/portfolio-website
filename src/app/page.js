import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
