"use client";
import React , { useState, useEffect } from "react";
// import Image from "next/image";
import { Line } from "rc-progress";
import Calendar from "react-calendar";
import Navigation from "../navbar/navbar.jsx"
import LogoutBar from "../logoutbar/logoutbar.jsx"


// Navbar-icons
import QuizifAilogo from "../assets/Images/images/home/Quizifai3.png";
import Dashboard from "../../src/assets/Images/Schedule/Dashboard.png";
import Quiz from "../../src/assets/Images/Schedule/Quiz.png";
import History from "../../src/assets/Images/Schedule/History.png";
import ScheduleImg from "../../src/assets/Images/Schedule/Schedule.png";
import Notification from "../../src/assets/Images/Schedule/Notification.png";
import Profile from "../../src/assets/Images/Schedule/Profile.png";

// Main-icons
import Plus from "../../src/assets/Images/Schedule/Plus.png";
import Search from "../../src/assets/Images/Schedule/Search.png";
import Menu from "../../src/assets/Images/Schedule/Menu.png";
import Topic from "../../src/assets/Images/Schedule/Topic.png";
import Timer from "../../src/assets/Images/Schedule/Timer.png";
import Easy from "../../src/assets/Images/Schedule/Easy.png";
import Star from "../../src/assets/Images/Schedule/Star.png";
import Play from "../../src/assets/Images/Schedule/Play.png";
import Pencil from "../../src/assets/Images/Schedule/Pencil.png";
import ThreeStar from "../../src/assets/Images/Schedule/3-Stars.png";
import Share from "../../src/assets/Images/Schedule/Share.png";

// Logout-icons
import LArrow from "../../src/assets/Images/Schedule/Logout-arrow.png";
import LWhitebox from "../../src/assets/Images/Schedule/Logout-Whitebox.png";
import LRound from "../../src/assets/Images/Schedule/Logout-round.png";
import UserOutline from "../../src/assets/Images/Schedule/User-Outline.png";
import User from "../../src/assets/Images/Schedule/User.png";
import Scored from "../../src/assets/Images/Schedule/Scored.png";
import Timespent from "../../src/assets/Images/Schedule/Time-spent.png";
import Bell from "../../src/assets/Images/Schedule/Bell.png";
import Todaytopic from "../../src/assets/Images/Schedule/Today-Topic.png";
import Mail from "../../src/assets/Images/Schedule/Mail.png";

function Schedule() {
  // Calender-function
  const [date, setDate] = useState(new Date());
  const [quizAssignedData, setQuizAssignedData] = useState([]);

  const onChange = (date) => {
    setDate(date);
  };

  
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(`https://quizifai.com:8010/notification_page?user_id=1`);
        if (!response.ok) {
          throw new Error('Failed to fetch quiz data');
        }
        const data = await response.json();
      
        setQuizAssignedData(data.quiz_assigned_to_you);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        {/* Navigation-Section */}
        <Navigation />
        {/* Main-section  */}
        <main className="mx-auto">
          <div className="w-[218px] h-[39px] absolute left-[284px] top-[52px]">
            <h1 className="leading-[30px] font-medium font-poppins text-[20px]">
              Welcome Username
            </h1>
          </div>
          <div className="w-[99px] h-[41px] absolute top-[49px] left-[800px] rounded-[10px] bg-[#FFEDCD]">
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

          <div className="w-[40.79px] h-[40.79px] absolute top-[51.51px] left-[910.82px] rounded-[10px] bg-[#E5E9F9]">
            <img
              className="w-[19.04px] h-[19.04px] flex justify-center items-center mx-3 my-3"
              src={Search}
              alt="searching image"
            />
          </div>

          <div className="w-[672px] h-[42px] absolute top-[123px] left-[284px] rounded-[10px] bg-[#30CDF040]">
            <h1 className="w-[560px] h-5 font-Poppins font-medium text-[15px] leading-[22.5px] text-[#214082] ml-4 mt-2 ">
              You’ve completed 10 Quiz’s this week of average score of 85%
            </h1>
          </div>

          <div className="w-[403px] h-[70px] absolute top-[198px] left-[284px]">
            <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
              Quiz Schedule on
            </h1>
            <h1 className="font-Poppins font-light text-[12px] leading-[18px]">
              Click on the date to select your Schedule
            </h1>
          </div>

          <div className="w-[263.93px] h-[191.78px] absolute top-[263px] left-[320px]">
            <Calendar onChange={onChange} value={date} />
          </div>
          <div className="w-[263.93px] h-[191.78px] absolute top-[263px] left-[620px]">
            <Calendar onChange={onChange} value={date} />
          </div>

          <div className="w-[369px] h-[21px] absolute top-[480px] left-[284px]">
            <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
              Quiz’s Assigned to you for today
            </h1>
          </div>

          {/* First-3-boxes  */}
          <div className="flex w-[697px] h-20 absolute top-[532px] left-[284px] gap-5">
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
                  {quizAssignedData[0]?.topic}
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                  {quizAssignedData[0]?.quiz_duration}
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                  {quizAssignedData[0]?.quiz_complexity}
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
                {quizAssignedData[1]?.title}
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                {quizAssignedData[1]?.quiz_description}
                </h1>
              </div>
            </div>

            {/* second-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
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
                  {quizAssignedData[1]?.topic}
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                  {quizAssignedData[1]?.quiz_duration}
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                  {quizAssignedData[1]?.quiz_complexity}
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
                {quizAssignedData[1]?.title}
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                {quizAssignedData[1]?.quiz_description}
                </h1>
              </div>
            </div>
            </div>

            {/* Third-box  */}
            <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
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
                  {quizAssignedData[2]?.topic}
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                  {quizAssignedData[2]?.quiz_duration}
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                  {quizAssignedData[2]?.quiz_complexity}
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
                {quizAssignedData[2]?.title}
                </h1>
              </div>

              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                {quizAssignedData[2]?.quiz_description}
                </h1>
              </div>
            </div>
            </div>
          </div>

          {/* Second-3-boxes  */}
          <div className="flex w-[697px] h-20 absolute top-[631px] left-[284px] gap-5">
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
                  {quizAssignedData[3]?.topic}
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[13px] h-[13px] ml-[161px] mt-1">
                  <img src={Timer} alt="Timer Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                  {quizAssignedData[3]?.quiz_duration}
                  </h1>
                </div>
              </div>

              <div className="flex">
                <div className="w-[12px] h-[7px] ml-[161px] mt-1">
                  <img src={Easy} alt="Easy Icon" />
                </div>
                <div className="w-[38px] h-[11px] ml-auto mr-1">
                  <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">
                  {quizAssignedData[3]?.quiz_complexity}
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
  <h1 className="font-Poppins font-semibold text-[10px] leading-[15px] whitespace-nowrap">
    {quizAssignedData[3]?.title}
  </h1>
</div>



              <div className="w-[146px] h-[49px] ml-3 mt-1">
                <h1 className="font-Poppins font-normal text-[8px] leading-3">
                {quizAssignedData[3]?.quiz_description}
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
        <LogoutBar />
      </div>
    </>
  );
}

export default Schedule;
