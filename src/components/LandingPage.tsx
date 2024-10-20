import Image from "next/image";
import MySvg from "../../public/images/Homepage-design.svg";
export default function LandingPage() {
  return (
    <div className="flex h-[800px] bg-white" id="home">
      <div className="mx-auto flex flex-col justify-center items-center w-1/2 ">
        <h1 className="text-blue-600 text-6xl font-bold">
          Innovating with Tradition, Committed to Excellence
        </h1>
        <p className="text-black my-24 text-sm">
          Our vision is to be a trusted leader in development, delivering
          high-quality products and services. We aim to be a reliable partner,
          valuable asset, and driving force in our industry. Guided by Gadaa
          principles, we embrace tradition, innovation, protect nature, and
          promote team growth. We prioritize community care, win-win
          partnerships, and sustainable growth.
        </p>
      </div>
      <div className="flex items-center mx-auto w-1/2">
        <Image src={MySvg} alt="Svg"></Image>
      </div>
    </div>
  );
}
