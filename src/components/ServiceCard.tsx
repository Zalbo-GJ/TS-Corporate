import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  leftRadius: boolean;
  title: string;
  description: string;
  link: string;
  vector: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  leftRadius,
  title,
  description,
  link,
  vector,
}) => {
  return (
    <div
      className={`flex flex-col items-center bg-blue-100 ${
        leftRadius ? "md:rounded-l-full" : "md:rounded-r-full"
      }  rounded-md sm:flex-row md:p-4 py-12 lg:py-20 sm:px-5 sm:items-center 
      
      ${leftRadius ? "sm:flex-row" : "sm:flex-row-reverse"}`}
    >
      <div className="lg:flex justify-center items-center hidden lg:w-[65rem] ">
        <Image
          src={vector}
          alt="Icon"
          className=" p-9 w-[150rem] object-cover  "
        />
      </div>
      <div className="md:px-24 px-6 sm:px-9">
        <h1 className="text-xl text-blue-600 font-bold sm:text-xl lg:text-2xl">
          {title}
        </h1>
        <p className="text-black py-4 sm:py-6 text-xs md:text-sm lg:text-base overflow-hidden ">
          {description}
        </p>
        <Link href={link}>
          <button className="bg-transparent border border-blue-600 rounded-full px-4 py-2 text-blue-600">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
