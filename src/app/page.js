import Brands from "@/features/Brands";
import Categories from "@/features/Categories/Categories";
import Footer from "@/components/Footer/Footer";
import Slider from "@/features/Frame/Slider"
import Header from "@/components/Header/Header";

export default function Home() {

  return (
    <div>

      <Header />
      <Slider />
      <Categories />
      <Brands />
      <Footer />

    </div>
  );
}
