import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import HowItWorks from "./components/HowItWorks";
import ForWhom from "./components/ForWhom";
import CTA from "./components/CTA";
import Footer from "./components/Footer";


export default function HomePage() {
  return (
    <main >
      <Navbar />
      <Hero />
      <Problems />
      <Solutions />
      <HowItWorks />
      <ForWhom />
      <CTA />   
      <Footer />
    </main>
  );
}
