import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="bg-white py-10 flex flex-col items-center" id="about">
      <div className="bg-blue-100 rounded-lg lg:rounded-full flex flex-col items-center px-6 py-8 md:flex-row   md:h-96 sm:px-9">
        <div className="bg-white rounded-full flex justify-center items-center text-blue-600 md:text-xl font-bold px-4 py-4 text-center md:rounded-l-full md:rounded-r-none md:h-full md:p-12 sm:text-4xl sm:px-6">
          About Company
        </div>
        <div className="flex flex-col space-y-6 mt-6 p-4 sm:mt-5  sm:space-y-10">
          <p className="text-black text-xs text-center sm:text-left md:text-sm">
            Established in 2017, TSCORPORATE has evolved into a multifaceted
            corporation offering services across consulting, construction,
            manufacturing, agriculture, import-export, tourism, and travel.
            Founded by renowned scientist and researcher Prof. Teshome
            Soromessa, the company is dedicated to quality development
            endeavors. From its inception, TSCORPORATE has prioritized
            delivering high-quality products and services, backed by
            cutting-edge techniques and modern technology. Our commitment to
            excellence has earned us recognition as a reliable supplier of
            essential outputs that meet societal needs. We strive to be a
            responsible business that maximizes our impact and contributes to
            the greater good.
          </p>
          <Link href="/about">
            <button className="bg-transparent border border-blue-600 rounded-full px-4 py-2 text-blue-600">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
