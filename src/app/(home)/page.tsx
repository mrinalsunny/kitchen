import Footer from "@/components/custom/footer";
import Hero from "@/components/custom/hero";
import ProductTab from "@/components/custom/productTab";
import VegSwitch from "@/components/custom/vegSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <VegSwitch /> */}
      <ProductTab />
    </div>
  );
}
