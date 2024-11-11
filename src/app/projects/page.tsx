// ProjectList.jsx
import React from "react";

const ProjectList = () => {
  return (
    <div className="min-h-screen p-5 md:p-24  bg-white text-black">
      <h1 className="text-3xl font-bold py-5 ">Projects</h1>
      <ol className="list-decimal list-inside text-md md:text-lg">
        <li className="font-bold py-5">
          Geroge Shoe Ethiopia PLC is a Gold Rated Company: Air Quality and
          Audit Assessment
        </li>
        <div className="flex justify-around  py-5">
          <img
            src="images/pr1.png"
            alt="image 1"
            className="w-[40%] md:w-[30%] "
          />
          <img
            src="images/pr2.png"
            alt="image 1"
            className="w-[40%] md:w-[30%] "
          />
        </div>
        <div className="flex justify-around  py-5">
          <img
            src="images/pr3.png"
            alt="image 1"
            className="w-[40%] md:w-[30%] "
          />
          <img
            src="images/pr4.png"
            alt="image 1"
            className="w-[40%] md:w-[30%] "
          />
        </div>
        <li className="font-bold py-5">
          Ethiopia’s First Biennial Update Report (FBUR) to UNFCCC
        </li>
        <div className="flex justify-around  py-5">
          <img
            src="images/pr5.png"
            alt="image 1"
            className="w-[80%] md:w-[50%]"
          />
        </div>
      </ol>
    </div>
  );
};

export default ProjectList;
