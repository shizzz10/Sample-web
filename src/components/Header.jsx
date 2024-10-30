import { AiFillNotification } from "react-icons/ai";

const Header = () => {
  return (
    <div className="mainDiv bg-gradient-to-b from-[#0e3a77] to-[#3071c6] p-2 lg:p-3 text-white flex justify-between rounded-br-[2rem] rounded-bl-[2rem]">
      <div className="flex">
        <div className="flex gap-1 lg:gap-3 shrink-0">
          <div className="img">
            <img
              className="h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full object-cover object-top"
              src="profile.jpeg"
              alt="profile-Img"
            />
          </div>
          <div className="flex flex-col ">
            <p className="flex-shrink-0  font-medium text-xs lg:text-sm">
              Log out
            </p>
            <p className="invisible lg:visible flex-shrink-0  text-xs lg:text-sm">
              Welcome!
            </p>
            <div className="flex gap-3 text-sm items-center">
              <p className="text-xs lg:text-sm">Syed Aamir Mukhtar</p>
              <div className="flex items-center">
                <span className="bg-red-600 h-5 w-5 text-xs lg:text-sm rounded-full flex justify-center items-center">
                  1
                </span>
                <AiFillNotification className="text-lg lg:text-2xl" />
              </div>
            </div>
            <div className="hidden-on-mobile  bottom-3 mt-4 p-2 font-semibold text-lg lg:text-2xl">
              <h3>Open Reports</h3>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-base sm:text-xl lg:text-3xl font-semibold whitespace-nowrap">
          HSE Reporting App
        </h2>
      </div>

      <div className="flex flex-col items-end">
        <img src="logo.png" className="w-16 lg:w-20 " alt="" />
        <p className="text-xs lg:text-sm">
          License expires in | <span className="font-semibold">Extend now</span>
        </p>
        <p className="invisible lg:visible text-xs lg:text-sm">
          Sunday 6th October
        </p>
      </div>
    </div>
  );
};

export default Header;
