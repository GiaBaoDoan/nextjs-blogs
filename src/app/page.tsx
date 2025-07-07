// import About from "@/components/home/About";
import PopularTags from "@/components/home/PopularTags";
import BlogHighLight from "@/components/home/BlogHighLight";
// import ContactForm from "@/components/home/ContactForm";
import { FAQSection } from "@/components/home/FAQSection";
// import { ServiceSection } from "@/components/home/Services";
import { ContactSection } from "@/components/home/ContactSection";
import Test from "@/components/home/Test";
// import { ProjectSection } from "@/components/home/Projects";

export default async function Home() {
  return (
    <main>
      <Test />
      {/* <About /> */}
      {/* <ServiceSection /> */}
      <div className="container">
        {/* <ProjectSection /> */}
        <BlogHighLight />
        <PopularTags />
        <FAQSection />
        <ContactSection />
      </div>
    </main>
  );
}
