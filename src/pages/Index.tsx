
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveSection from "@/components/LiveSection";
import EssentialsSection from "@/components/EssentialsSection";
import TipikliMeSection from "@/components/TipikliMeSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <LiveSection />
        <EssentialsSection />
        <TipikliMeSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
