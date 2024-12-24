import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col  p-6" id="contact">
      <div className="flex flex-col items-start space-y-2">
        <div className="text-lg font-semiBold">Contact Us</div>
        <div className="text-xs ">
          <p className="flex">
            <FaMapMarkerAlt />
            <span className="ml-2">P.O. Box 80122, Addis Ababa, Ethiopia</span>
          </p>
          <p className="flex">
            <FaPhone />
            <span className="ml-2">+251911210275 / +251911631119</span>
          </p>
          <p className="flex">
            <FaEnvelope />
            <span className="ml-2">
              <a href="mailto:teshome.soromessa@tscoporate.biz">
                teshome.soromessa@tscoporate.biz
              </a>
              ,
              <a href="mailto:teshome.soromessa@gmail.com">
                teshome.soromessa@gmail.com
              </a>
            </span>
          </p>
        </div>
      </div>

      <footer className="pt-9 flex justify-center">
        <p>
          &copy; {new Date().getFullYear()} TSCorporate. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
