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

export default function print() {
  return (
    <>
      <div>
        {/* Navigation-Section */}
        <header className="w-[219px] h-[870px] absolute top-[-19px] left-[-9px] rounded-tl-[20px] rounded-bl-[20px] bg-[#F5F5FB] z-10 shadow-lg shadow-gray-400/100">
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
            <div className=" h-[850px] bg-gradient-to-t from-[#CEE4FF80] to-[#E2EFFF80]">
             <div className="w-[802px] h-[45px] absolute top-[78px] left-[297px]">
                <h1 className="font-Poppins text-[30px] font-bold leading-[45px] text-[#F25822] flex justify-center">
                Print 
                </h1>
             </div>
             <form>
             <div className="w-[371px] h-[41px] absolute top-[173px] left-[345px]">
                <input className="w-[17px] h-[16px] rounded-[10px] border-none" type="checkbox"></input>
                <label className="font-Poppins font-bold text-[15px] leading-10 text-[#1B1852] ml-2 -mt-2">Print only Question Paper</label>

             </div>
             <button className="w-[48px] h-[35px] absolute top-[173px] left-[560px] rounded-[10px] bg-[#FFFFFF] border ml-5 pt-3"></button>
             <sub className="w-[2.5px] h-[9.09px] absolute top-[174px] left-[619px] text-[#111111] ml-5">i</sub>

             <div className="w-[371px] h-[41px] absolute top-[229px] left-[345px]">
                <input className="w-[17px] h-[16px] rounded-[10px] border-none" type="checkbox"></input>
                <label className="font-Poppins font-bold text-[15px] leading-10 text-[#1B1852] ml-2 -mt-2">Print Question Paper + Answer Key</label>
             </div>

             <div className="w-[371px] h-[41px] absolute top-[285px] left-[345px]">
                <input className="w-[17px] h-[16px] rounded-[10px] border-none" type="checkbox"></input>
                <label className="font-Poppins font-bold text-[15px] leading-10 text-[#1B1852] ml-2 -mt-2">Print only Answer Key</label>
             </div>
             </form>
             <div className="">
                <a className="text-white text-center w-[123px] h-8 absolute top-[729px] left-[834px] rounded-[10px] bg-[#214082]" href="./print-quizresults">Print</a>
             </div>
    
            </div>
        </main>
      </div>
    </>
  );
};
