import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Categories from "@/components/Categories";
import FeaturedTrips from "@/components/FeaturedTrips";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Search Section */}
      <section className="py-16 px-4 -mt-20 relative z-10">
        <SearchBar />
      </section>

      <Categories />
      <FeaturedTrips />
      <Footer />
    </div>
  );
};

export default Index;
