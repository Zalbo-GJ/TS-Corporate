import Image from "next/image";
import MySvg from "../../public/images/Homepage-design.svg";

export default function LandingPage() {
  return (
    <div
      className="flex flex-col h-auto bg-white md:flex-row md:h-[800px]"
      id="home"
    >
      <div className="flex flex-col justify-center items-center w-full p-4 mx-auto md:w-1/2">
        <h1 className="text-4xl font-bold text-center text-blue-600 md:text-6xl md:text-left">
          Innovating with Tradition, Committed to Excellence
        </h1>
        <p className="my-8 text-sm text-center text-black md:my-24 md:text-left lg:text-base">
          Our vision is to be a trusted leader in development, delivering
          high-quality products and services. We aim to be a reliable partner,
          valuable asset, and driving force in our industry. Guided by Gadaa
          principles, we embrace tradition, innovation, protect nature, and
          promote team growth. We prioritize community care, win-win
          partnerships, and sustainable growth.
        </p>
      </div>
      <div className="flex items-center w-full p-4 mx-auto md:w-1/2">
        <Image src={MySvg} alt="Svg" className="w-full h-auto"></Image>
      </div>
    </div>
  );
}
