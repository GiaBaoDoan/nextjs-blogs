import About from "@/components/home/About";
import PopularTags from "@/components/home/PopularTags";
import BlogHighLight from "@/components/home/BlogHighLight";
import HeroSection from "@/components/home/HeroSection";

export default async function Home() {
  return (
    <main className="container">
      <HeroSection />
      <About />
      <PopularTags />
      <BlogHighLight />
    </main>
  );
}
