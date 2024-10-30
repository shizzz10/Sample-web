import { CiTimer } from "react-icons/ci";
import { FaHome, FaSearch } from "react-icons/fa";
import { GiAmbulance } from "react-icons/gi";
import { MdOutlinePostAdd } from "react-icons/md";
import { PiRanking } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="lg:p-3 text-stone-400 lg:text-[#0e3a77] lg:m-3">
      <div className="flex gap-2 lg:gap-10 items-center">
        <div className="bg-[#0e3a77] lg:bg-transparent flex gap-10 items-center justify-between lg:relative lg:bottom-auto lg:w-auto fixed bottom-0 w-full p-2 ">
          <div className="flex flex-col items-center">
            <FaHome className="text-2xl" />
            <span className="font-medium text-xs sm:text-base">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <TbReportSearch className="text-2xl" />
            <span className="font-medium text-xs sm:text-base">Reports</span>
          </div>
          <div className="flex flex-col items-center">
            <CiTimer className="text-2xl" />
            <span className="font-medium text-xs sm:text-base">My Status </span>
          </div>
          <div className="flex flex-col items-center">
            <PiRanking className="text-2xl" />
            <span className="font-medium text-xs sm:text-base">
              Site Status{" "}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <GiAmbulance className="text-2xl" />
            <span className="font-medium text-xs sm:text-base">Emergency </span>
          </div>
        </div>

        <div className=" flex  gap-5 ml-auto lg:relative lg:bottom-0 lg:right-0 fixed bottom-20 right-1 ">
          <div className="text-2xl sm:text-4xl bg-yellow-400 p-2 rounded-md flex flex-col items-center ">
            <MdOutlinePostAdd className="text-white" />
            <span className="font-medium block text-xs text-black">
              New Report{" "}
            </span>
          </div>
          <div className="hidden-on-mobile relative  items-center justify-center flex pt-5">
            <input
              type="text"
              className="border border-[#0e3a77] rounded-full p-2 w-80 py-2"
              placeholder="Search here"
            />{" "}
            <FaSearch className="absolute right-2 top-1/2 " />
          </div>
        </div>
      </div>
      <hr className="hidden-on-mobile  border border-[#0e3a77] my-3 " />

      <div className="hidden-on-mobile mt-3">
        <button className=" px-10 py-2 bg-[#0e3a77] rounded-full text-white font-medium">
          Print
        </button>
      </div>
    </div>
  );
};

export default Footer;
