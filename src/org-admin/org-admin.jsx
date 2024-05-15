"use client";
import React from "react";
import { Line } from "rc-progress";

// Navbar-icons
import QuizifAilogo from "../assets/Images/Org-Admin/Quizifai 1.png";
import Dashboard from "../assets/Images/Org-Admin/Dashboard.png";
import Quiz from "../assets/Images/Org-Admin/Quiz.png";
import History from "../assets/Images/Org-Admin/History.png";
import Schedule from "../assets/Images/Org-Admin/Schedule.png";
import Notification from "../assets/Images/Org-Admin/Notification.png";
import UserAdmin from "../assets/Images/Org-Admin/User-Admin.png";
import Reports from "../assets/Images/Org-Admin/Reports.png";
import Profile from "../assets/Images/Org-Admin/Profile.png";

// Main-icons
import Plus from "../assets/Images/Org-Admin/Plus.png";
import AdminUser from "../assets/Images/Org-Admin/Admin-User.png";
import Search from "../assets/Images/Org-Admin/Search.png";
import Menu from "../assets/Images/Org-Admin/Menu.png";
import Topic from "../assets/Images/Org-Admin/Topic.png";
import Timer from "../assets/Images/Org-Admin/Timer.png";
import Easy from "../assets/Images/Org-Admin/Easy.png";
import Star from "../assets/Images/Org-Admin/Star.png";
import Play from "../assets/Images/Org-Admin/Play.png";
import Pencil from "../assets/Images/Org-Admin/Pencil.png";
import ThreeStar from "../assets/Images/Org-Admin/3-Stars.png";
import Share from "../assets/Images/Org-Admin/Share.png";
import Dropdown from "../assets/Images/Org-Admin/Dropdown.png";

// Logout-icons
import LArrow from "../assets/Images/Org-Admin/Logout-arrow.png";
import LWhitebox from "../assets/Images/Org-Admin/Logout-Whitebox.png";
import LRound from "../assets/Images/Org-Admin/Logout-round.png";
import UserOutline from "../assets/Images/Org-Admin/User-Outline.png";
import User from "../assets/Images/Org-Admin/User.png";
import Scored from "../assets/Images/Org-Admin/Scored.png";
import Timespent from "../assets/Images/Org-Admin/Time-spent.png";
import Bell from "../assets/Images/Org-Admin/Bell.png";
import Todaytopic from "../assets/Images/Org-Admin/Today-Topic.png";
import Mail from "../assets/Images/Org-Admin/Mail.png";

export default function orgadmin() {
  return (
    <>
      <div className="flex">
        {/* Navigation-Section */}
        <header className="w-[219px] h-[1060px] absolute top-[-19px] left-[-9px] rounded-tl-[20px] rounded-bl-[20px] bg-[#F5F5FB] z-10 shadow-lg shadow-gray-400/60">
          <div className="h-[300px] w-[270px] absolute top-[20px] -left-[20px]">
            <img src={QuizifAilogo} alt="QuizifAi Logo Icon" />
          </div>

          {/* Navigation-icons */}
          <div className="flex w-[15px] h-[15px] absolute top-[231px] left-[51px]">
            <img src={Dashboard} alt="Dashborad img" />
            <a className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]">
              Dashboard
            </a>
          </div>

          <div className="flex w-[16px] h-[15px] absolute top-[285px] left-[51px]">
            <img src={Quiz} alt="Quiz's img" />
            <a className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#30304F]">
              Quiz
            </a>
          </div>

          <div className="flex w-[13.87px] h-[15.41px] absolute top-[338px] left-[51px]">
            <img src={History} alt="History img" />
            <a className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]">
              History
            </a>
          </div>

          <div className="flex w-[17px] h-4 absolute top-[394px] left-[51px]">
            <img src={Schedule} alt="Schedule img" />
            <a className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]">
              Schedule
            </a>
          </div>

          <div className="flex w-4 h-[15px] absolute top-[453px] left-[51px]">
            <img src={Notification} alt="Notification img" />
            <a className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]">
              Notification
            </a>
          </div>

          <div className="flex w-[28px] h-[30px] absolute top-[511px] left-[44px]">
            <img src={UserAdmin} alt="UserAdmin img" />
            <a className="ml-3 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB] text-nowrap">
              User Admin
            </a>
          </div>

          <div className="flex w-[15.41px] h-[15.41px] absolute top-[572.35px] left-[51px]">
            <img src={Reports} alt="Reports img" />
            <a className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]">
              Reports
            </a>
          </div>

          <div className="flex w-[17px] h-[17px] absolute top-[623px] left-[51px]">
            <img src={Profile} alt="Profile img" />
            <a className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]">
              Profile
            </a>
          </div>
        </header>
        {/* Main-section  */}
        <main className="mx-auto">
          <div className="w-[218px] h-[39px] absolute left-[244px] top-[52px]">
            <h1 className="leading-[30px] font-medium font-poppins text-[20px]">
              Welcome Username
            </h1>
          </div>
          <div className="w-[99px] h-[41px] absolute top-[49px] left-[637px] rounded-[10px] bg-[#FFEDCD]">
            <div className="flex">
              <img
                className="w-[25px] h-[25px] ml-2 mt-2"
                src={Plus}
                alt="Plus Icon"
              />
              <h1 className="font-Poppins font-medium text-[12px] leading-[18px] text-[#214082] ml-2 mt-3">
                Quiz
              </h1>
            </div>
          </div>

          <div className="w-[99px] h-[41px] absolute top-[51.51px] left-[748px] rounded-[10px] bg-[#FECAF9]">
            <div className="flex">
              <img
                className="w-[25px] h-[25px] ml-2 mt-2"
                src={AdminUser}
                alt="AdminUser Icon"
              />
              <h1 className="font-Poppins font-medium text-[12px] leading-[18px] text-[#214082] ml-2 mt-3">
                User
              </h1>
            </div>
          </div>

          <div className="w-[40.79px] h-[40.79px] absolute top-[51.51px] left-[874.82px] rounded-[10px] bg-[#E5E9F9]">
            <img
              className="w-[19.04px] h-[19.04px] flex justify-center items-center mx-3 my-3"
              src={Search}
              alt="searching img"
            />
          </div>

          <div className="w-[672px] h-[42px] absolute top-[123px] left-[244px] rounded-[10px] bg-[#30CDF040]">
            <h1 className="w-[560px] h-5 font-Poppins font-medium text-[15px] leading-[22.5px] text-[#214082] ml-4 mt-2 ">
              You’ve completed 10 Quiz’s this week of average score of 85%
            </h1>
          </div>

          <div className="w-[292px] h-[21px] absolute top-[187px] left-[248px]">
            <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
              Latest Quiz
            </h1>
          </div>

          {/* first-3-boxes  */}
          <div className="flex w-[697px] h-20 absolute top-[230px] left-[241px] gap-5">
            {/* first-box */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#CFFCFF]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* second-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#CFFCFF]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* Third-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#CFFCFF]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>
          </div>

          {/* second-3-boxes  */}
          <div className="flex w-[697px] h-20 absolute top-[331px] left-[241px] gap-5">
            {/* first-box */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* second-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* Third-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>
          </div>

          <div className="w-[369px] h-[21px] absolute top-[431px] left-[248px]">
            <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
              Top Scored
            </h1>
          </div>

          {/* Third-3-boxes  */}
          <div className="flex w-[697px] h-20 absolute top-[471px] left-[241px] gap-5">
            {/* first-box */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#CFFCFF]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* second-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* Third-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>
          </div>

          <div className="w-[441px] h-[21px] absolute top-[581px] left-[248px]">
            <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
              Sort By
            </h1>
          </div>

          <div className="flex">
            <div className=" rounded-lg w-[133px] flex border-solid border-gray-300 border-[2px] absolute top-[625px] left-[248px]">
              <div className=" border-grey-400 leading-[18px] text-[12px] font-medium  px-4 py-3 rounded cursor-pointer">
                Toughness
              </div>
              <img
                className="w-5 h-5 flex mt-3"
                src={Dropdown}
                alt="Dropdown Icon for Division"
              />
            </div>

            <div className=" rounded-lg w-[225px] flex border-solid border-gray-300 border-[2px] absolute top-[625px] left-[402px]">
              <div className=" border-grey-400 leading-[18px] text-[12px] font-medium  px-4 py-3 rounded cursor-pointer text-nowrap">
                Topics
              </div>
              <img
                className="w-5 h-5 flex mt-3 ml-28"
                src={Dropdown}
                alt="Dropdown Icon user name"
              />
            </div>

            <div className=" rounded-lg w-[133px] flex border-solid border-gray-300 border-[2px] absolute top-[625px] left-[639px]">
              <div className=" border-grey-400 leading-[18px] text-[12px] font-medium  px-4 py-3 rounded cursor-pointer">
                Toughness
              </div>
              <img
                className="w-5 h-5 flex mt-3"
                src={Dropdown}
                alt="Dropdown Icon for Division"
              />
            </div>
          </div>

          {/* Forth-3-boxes  */}
          <div className="flex w-[697px] h-20 absolute top-[702px] left-[241px] gap-5">
            {/* first-box */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#CFFCFF]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* second-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#CFFCFF]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* Third-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>
          </div>

          {/* Fifth-3-boxes  */}
          <div className="flex w-[697px] h-20 absolute top-[802px] left-[241px] gap-5">
            {/* first-box */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* second-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* Third-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>
          </div>

          {/* Sixth-3-boxes  */}
          <div className="flex w-[697px] h-20 absolute top-[899px] left-[241px] gap-5">
            {/* first-box */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* second-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>

            {/* Third-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
              <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
                <img src={Menu} alt="Menu Icon" />
              </div>

              <div className="flex">
                <div className="w-[9px] h-[14px] ml-[164px]">
                  <img src={Topic} alt="Topic Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Topic
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    180 mins
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                    Easy
                  </h1>
                </div>
              </div>

              <div className="flex gap-1 ml-[147px] mt-2.5">
                <img className="w-2 h-2" src={Star} alt="Star Icon" />
                <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon" />
                <img className="w-2 h-2" src={Pencil} alt="Pencil Icon" />
                <img
                  className="w-[11px] h-[7px]"
                  src={ThreeStar}
                  alt="ThreeStar Icon"
                />
                <img className="w-[7px] h-2" src={Share} alt="Share Icon" />
              </div>

              <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
                <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">
                  Phython Begnieers
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                  Description of the topic Description of the topic Description
                  of the topic Description of the topic Description
                </h1>
              </div>
            </div>
          </div>
        </main>
        {/* Logout-Section */}
        <footer className="w-[272px] h-[1040px] absolute left-[989px] rounded-tr-[20px] rounded-br-[20px] bg-[#F5F5FB] z-10 shadow-lg shadow-gray-400/60">
          <div className="w-[244.3px] h-[680.04px] absolute">
            <div className="flex">
              <div className="absolute top-[65px] w-[85px] h-4 mx-5 -mt-3">
                <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
                  Logout
                </h1>
              </div>
              <div className="absolute top-[65px] w-7 h-5 -mt-3">
                <img
                  className="h-6 w-6  absolute left-[203px] z-20 pt-2 -mt-0.5"
                  src={LArrow}
                  alt="Logout arrow icon"
                />
                <img
                  className="mt-0.5 h-6 w-6 absolute left-[199px] z-10"
                  src={LWhitebox}
                  alt="Logout round white icon"
                />
                <img
                  className="h-7 w-7  absolute left-52"
                  src={LRound}
                  alt="Logout round outline icon"
                />
              </div>
            </div>

            <div className="">
              <img
                className="w-[117.84px] h-[117.84px] absolute top-[130px] left-20"
                src={UserOutline}
                alt="Profile Useroutline Icon"
              />
              <img
                className="w-[71px] h-[71px] absolute top-[155px] left-[104px]"
                src={User}
                alt="Profile User Icon"
              />
            </div>

            <div className="w-[101px] h-6 mx-24">
              <h1 className="absolute top-[267px] flex items-center font-Poppins font-semibold text-[15px] leading-[22.5px] ">
                User Name
              </h1>
            </div>
            <div className="w-[67px] h-[15px] mx-28">
              <h1 className="absolute top-[289px] flex items-center font-Poppins font-semibold text-[12px] leading-[18px] text-[#9696BB] ">
                Profession
              </h1>
            </div>

            <div className="flex">
              <div className="w-9 h-9 absolute top-[358px] bg-[#FFFFFF] rounded-[10px] ml-7"></div>
              <img
                className="w-[22px] h-[22px] absolute top-[366px] ml-[34px]"
                src={Scored}
                alt="No of questions scored icon"
              />
            </div>
            <div className="w-[77px] h-[17px] absolute top-[355px] ml-20">
              <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
                Scored
              </h1>
            </div>
            <div className="w-[146px] h-[17px] absolute top-[380px] ml-20">
              <h1 className="font-Poppins font-medium text-[10px] leading-[15px] text-[#9696BB]">
                Intermediate
              </h1>
            </div>
            <div className="w-[87.93px] h-[4.53px] absolute top-[375.21px] ml-44">
              <Line percent={70} strokeWidth={5} strokeColor="#5E81F4" />
            </div>

            <div className="flex">
              <div className="w-9 h-9 absolute top-[426.88px] bg-[#FFFFFF] rounded-[10px] ml-7"></div>
              <img
                className="w-[22.66px] h-[21.75px] absolute top-[433.22px] ml-[34px]"
                src={Timespent}
                alt="TimeSpent for every Question Icon"
              />
            </div>
            <div className="w-[87.02px] h-[17.22px] absolute top-[424.16px] ml-20">
              <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
                Time Spent
              </h1>
            </div>
            <div className="w-[66px] h-[17px] absolute top-[449px] ml-20">
              <h1 className="font-Poppins font-medium text-[10px] leading-[15px] text-[#9696BB]">
                Advanced
              </h1>
            </div>
            <div className="w-[87.93px] h-[4.53px] absolute top-[444.1px] ml-44">
              <Line percent={70} strokeWidth={5} strokeColor="#5E81F4" />
            </div>

            <div className="flex">
              <div className="w-[138px] h-[29px] absolute top-[537px] ml-5">
                <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
                  Notification
                </h1>
              </div>

              <div className="w-[17px] h-[18px] absolute top-[534px] ml-[215px]">
                <img src={Bell} alt="Notification bell Icon" />
              </div>
            </div>

            <div className="flex">
              <div className="w-[36.26px] h-[36.26px] absolute top-[582.79px] bg-[#FEF2F3] rounded-[10px] ml-5"></div>
              <img
                className="w-[15.41px] h-[15.41px] absolute top-[593.66px] ml-[30px]"
                src={Todaytopic}
                alt="Today-topic Icon"
              />
            </div>
            <div className="w-[158.63px] h-[17.22px] absolute top-[580.07px] ml-20">
              <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
                Today - Topic
              </h1>
            </div>
            <div className="w-[152.28px] h-[17.22px] absolute top-[604.54px] ml-20">
              <h1 className="font-Poppins font-medium text-[10px] leading-[15px] text-[#9696BB]">
                23 Jan 2024, Tuesday
              </h1>
            </div>

            <div className="flex">
              <div className="w-9 h-9 absolute top-[648px] bg-[#EEF2FD] rounded-[10px] ml-5"></div>
              <img
                className="w-[17px] h-[13px] absolute top-[660px] ml-[30px]"
                src={Mail}
                alt="Mail Icon"
              />
            </div>
            <div className="w-[174px] h-[18px] absolute top-[645px] ml-20">
              <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
                Topic - Sub Topic Title
              </h1>
            </div>
            <div className="w-[135px] h-[17px] absolute top-[670px] ml-20">
              <h1 className="font-Poppins font-medium text-[10px] leading-[15px] text-[#9696BB]">
                24 Jan 2024, Wednesday
              </h1>
            </div>

            <div className="flex">
              <div className="w-9 h-9 absolute top-[706.06px] bg-[#EEF2FD] rounded-[10px] ml-5"></div>
              <img
                className="w-[17px] h-[13px] absolute top-[718px] ml-[30px]"
                src={Mail}
                alt="Mail Icon"
              />
            </div>
            <div className="w-[189px] h-[18px] absolute top-[703px] ml-20">
              <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
                Topic - Sub Topic Title
              </h1>
            </div>
            <div className="w-[145.94px] h-[17.22px] absolute top-[727.82px] ml-20">
              <h1 className="font-Poppins font-medium text-[10px] leading-[15px] text-[#9696BB]">
                24 Jan 2024, Wednesday
              </h1>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
