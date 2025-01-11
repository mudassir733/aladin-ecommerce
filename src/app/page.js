import Brands from "@/components/Brands/Brands";
import Categories from "@/components/Categories/Categories";
import Slider from "@/components/Frame/Slider"
import Header from "@/components/Header/Header";

export default function Home() {

  return (
    <div>
      <>
        <Header />
        <Slider />
        <Categories />
        <Brands />
      </>
    </div>
  );
}
