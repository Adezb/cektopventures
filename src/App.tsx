import { About } from "./components/About";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

function App() {
  return (
    <div className="min-h-screen bg-brand-cloud text-brand-navy">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProduct />
      </main>
      <Footer />
    </div>
  );
}

export default App;
