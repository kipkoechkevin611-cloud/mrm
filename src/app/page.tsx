import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import RoofVisualizer from "@/components/RoofVisualizer";
import QuoteForm from "@/components/QuoteForm";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <Projects />
      <About />
      <WhyChooseUs />
      <RoofVisualizer />
      <Testimonials />
      <Blog />
      <QuoteForm />
    </main>
  );
}
