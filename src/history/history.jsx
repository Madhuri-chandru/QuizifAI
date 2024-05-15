"use client";
import React, { useState, useEffect } from "react";
import { Line } from "rc-progress";
import Navigation from "../navbar/navbar.jsx"
import LogoutBar from "../logoutbar/logoutbar.jsx"


// Navbar-icons
import QuizifAilogo from "../assets/Images/history/Quizifai 1.png";
import Dashboard from "../assets/Images/history/Dashboard.png";
import Quiz from "../assets/Images/history/Quiz.png";
import History from "../assets/Images/history/History.png";
import Schedule from "../assets/Images/history/Schedule.png";
import Notification from "../assets/Images/history/Notification.png";
import Profile from "../assets/Images/history/Profile.png";


// Main-icons
import Plus from "../assets/Images/history/Plus.png"
import Search from "../assets/Images/history/Search.png";
import Menu from "../assets/Images/history/Menu.png";
import Topic from "../assets/Images/history/Topic.png";
import Timer from "../assets/Images/history/Timer.png";
import Easy from "../assets/Images/history/Easy.png";
import Star from "../assets/Images/history/Star.png";
import Play from "../assets/Images/history/Play.png";
import Pencil from "../assets/Images/history/Pencil.png";
import ThreeStar from "../assets/Images/history/3-Stars.png";
import Share from "../assets/Images/history/Share.png";


// Logout-icons 
  import LArrow from "../assets/Images/history/Logout-arrow.png"
  import LWhitebox from "../assets/Images/history/Logout-Whitebox.png"
  import LRound from "../assets/Images/history/Logout-round.png"
  import UserOutline from "../assets/Images/history/User-Outline.png"
  import User from "../assets/Images/history/User.png"
  import Scored from "../assets/Images/history/Scored.png"
  import Timespent from "../assets/Images/history/Time-spent.png"
  import Bell from "../assets/Images/history/Bell.png"
  import Todaytopic from "../assets/Images/history/Today-Topic.png"
  import Mail from "../assets/Images/history/Mail.png"

  

 
export default function history() {

  const [latestResults, setLatestResults] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [weeklyQuizCount, setWeeklyQuizCount] = useState(0);
  const [averageScorePercentage, setAverageScorePercentage] = useState(0);
  const [quizData, setQuizData] = useState(null);
  const [quizScoredMoreThan98, setQuizScoredMoreThan98] = useState([]);
  const [quizScoredLessThan50, setQuizScoredLessThan50] = useState([]);
   
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(
          `https://quizifai.com:8010/history_Page?user_id=1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data");
        }
        const data = await response.json();
        setTimeData(data.time_spent);
        setLatestResults(data.latest_results);
        setWeeklyQuizCount(data.weekly_quiz_count);
        setAverageScorePercentage(data.average_score_percentage);
        setQuizData(data.quiz_completed_today);
        setQuizScoredMoreThan98(data['quiz_scored_morethan_98%']);
        setQuizScoredLessThan50(data['quiz_scored_lessthan_50%']);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  return (
    <>
         <div className="flex">
        <Navigation />
      
        {/* Main-section  */}
        <main className="mx-auto">
          <div className="w-[218px] h-[39px] absolute left-[284px] top-[52px]">
            <h1 className="leading-[30px] font-medium font-poppins text-[20px]">
              Welcome Username
            </h1>
          </div>
          <a href="/create-quiz" className="w-[99px] h-[41px] absolute top-[49px] left-[800px] rounded-[10px] bg-[#FFEDCD]">
  <div className="flex">
    <img className="w-[25px] h-[25px] ml-2 mt-2" src={Plus} alt="Plus Icon"/>
    <h1 className="font-Poppins font-medium text-[12px] leading-[18px] text-[#214082] ml-2 mt-3">Quiz</h1>
  </div>
</a>


          <div className="w-[40.79px] h-[40.79px] absolute top-[51.51px] left-[910.82px] rounded-[10px] bg-[#E5E9F9]">
          <img className="w-[19.04px] h-[19.04px] flex justify-center items-center mx-3 my-3" src={Search} alt="searching img"/>
          </div>
         
          <div className="w-[692px] absolute top-[123px] left-[284px] rounded-[10px] bg-[#30CDF040]">
  <h1 className="w-[672px] font-Poppins font-medium text-[15px] leading-[22.5px] text-[#214082] ml-4 mt-2 break-all">
    You’ve completed {weeklyQuizCount} Quiz’s this week of average score of {averageScorePercentage}%
  </h1>
</div>


        
         <div className="w-[292px] h-[21px] absolute top-[191px] left-[284px] whitespace-nowrap">
  <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
    Quizzes that you have completed today
  </h1>
</div>

{/* First 3 boxes */}
{quizData !== "no_quizzes_completed_today" ? (
  <div className="flex w-[697px] h-20 absolute top-[239px] left-[284px] gap-5">
    
    {/* First box */}
    <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
      <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
             <img src={Menu} alt="Menu Icon"/>
            </div>

           <div className="flex">
            <div className="w-[9px] h-[14px] ml-[164px]">
           <img src={Topic} alt="Topic Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">Topic</h1>
            </div>
           </div>
           
           <div className="flex">
            <div className="w-[13px] h-[13px] ml-[161px] mt-1">
           <img src={Timer} alt="Timer Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">180 mins</h1>
            </div>
           </div>

           <div className="flex">
            <div className="w-[12px] h-[7px] ml-[161px] mt-1">
           <img src={Easy} alt="Easy Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">Easy</h1>
            </div>
           </div>

           <div className="flex gap-1 ml-[147px] mt-2.5">
             <img className="w-2 h-2" src={Star} alt="Star Icon"/>
             <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
             <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
             <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
             <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
           </div>
            

           <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
              <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">Phython Begnieers</h1>
            </div> 

            <div className="w-[146px] h-[49px] ml-3 mt-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3">
                Description of the topic Description 
                of the topic Description of the topic
                Description of the topic Description 
              </h1>             
            </div>
    </div>

    {/* Second box */}
    <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
      <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
             <img src={Menu} alt="Menu Icon"/>
            </div>

           <div className="flex">
            <div className="w-[9px] h-[14px] ml-[164px]">
           <img src={Topic} alt="Topic Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">Topic</h1>
            </div>
           </div>
           
           <div className="flex">
            <div className="w-[13px] h-[13px] ml-[161px] mt-1">
           <img src={Timer} alt="Timer Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">180 mins</h1>
            </div>
           </div>

           <div className="flex">
            <div className="w-[12px] h-[7px] ml-[161px] mt-1">
           <img src={Easy} alt="Easy Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">Easy</h1>
            </div>
           </div>

           <div className="flex gap-1 ml-[147px] mt-2.5">
             <img className="w-2 h-2" src={Star} alt="Star Icon"/>
             <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
             <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
             <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
             <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
           </div>
            

           <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
              <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">Phython Begnieers</h1>
            </div> 

            <div className="w-[146px] h-[49px] ml-3 mt-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3">
                Description of the topic Description 
                of the topic Description of the topic
                Description of the topic Description 
              </h1>             
            </div>
    </div>

    {/* Third box */}
    <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
      <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
             <img src={Menu} alt="Menu Icon"/>
            </div>

           <div className="flex">
            <div className="w-[9px] h-[14px] ml-[164px]">
           <img src={Topic} alt="Topic Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">Topic</h1>
            </div>
           </div>
           
           <div className="flex">
            <div className="w-[13px] h-[13px] ml-[161px] mt-1">
           <img src={Timer} alt="Timer Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">180 mins</h1>
            </div>
           </div>

           <div className="flex">
            <div className="w-[12px] h-[7px] ml-[161px] mt-1">
           <img src={Easy} alt="Easy Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">Easy</h1>
            </div>
           </div>

           <div className="flex gap-1 ml-[147px] mt-2.5">
             <img className="w-2 h-2" src={Star} alt="Star Icon"/>
             <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
             <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
             <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
             <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
           </div>
            

           <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
              <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">Phython Begnieers</h1>
            </div> 

            <div className="w-[146px] h-[49px] ml-3 mt-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3">
                Description of the topic Description 
                of the topic Description of the topic
                Description of the topic Description 
              </h1>             
            </div>
    </div>
    </div>

 
) : (
  <div className="absolute top-[270px] left-[284px]">
  <p>No quizzes must be completed today</p>
</div>

)}



        <div className="w-[369px] h-[21px] absolute top-[348px] left-[284px]">
        <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
        Quiz’s that you have Scored above 98%
        </h1>
         </div>

         {/* Second-3-boxes  */}
         <div className="flex w-[697px] h-20 absolute top-[389px] left-[284px] gap-5">
          {/* first-box */}
          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
      <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
             <img src={Menu} alt="Menu Icon"/>
            </div>

           <div className="flex">
            <div className="w-[9px] h-[14px] ml-[164px]">
           <img src={Topic} alt="Topic Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[0]?.topic}</h1>
            </div>
           </div>
           
           <div className="flex">
            <div className="w-[13px] h-[13px] ml-[161px] mt-1">
           <img src={Timer} alt="Timer Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[0]?.quiz_duration}</h1>
            </div>
           </div>

           <div className="flex">
            <div className="w-[12px] h-[7px] ml-[161px] mt-1">
           <img src={Easy} alt="Easy Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[0]?.quiz_complexity_name}</h1>
            </div>
           </div>

           <div className="flex gap-1 ml-[147px] mt-2.5">
             <img className="w-2 h-2" src={Star} alt="Star Icon"/>
             <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
             <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
             <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
             <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
           </div>
            

           <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
              <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]"> {quizScoredMoreThan98[0]?.quiz_title}</h1>
            </div> 

            <div className="w-[146px] h-[49px] ml-3 mt-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3">
              {quizScoredMoreThan98[0]?.quiz_description}
              </h1>             
            </div>
    </div>


          {/* second-box  */}
          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
      <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
             <img src={Menu} alt="Menu Icon"/>
            </div>

           <div className="flex">
            <div className="w-[9px] h-[14px] ml-[164px]">
           <img src={Topic} alt="Topic Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[1]?.topic}</h1>
            </div>
           </div>
           
           <div className="flex">
            <div className="w-[13px] h-[13px] ml-[161px] mt-1">
           <img src={Timer} alt="Timer Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[1]?.quiz_duration}</h1>
            </div>
           </div>

           <div className="flex">
            <div className="w-[12px] h-[7px] ml-[161px] mt-1">
           <img src={Easy} alt="Easy Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[1]?.quiz_complexity_name}</h1>
            </div>
           </div>

           <div className="flex gap-1 ml-[147px] mt-2.5">
             <img className="w-2 h-2" src={Star} alt="Star Icon"/>
             <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
             <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
             <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
             <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
           </div>
            

           <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
              <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]"> {quizScoredMoreThan98[1]?.quiz_title}</h1>
            </div> 

            <div className="w-[146px] h-[49px] ml-3 mt-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3">
              {quizScoredMoreThan98[1]?.quiz_description}
              </h1>             
            </div>
            </div>
          {/* Third-box  */}
          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
      <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
             <img src={Menu} alt="Menu Icon"/>
            </div>

           <div className="flex">
            <div className="w-[9px] h-[14px] ml-[164px]">
           <img src={Topic} alt="Topic Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[2]?.topic}</h1>
            </div>
           </div>
           
           <div className="flex">
            <div className="w-[13px] h-[13px] ml-[161px] mt-1">
           <img src={Timer} alt="Timer Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[2]?.quiz_duration}</h1>
            </div>
           </div>

           <div className="flex">
            <div className="w-[12px] h-[7px] ml-[161px] mt-1">
           <img src={Easy} alt="Easy Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[2]?.quiz_complexity_name}</h1>
            </div>
           </div>

           <div className="flex gap-1 ml-[147px] mt-2.5">
             <img className="w-2 h-2" src={Star} alt="Star Icon"/>
             <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
             <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
             <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
             <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
           </div>
            

           <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
              <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]"> {quizScoredMoreThan98[3]?.quiz_title}</h1>
            </div> 

            <div className="w-[146px] h-[49px] ml-3 mt-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3">
              {quizScoredMoreThan98[3]?.quiz_description}
              </h1>             
            </div>
        </div>
        </div>

        {/* Third-3-boxes  */}
        <div className="flex w-[697px] h-20 absolute top-[486px] left-[284px] gap-5">
          {/* first-box */}
          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
      <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
             <img src={Menu} alt="Menu Icon"/>
            </div>

           <div className="flex">
            <div className="w-[9px] h-[14px] ml-[164px]">
           <img src={Topic} alt="Topic Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[3]?.topic}</h1>
            </div>
           </div>
           
           <div className="flex">
            <div className="w-[13px] h-[13px] ml-[161px] mt-1">
           <img src={Timer} alt="Timer Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[3]?.quiz_duration}</h1>
            </div>
           </div>

           <div className="flex">
            <div className="w-[12px] h-[7px] ml-[161px] mt-1">
           <img src={Easy} alt="Easy Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[3]?.quiz_complexity_name}</h1>
            </div>
           </div>

           <div className="flex gap-1 ml-[147px] mt-2.5">
             <img className="w-2 h-2" src={Star} alt="Star Icon"/>
             <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
             <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
             <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
             <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
           </div>
            

           <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
              <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]"> {quizScoredMoreThan98[3]?.quiz_title}</h1>
            </div> 

            <div className="w-[146px] h-[49px] ml-3 mt-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3">
              {quizScoredMoreThan98[3]?.quiz_description}
              </h1>             
            </div>
            </div>

          {/* second-box  */}
          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">

          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
      <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
             <img src={Menu} alt="Menu Icon"/>
            </div>

           <div className="flex">
            <div className="w-[9px] h-[14px] ml-[164px]">
           <img src={Topic} alt="Topic Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[4]?.topic}</h1>
            </div>
           </div>
           
           <div className="flex">
            <div className="w-[13px] h-[13px] ml-[161px] mt-1">
           <img src={Timer} alt="Timer Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[4]?.quiz_duration}</h1>
            </div>
           </div>

           <div className="flex">
            <div className="w-[12px] h-[7px] ml-[161px] mt-1">
           <img src={Easy} alt="Easy Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[4]?.quiz_complexity_name}</h1>
            </div>
           </div>

           <div className="flex gap-1 ml-[147px] mt-2.5">
             <img className="w-2 h-2" src={Star} alt="Star Icon"/>
             <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
             <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
             <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
             <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
           </div>
            

           <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
              <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]"> {quizScoredMoreThan98[4]?.quiz_title}</h1>
            </div> 

            <div className="w-[146px] h-[49px] ml-3 mt-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3">
              {quizScoredMoreThan98[4]?.quiz_description}
              </h1>             
            </div>
          </div>
          </div>
          {/* Third-box  */}
          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">
      <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
             <img src={Menu} alt="Menu Icon"/>
            </div>

           <div className="flex">
            <div className="w-[9px] h-[14px] ml-[164px]">
           <img src={Topic} alt="Topic Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[5]?.topic}</h1>
            </div>
           </div>
           
           <div className="flex">
            <div className="w-[13px] h-[13px] ml-[161px] mt-1">
           <img src={Timer} alt="Timer Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[5]?.quiz_duration}</h1>
            </div>
           </div>

           <div className="flex">
            <div className="w-[12px] h-[7px] ml-[161px] mt-1">
           <img src={Easy} alt="Easy Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredMoreThan98[5]?.quiz_complexity_name}</h1>
            </div>
           </div>

           <div className="flex gap-1 ml-[147px] mt-2.5">
             <img className="w-2 h-2" src={Star} alt="Star Icon"/>
             <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
             <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
             <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
             <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
           </div>
            

           <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
              <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]"> {quizScoredMoreThan98[5]?.quiz_title}</h1>
            </div> 

            <div className="w-[146px] h-[49px] ml-3 mt-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3">
              {quizScoredMoreThan98[5]?.quiz_description}
              </h1>             
            </div>
        </div>
        </div>

        <div className="w-[441px] h-[21px] absolute top-[595px] left-[284px]">
        <h1 className="font-Poppins font-medium text-[15px] leading-[22.5px]">
        Quiz’s that you scored below 50% and you can re-take
        </h1>
         </div>


         {/* Forth-3-boxes  */}
         <div className="flex w-[697px] h-20 absolute top-[639px] left-[284px] gap-5">
          {/* first-box */}
          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">

          <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
             <img src={Menu} alt="Menu Icon"/>
            </div>

           <div className="flex">
            <div className="w-[9px] h-[14px] ml-[164px]">
           <img src={Topic} alt="Topic Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredLessThan50[0]?.topic}</h1>
            </div>
           </div>
           
           <div className="flex">
            <div className="w-[13px] h-[13px] ml-[161px] mt-1">
           <img src={Timer} alt="Timer Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredLessThan50[0]?.quiz_duration}</h1>
            </div>
           </div>

           <div className="flex">
            <div className="w-[12px] h-[7px] ml-[161px] mt-1">
           <img src={Easy} alt="Easy Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredLessThan50[0]?.quiz_complexity_name}</h1>
            </div>
           </div>

           <div className="flex gap-1 ml-[147px] mt-2.5">
             <img className="w-2 h-2" src={Star} alt="Star Icon"/>
             <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
             <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
             <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
             <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
           </div>
            

           <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
              <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">{quizScoredLessThan50[0]?.quiz_title}</h1>
            </div> 

            <div className="w-[146px] h-[49px] ml-3 mt-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3">
              {quizScoredLessThan50[0]?.quiz_description}
              </h1>             
            </div>
          </div>

          {/* second-box  */}
          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">

          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">

          <div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
             <img src={Menu} alt="Menu Icon"/>
            </div>

           <div className="flex">
            <div className="w-[9px] h-[14px] ml-[164px]">
           <img src={Topic} alt="Topic Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredLessThan50[1]?.topic}</h1>
            </div>
           </div>
           
           <div className="flex">
            <div className="w-[13px] h-[13px] ml-[161px] mt-1">
           <img src={Timer} alt="Timer Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredLessThan50[1]?.quiz_duration}</h1>
            </div>
           </div>

           <div className="flex">
            <div className="w-[12px] h-[7px] ml-[161px] mt-1">
           <img src={Easy} alt="Easy Icon"/>
            </div>
           <div className="w-[38px] h-[11px] ml-auto mr-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredLessThan50[1]?.quiz_complexity_name}</h1>
            </div>
           </div>

           <div className="flex gap-1 ml-[147px] mt-2.5">
             <img className="w-2 h-2" src={Star} alt="Star Icon"/>
             <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
             <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
             <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
             <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
           </div>
            

           <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
              <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">{quizScoredLessThan50[1]?.quiz_title}</h1>
            </div> 

            <div className="w-[146px] h-[49px] ml-3 mt-1">
              <h1 className="font-Poppins font-normal text-[8px] leading-3">
              {quizScoredLessThan50[1]?.quiz_description}
              </h1>             
            </div>
          </div>
          </div>
          {/* Third-box  */}
          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">

          <div className="w-[219px] h-20 rounded-[10px] bg-[#F5F5F5]">

<div className="w-[11px] h-[11px] ml-auto mr-2 mt-1">
   <img src={Menu} alt="Menu Icon"/>
  </div>

 <div className="flex">
  <div className="w-[9px] h-[14px] ml-[164px]">
 <img src={Topic} alt="Topic Icon"/>
  </div>
 <div className="w-[38px] h-[11px] ml-auto mt-0.5 mr-1">
    <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredLessThan50[2]?.topic}</h1>
  </div>
 </div>
 
 <div className="flex">
  <div className="w-[13px] h-[13px] ml-[161px] mt-1">
 <img src={Timer} alt="Timer Icon"/>
  </div>
 <div className="w-[38px] h-[11px] ml-auto mt-1 mr-1">
    <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredLessThan50[2]?.quiz_duration}</h1>
  </div>
 </div>

 <div className="flex">
  <div className="w-[12px] h-[7px] ml-[161px] mt-1">
 <img src={Easy} alt="Easy Icon"/>
  </div>
 <div className="w-[38px] h-[11px] ml-auto mr-1">
    <h1 className="font-Poppins font-normal text-[8px] leading-3 text-[#555555]">{quizScoredLessThan50[2]?.quiz_complexity_name}</h1>
  </div>
 </div>

 <div className="flex gap-1 ml-[147px] mt-2.5">
   <img className="w-2 h-2" src={Star} alt="Star Icon"/>
   <img className="w-[6px] h-[6px]" src={Play} alt="Play Icon"/>
   <img className="w-2 h-2" src={Pencil} alt="Pencil Icon"/>
   <img className="w-[11px] h-[7px]" src={ThreeStar} alt="ThreeStar Icon"/>
   <img className="w-[7px] h-2" src={Share} alt="Share Icon"/>
 </div>
  

 <div className="w-[96.24px] h-[15.01px] ml-3 -mt-[65px]">
    <h1 className="font-Poppins font-semibold text-[10px] leading-[15px]">{quizScoredLessThan50[2]?.quiz_title}</h1>
  </div> 

  <div className="w-[146px] h-[49px] ml-3 mt-1">
    <h1 className="font-Poppins font-normal text-[8px] leading-3">
    {quizScoredLessThan50[2]?.quiz_description}
    </h1>             
  </div>
</div>
        </div>
        </div>
        </main>
         
      
        <LogoutBar />
      </div>
    </>
  );
};
