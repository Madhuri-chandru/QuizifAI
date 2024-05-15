"use client";
import React from "react";

// Navbar-icons
import QuizifAilogo from "../assets/Images/Detailed-Report/Quizifai 1.png";
import Dashboard from "../assets/Images/Detailed-Report/Dashboard.png";
import Quiz from "../assets/Images/Detailed-Report/Quiz.png";
import History from "../assets/Images/Detailed-Report/History.png";
import Schedule from "../assets/Images/Detailed-Report/Schedule.png";
import Notification from "../assets/Images/Detailed-Report/Notification.png";
import UserAdmin from "../assets/Images/Detailed-Report/User-Admin.png";
import Reports from "../assets/Images/Detailed-Report/Report.png";
import Profile from "../assets/Images/Detailed-Report/Profile.png";

// Main-Section-icons
import Download from "../assets/Images/Detailed-Report/Download.png";
import Share from "../assets/Images/Detailed-Report/Share.png";
import Dropdown from "../assets/Images/Detailed-Report/Dropdown.png";
import Toggle from "../assets/Images/Detailed-Report/Toggle.png";

export default function detailedreport() {
  return (
    <>
      <div>
        {/* Navigation-Section */}
        <header className="w-[219px] h-[890px] absolute top-[-19px] left-[-9px] rounded-tl-[20px] rounded-bl-[20px] bg-[#F5F5FB] z-10 shadow-lg shadow-gray-400/60">
          <div className="h-[300px] w-[270px] absolute top-[20px] -left-[20px]">
            <img src={QuizifAilogo} alt="QuizifAi Logo Icon" />
          </div>

          {/* Navigation-icons */}
          <div className="flex w-[15px] h-[15px] absolute top-[231px] left-[51px]">
            <img src={Dashboard} alt="Dashborad img" />
            <a
              className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Dashboard
            </a>
          </div>

          <div className="flex w-[16px] h-[15px] absolute top-[285px] left-[51px]">
            <img src={Quiz} alt="Quiz's img" />
            <a
              className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px]"
              for=""
            >
              Quiz's
            </a>
          </div>

          <div className="flex w-[13.87px] h-[15.41px] absolute top-[338px] left-[51px]">
            <img src={History} alt="History img" />
            <a
              className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              History
            </a>
          </div>

          <div className="flex w-[17px] h-4 absolute top-[394px] left-[51px]">
            <img src={Schedule} alt="Schedule img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Schedule
            </a>
          </div>

          <div className="flex w-4 h-[15px] absolute top-[453px] left-[51px]">
            <img src={Notification} alt="Notification img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Notification
            </a>
          </div>

          <div className="flex w-[28px] h-[30px] absolute top-[508px] left-[51px]">
            <img className="-ml-1" src={UserAdmin} alt="QuizAdmin img" />
            <a
              className="ml-4 mt-2 text-Poppins font-medium text-[15px] leading-[15px] text-nowrap text-[#9696BB]"
              for=""
            >
              User Admin
            </a>
          </div>

          <div className="flex w-[17px] h-[17px] absolute top-[581px] left-[51px]">
            <img src={Reports} alt="Profile img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px]"
              for=""
            >
              Reports
            </a>
          </div>

          <div className="flex w-[17px] h-[17px] absolute top-[644px] left-[51px]">
            <img src={Profile} alt="Profile img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Profile
            </a>
          </div>
        </header>

        <main className="w-mx-auto">
          <div className=" h-[870px] bg-gradient-to-t from-[#CEE4FF80] to-[#E2EFFF80]">
            <div className="flex w-[139px] h-[41px] absolute top-[59px] left-[954px] bg-[#9EF7F1] rounded-[10px]">
              <img className="w-6 h-6 mx-4 my-2" src={Download} />
              <a
                for=""
                className="font-Poppins font-semibold text-[12px] leading-[18px] text-[#214082] mt-3 mr-1"
              >
                Download
              </a>
            </div>

            <div className="flex w-[124px] h-[41px] absolute top-[59px] left-[818px] bg-[#FFEAAE] rounded-[10px]">
              <img className="w-6 h-6 mx-4 my-2" src={Share} />
              <a
                for=""
                className="font-Poppins font-semibold text-[12px] leading-[18px] text-[#214082] mt-3 mr-1"
              >
                Share
              </a>
            </div>

            <div className=" rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[124px] left-[275px]">
              <div className=" border-grey-400 font-Poppins leading-[18px] text-[12px] font-medium  px-4 py-3 rounded">
                Team
              </div>
              <img
                className="w-5 h-5 flex mt-3 ml-4 cursor-pointer"
                src={Dropdown}
                alt="Dropdown Icon for Division"
              />
            </div>

            <div className=" rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[124px] left-[440px]">
              <div className=" border-grey-400 font-Poppins leading-[18px] text-[12px] font-medium  px-4 py-3 rounded">
                groups
              </div>
              <img
                className="w-5 h-5 flex mt-3 ml-4 cursor-pointer"
                src={Dropdown}
                alt="Dropdown Icon for Division"
              />
            </div>

            <div className="w-[109px] h-[15px] absolute top-[138px] left-[584px]">
              <h1 className="font-Poppins font-medium leading-[18px] text-[12px]">
                Lorem Ipsum
              </h1>
            </div>
            <img className="w-[36px] h-[20px] absolute top-[136px] left-[681px]" src={Toggle} />

            <div className="w-[109px] h-[15px] absolute top-[138px] left-[742px]">
              <h1 className="font-Poppins font-medium leading-[18px] text-[12px]">
                Lorem Ipsum
              </h1>
            </div>
            <img className="w-[36px] h-[20px] absolute top-[136px] left-[829px]" src={Toggle} />
          </div>
          
          <div className="flex w-[821px] h-[71px] absolute top-[213px] left-[274px] rounded-[20px] bg-[#FFFFFF]">
            <div className="w-[47.53px]  h-[47.53px] rounded-[20px] bg-[#FFE0EB] mx-3 my-3">
            <h1 className="font-Poppins font-medium leading-[22.5px] text-[15px] pt-3.5 pl-3 text-nowrap">
            U N
              </h1>
            </div>

            <div className="flex">
            <h1 className="font-Poppins font-bold leading-[18px] text-[12px] text-nowrap pt-6 pl-4">
            User Name
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Division
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Lorem Ipsum
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-20">
              Lorem Ipsum
              </h1>
               
               <div className="mt-5 ml-10">
               <button className="w-[118.83px] h-[27.73px] rounded-[50px] border text-[#718EBF] border-[#718EBF]">View Details</button>

               </div>
            </div>
          </div>

          <div className="flex w-[821px] h-[71px] absolute top-[312px] left-[274px] rounded-[20px] bg-[#FFFFFF]">
            <div className="w-[47.53px]  h-[47.53px] rounded-[20px] bg-[#FFF5D9] mx-3 my-3">
            <h1 className="font-Poppins font-medium leading-[22.5px] text-[15px] pt-3.5 pl-3 text-nowrap">
            U N
              </h1>
            </div>

            <div className="flex">
            <h1 className="font-Poppins font-bold leading-[18px] text-[12px] text-nowrap pt-6 pl-4">
            User Name
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Division
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Lorem Ipsum
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-20">
              Lorem Ipsum
              </h1>
               
               <div className="mt-5 ml-10">
               <button className="w-[118.83px] h-[27.73px] rounded-[50px] border text-[#718EBF] border-[#718EBF]">View Details</button>

               </div>
            </div>

          </div>

          <div className="flex w-[821px] h-[71px] absolute top-[414px] left-[274px] rounded-[20px] bg-[#FFFFFF]">
            <div className="w-[47.53px]  h-[47.53px] rounded-[20px] bg-[#E7EDFF] mx-3 my-3">
            <h1 className="font-Poppins font-medium leading-[22.5px] text-[15px] pt-3.5 pl-3 text-nowrap">
            U N
              </h1>
            </div>

            <div className="flex">
            <h1 className="font-Poppins font-bold leading-[18px] text-[12px] text-nowrap pt-6 pl-4">
            User Name
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Division
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Lorem Ipsum
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-20">
              Lorem Ipsum
              </h1>
               
               <div className="mt-5 ml-10">
               <button className="w-[118.83px] h-[27.73px] rounded-[50px] border text-[#718EBF] border-[#718EBF]">View Details</button>

               </div>
            </div>

          </div>

          <div className="flex w-[821px] h-[71px] absolute top-[509px] left-[274px] rounded-[20px] bg-[#FFFFFF]">
            <div className="w-[47.53px]  h-[47.53px] rounded-[20px] bg-[#FFF5D9] mx-3 my-3">
            <h1 className="font-Poppins font-medium leading-[22.5px] text-[15px] pt-3.5 pl-3 text-nowrap">
            U N
              </h1>
            </div>

            <div className="flex">
            <h1 className="font-Poppins font-bold leading-[18px] text-[12px] text-nowrap pt-6 pl-4">
            User Name
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Division
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Lorem Ipsum
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-20">
              Lorem Ipsum
              </h1>
               
               <div className="mt-5 ml-10">
               <button className="w-[118.83px] h-[27.73px] rounded-[50px] border text-[#718EBF] border-[#718EBF]">View Details</button>

               </div>
            </div>

          </div>

          <div className="flex w-[821px] h-[71px] absolute top-[611px] left-[274px] rounded-[20px] bg-[#FFFFFF]">
            <div className="w-[47.53px]  h-[47.53px] rounded-[20px] bg-[#E7EDFF] mx-3 my-3">
            <h1 className="font-Poppins font-medium leading-[22.5px] text-[15px] pt-3.5 pl-3 text-nowrap">
            U N
              </h1>
            </div>

            <div className="flex">
            <h1 className="font-Poppins font-bold leading-[18px] text-[12px] text-nowrap pt-6 pl-4">
            User Name
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Division
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Lorem Ipsum
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-20">
              Lorem Ipsum
              </h1>
               
               <div className="mt-5 ml-10">
               <button className="w-[118.83px] h-[27.73px] rounded-[50px] border text-[#718EBF] border-[#718EBF]">View Details</button>

               </div>
            </div>

          </div>

          <div className="flex w-[821px] h-[71px] absolute top-[713px] left-[274px] rounded-[20px] bg-[#FFFFFF]">
            <div className="w-[47.53px]  h-[47.53px] rounded-[20px] bg-[#FFF5D9] mx-3 my-3">
            <h1 className="font-Poppins font-medium leading-[22.5px] text-[15px] pt-3.5 pl-3 text-nowrap">
            U N
              </h1>
            </div>

            <div className="flex">
            <h1 className="font-Poppins font-bold leading-[18px] text-[12px] text-nowrap pt-6 pl-4">
            User Name
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Division
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-24">
              Lorem Ipsum
              </h1>

              <h1 className="font-Poppins font-medium leading-[18px] text-[12px] text-nowrap pt-6 pl-20">
              Lorem Ipsum
              </h1>
               
               <div className="mt-5 ml-10">
               <button className="w-[118.83px] h-[27.73px] rounded-[50px] border text-[#718EBF] border-[#718EBF]">View Details</button>

               </div>
            </div>

          </div>
        </main>
      </div>
    </>
  );
};
