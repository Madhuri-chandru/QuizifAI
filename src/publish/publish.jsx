"use client";
import React from "react";

// Navbar-icons
import QuizifAilogo from "../assets/Images/quiz-type/Quizifai 1.png";
import Dashboard from "../assets/Images/quiz-type/Dashboard.png";
import Quiz from "../assets/Images/quiz-type/Quiz.png";
import History from "../assets/Images/quiz-type/History.png";
import Schedule from "../assets/Images/quiz-type/Schedule.png";
import Notification from "../assets/Images/quiz-type/Notification.png";
import QuizAdmin from "../assets/Images/quiz-type/Quiz-admin.png";
import Profile from "../assets/Images/quiz-type/Profile.png";

// Main-Section-icons
import Globe from "../assets/Images/publish/Globe.png";
import SpecificTeam from "../assets/Images/publish/Specific-Team.png";
import Dropdown from "../assets/Images/publish/Dropdown.png";
import InThisTeam from "../assets/Images/publish/In-this-team.png";
import Select from "../assets/Images/publish/Select.png";

 

export default function publish() {
  return (
    <>
      <div>
        {/* Navigation-Section */}
        <header className="w-[219px] h-[820px] absolute top-[-19px] left-[-9px] rounded-tl-[20px] rounded-bl-[20px] bg-[#F5F5FB] z-10 shadow-lg shadow-gray-400/60 ">
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
              className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Quiz
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

          <div className="flex w-[25.46px] h-[27.87px] absolute top-[508px] left-[51px]">
            <img className="-ml-2.5" src={QuizAdmin} alt="QuizAdmin img" />
            <a
              className="ml-4 text-Poppins font-medium text-[15px] leading-[15px] text-nowrap text-[#30304F]"
              for=""
            >
              Quiz Admin
            </a>
          </div>

          <div className="flex w-[17px] h-[17px] absolute top-[581px] left-[51px]">
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
        <div className="w-[802px] h-[45px] absolute top-[78px] left-[297px]">
                <h1 className="font-Poppins text-[30px] font-bold leading-[45px] text-[#F25822] flex justify-center">
                Publish to 
                </h1>
             </div>
             <div className="absolute top-[192px] left-[348px] ">
               <img className="w-9 h-9" src={Globe} alt="Globe icon"/> 
             </div> 

             <div className="absolute top-[185px] left-[392px]">
                <button className="w-[129px] h-[43px] rounded-[10px] bg-[#04919D] text-white">Whole org</button>
             </div>

             <div className="absolute top-[191px] left-[542px] ">
               <img className="w-10 h-10" src={SpecificTeam} alt="SpecificTeam icon"/> 
             </div>

             <div className="w-[125px] h-[22px] absolute top-[196px] left-[592px]">
             <h1 className="font-Poppins text-[15px] font-medium leading-[22.5px] text-[#214082]">Specific Team</h1>
             </div> 

             <div className=" rounded-lg w-[135px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[185px] left-[715px]">
              <div className=" border-grey-400 leading-[18px] text-[12px] font-medium  px-4 py-3 rounded">
                Team
              </div>
              <img
                className="w-5 h-5 flex mt-3 ml-8 cursor-pointer"
                src={Dropdown}
                alt="Dropdown Icon for Division"
              />
            </div>

            <div className="absolute top-[183px] left-[870px] ">
               <img className="w-[43px] h-[43px]" src={InThisTeam} alt="SpecificTeam icon"/> 
             </div>

             <div className="w-[125px] h-[22px] absolute top-[196px] left-[917px]">
             <h1 className="font-Poppins text-[15px] font-medium leading-[22.5px] text-[#214082]">In this Team</h1>
             </div> 

             <div className=" rounded-lg w-[135px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[185px] left-[1029px]">
              <div className=" border-grey-400 leading-[18px] text-[12px] font-medium  px-4 py-3 rounded">
                Groups
              </div>
              <img
                className="w-5 h-5 flex mt-3 ml-6 cursor-pointer"
                src={Dropdown}
                alt="Dropdown Icon for Division"
              />
            </div>

            <div className="absolute top-[278px] left-[602px] ">
               <img className="w-[30px] h-[30px]" src={Select} alt="SpecificTeam icon"/> 
             </div>

             <div className="w-[125px] h-[22px] absolute top-[279px] left-[640px]">
             <h1 className="font-Poppins text-[15px] font-medium leading-[22.5px] text-[#214082]">Select </h1>
             </div> 

             <div className=" rounded-lg w-[135px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[271px] left-[715px]">
              <div className=" border-grey-400 leading-[18px] text-[12px] font-medium  px-4 py-3 rounded">
              Individual 
              </div>
              <img
                className="w-5 h-5 flex mt-3 ml-2 cursor-pointer"
                src={Dropdown}
                alt="Dropdown Icon for Division"
              />
            </div>

            <div className="absolute top-[452px] left-[709px]">
  <a href="/quizAccess">
    <button className="w-[123px] h-[32px] rounded-[10px] bg-[#214082] text-white">Publish</button>
  </a>
</div>

        </main>
      </div>
    </>
  );
};
