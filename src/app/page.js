import Brands from "@/components/Brands/Brands";
import Categories from "@/components/Categories/Categories";
import Slider from "@/components/Frame/Slider"

export default function Home() {

  return (
    <div>
      <>
        <Slider />
        <Categories />
        <Brands />
      </>
    </div>
  );
}
