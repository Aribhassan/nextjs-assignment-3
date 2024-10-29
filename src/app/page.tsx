// import Link from "next/link";
// import Image from "next/image";
import Hero from "./component/hero/page";
import Cars from "./component/cars/page";
import Footer from "./component/footer/page"


export default function Home() {
  return (
    <div className="grid h-screen w-auto bg-white">
      <Hero/>
       <Cars/>
      <Footer />
    </div>
  );
}