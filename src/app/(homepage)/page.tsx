import Footer from "@/components/common/footer";
import Brands from "./components/brands";
import Categories from "./components/categories";
import Hero from "./components/hero";
import NewArrivals from "./components/new_arrivals";
import Testimonials from "./components/testimonials";
import TopSelling from "./components/top_selling";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
}
