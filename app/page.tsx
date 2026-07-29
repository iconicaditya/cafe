import Navbar              from "@/components/Navbar";
import Hero                from "@/components/Hero";
import FeaturedCoffeeModule from "@/components/sections/FeaturedCoffee";
import OurStoryModule       from "@/components/sections/OurStory";
import ProductsModule       from "@/components/sections/Products";
import GallerySection       from "@/components/sections/Gallery";
import TestimonialsSection  from "@/components/sections/Testimonials";
import LocationsModule      from "@/components/sections/Locations";
import ReservationCTASection from "@/components/sections/ReservationCTA";
import Footer               from "@/components/Footer";
import FloatingButtons      from "@/components/FloatingButtons";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCoffeeModule />
      <OurStoryModule />
      <ProductsModule />
      <GallerySection />
      <TestimonialsSection />
      <LocationsModule />
      <ReservationCTASection />
      <Footer />
      <FloatingButtons />
    </>
  );
}
