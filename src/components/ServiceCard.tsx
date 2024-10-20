import MySvg from "../../public/images/Homepage-design.svg";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  leftRadius: boolean;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  leftRadius,
  title,
  description,
  link,
}) => {
  return (
    <div
      className={`h-96 bg-blue-100 flex px-16 mb-12 items-center ${
        leftRadius ? "rounded-l-full" : "rounded-r-full"
      } ${leftRadius ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="flex justify-center items-center">
        <Image src={MySvg} alt="Icon" />
      </div>
      <div className="px-24  ">
        <h1 className="text-3xl text-blue-600 font-bold ">{title}</h1>
        <p className="text-black py-6">{description}</p>
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
