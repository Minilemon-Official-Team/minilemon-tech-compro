import Hero from "@/components/sections/product/mobile/Hero";
import Philosophy from "@/components/sections/product/mobile/Philosophy";
import Products from "@/components/sections/product/mobile/Products";

export default function ProductMobile() {
  return(
    <div className="bg-(--mltBlack)">
      <Hero/>
      <Philosophy/>
      <Products/>
    </div>
  );
}
