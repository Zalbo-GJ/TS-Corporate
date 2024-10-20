import Link from "next/link";
export default function AboutSection() {
  return (
    <div className="h-[500px] bg-white py-28 flex items-center" id="about">
      <div className="h-96 bg-blue-100 rounded-full flex px-9 items-center ">
        <div className="h-80  bg-white rounded-l-full flex justify-center items-center text-blue-600 text-4xl font-bold px-6 text-center">
          About Company
        </div>

        <p className="text-black px-16 text-sm ">
          Established in 2017, TSCORPORATE has evolved into a multifaceted
          corporation offering services across consulting, construction,
          manufacturing, agriculture, import-export, tourism, and travel.
          Founded by renowned scientist and researcher Prof. Teshome Soromessa,
          the company is dedicated to quality development endeavors. From its
          inception, TSCORPORATE has prioritized delivering high-quality
          products and services, backed by cutting-edge techniques and modern
          technology. Our commitment to excellence has earned us recognition as
          a reliable supplier of essential outputs that meet societal needs. We
          strive to be a responsible business that maximizes our impact and
          contributes to the greater good.
        </p>
        <Link href="/about">
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
