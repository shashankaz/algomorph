import Hero from "@/components/Hero";
import PopularAlgo from "@/components/PopularAlgo";
import Features from "@/components/Features";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Stats />
      <PopularAlgo />
      <Features />
      <ComingSoon />
      <Footer />
    </main>
  );
};

export default Home;
