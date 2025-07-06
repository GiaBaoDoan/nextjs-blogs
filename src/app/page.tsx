// import About from "@/components/home/About";
import PopularTags from "@/components/home/PopularTags";
import BlogHighLight from "@/components/home/BlogHighLight";
import ContactForm from "@/components/home/ContactForm";
// import Test from "@/components/home/Test";
import { FAQSection } from "@/components/home/FAQSection";
import { ServiceSection } from "@/components/home/Services";
import { ContactSection } from "@/components/home/ContactSection";

export default async function Home() {
  return (
    <main className="container">
      {/* <Test />
      <About /> */}
      <ServiceSection />
      <BlogHighLight />
      <PopularTags />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
