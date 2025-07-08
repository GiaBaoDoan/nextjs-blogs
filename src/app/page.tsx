import PopularTags from "@/components/home/PopularTags";
import BlogHighLight from "@/components/home/BlogHighLight";
import AboutSection from "@/components/home/About";
import HeroSection from "@/components/home/Test";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";

export default async function Home() {
  return (
    <main>
      {/* <About /> */}
      {/* <ServiceSection /> */}
      <HeroSection />
      <AboutSection />
      <BlogHighLight />
      <PopularTags />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
