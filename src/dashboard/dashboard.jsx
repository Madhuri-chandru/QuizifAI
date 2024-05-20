// Dashboard.js
import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Navigation from "../navbar/navbar.jsx";
import LogoutBar from "../logoutbar/logoutbar.jsx";
import attempts from "../assets/Images/images/contact/QuizAttempts.png";
import { Line } from "rc-progress";
// import LogoutBar from "./logoutbar";
// import { useRouter } from "next/router";
// import Head from "next/head";
// import Image from "next/image";
import searchIcon from "../../src/assets/Images/images/dashboard/searchBar.png";
import arrow1 from "../../src/assets/Images/images/dashboard/arrow1.png";
import arrow3 from "../../src/assets/Images/images/dashboard/arrow3.png";
import moreArrow from "../../src/assets/Images/images/dashboard/moreArrow.png";
import infoIcon from "../../src/assets/Images/images/dashboard/infoIcon.png";
import topicIcon from "../../src/assets/Images/images/dashboard/topicNew.png";
import timerIcon from "../../src/assets/Images/images/dashboard/timerNew.png";
import difficultyIcon from "../../src/assets/Images/images/dashboard/difficultyLevelNew.png";
import img1Icon from "../../src/assets/Images/images/dashboard/img1New.png";
import img2Icon from "../../src/assets/Images/images/dashboard/img2New.png";
import img3Icon from "../../src/assets/Images/images/dashboard/img3New.png";
import img4Icon from "../../src/assets/Images/images/dashboard/newImg4.png";
import img5Icon from "../../src/assets/Images/images/dashboard/img5New.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const Dashboard = () => {
  const getFormattedDate = () => {
    const currentDate = new Date();
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "long",
    };
    return currentDate.toLocaleDateString("en-IN", options);
  };

  const currentValue1 = 50;
  const maxValue1 = 100;
  const currentValue2 = 30;
  const maxValue2 = 80;
  // const [timespent, setTimespent] = useState([]);
  const [latestResult, setLatestResult] = useState([]);
  // const [grade, setGrade] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [weeklyQuizCount, setWeeklyQuizCount] = useState(0);
  const [averageScorePercentage, setAverageScorePercentage] = useState(0);

  // const [notAttemptedQuizzes, setNotAttemptedQuizzes] = useState([]);
  const [latestquizzes, setLatestquizzes] = useState([]);
  // const [attemptedQuizzes, setAttemptedQuizzes] = useState([]);
  const [popularquizzes, setPopularquizzes] = useState([]);
  // const [topScoredQuizzes, setTopScoredQuizzes] = useState([]);
  // const BasicProgressBar = ({ currentValue, maxValue }) => (
  // <progress value={currentValue} max={maxValue}>{currentValue}%</progress>
  //);

  // const BasicProgressBar = ({ currentValue, maxValue }) => (
  //   <progress value={currentValue} max={maxValue} style={{ width: "100px" }}>
  //     {currentValue}%
  //   </progress>
  // );

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(
          `https://quizifai.com:8010/latest_quizes?user_id=1`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: 1,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data");
        }
        const data = await response.json();
        console.log("data - ", data);
        setTimeData(data.timespent);
        // setTimespent(data.cal_date);
        setLatestResult(data.latest_result);
        // setGrade(data.quiz_grade);

        setWeeklyQuizCount(data.weekly_quiz_count);
        setAverageScorePercentage(data.average_score_percentage);

        setLatestquizzes(data.latest_quizzes);
        // setAttemptedQuizzes(data.latest_attempted_quizzes);
        // setTopScoredQuizzes(data.top_scored_quizzes);
        setPopularquizzes(data.popular_quizzes);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  // const calculateTotalMinutes = (day) => {
  //   return timeData
  //     .filter((item) => item.day_of_week.toLowerCase() === day.toLowerCase())
  //     .reduce(
  //       (total, item) => total + parseInt(item.time_spent.split(" ")[0]),
  //       0
  //     );
  // };

  // Function to format time duration
  // const formatTime = (minutes) => {
  //   if (minutes >= 60) {
  //     const hours = Math.floor(minutes / 60);
  //     const remainingMinutes = minutes % 60;
  //     if (remainingMinutes === 0) {
  //       return `${hours}h`;
  //     } else {
  //       return `${hours}h ${remainingMinutes}m`;
  //     }
  //   } else {
  //     return `${minutes} min`;
  //   }
  // };
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return "${hours}h ${remainingMinutes}m";
  };

  function getColor(grade) {
    if (grade === "A") {
      return "#4CDD64";
    } else if (grade === "B") {
      return "#F6970D";
    } else if (grade === "C") {
      return "#F5E23F";
    } else {
      return "#F34747";
    }
  }

  function getColorPercentage(percentData) {
    if (percentData <= 60) {
      return "#F34747"; //Red color
    } else if (percentData > 60 && percentData < 80) {
      return "#F5E23F"; //Yellow
    } else if (percentData > 81 && percentData < 90) {
      return "#F6970D"; //Orange
    } else {
      return "#4CDD64"; //Green Color
    }
  }
  const textColorClass = getColor(latestResult[0]?.quiz_grade);
  const textColorClass1 = getColor(latestResult[1]?.quiz_grade);
  const textColorClass2 = getColor(latestResult[2]?.quiz_grade);
  const textColorClass3 = getColor(latestResult[3]?.quiz_grade);
  console.log("percentage - ", latestResult);
  return (
    <div className={styles.container}>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <Navigation />
      <div className={styles.mainContent}>
        <div className={styles.header}>
          {/* Header content */}
          <p>Welcome Username</p>
          <div className={styles.headerRight}>
            <div>{getFormattedDate()}</div>
            <div className={styles.searchIconContainer}>
              <img
                src={searchIcon}
                alt="Search Icon"
                className={styles.searchIcon}
              />
            </div>
          </div>
        </div>
        <div className={styles.completionInfo}>
          You've completed {weeklyQuizCount} Quizzes this week with an average
          score of {averageScorePercentage}%
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.resultWrapper}>
            <div className={styles.latestResult}>
              Latest Result
              {/* <span className={styles.moreButton} style={{marginLeft:"170px"}}>
                More <img src={arrow1} alt="More" width={15} height={8} />
              </span> */}
              <div className={styles.resultInfo}>
                <div className={styles.infoLine}>
                  <span
                    className={styles.info}
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    {latestResult[0]?.attempt_date}
                    <span className={styles.titlename}>
                      {latestResult[0]?.quiz_name}
                    </span>{" "}
                    {/* - {latestResults[0]?.quiz_category} */}
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      width: "120px",
                      height: "8px",
                      fontSize: "8px",
                      marginTop: "10px",
                      marginRight: "10px",
                    }}
                  >
                    <Line
                      percent={latestResult[0]?.quiz_percentage}
                      strokeWidth={4}
                      strokeColor={getColorPercentage(
                        latestResult[0]?.quiz_percentage
                      )}
                    />
                    {/* <Progress percent={latestResults[0]?.attained_percentage} /> */}
                  </span>
                  <span
                    className={`text-[10px] pt-1 pr-3`}
                    style={{ color: textColorClass }}
                  >
                    {latestResult[0]?.quiz_percentage}%
                  </span>
                </div>
                <hr className={styles.divider} />
                <div className={styles.infoLine}>
                  <span
                    className={styles.info}
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    {latestResult[1]?.attempt_date}
                    <span className={styles.titlename}>
                      {latestResult[1]?.quiz_name}
                    </span>{" "}
                    {/* - {latestResults[1]?.quiz_category} */}
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      width: "120px",
                      height: "8px",
                      fontSize: "8px",
                      marginTop: "10px",
                      marginRight: "28px",
                    }}
                  >
                    <Line
                      percent={latestResult[1]?.quiz_percentage}
                      strokeWidth={4}
                      strokeColor={getColorPercentage(
                        latestResult[1]?.quiz_percentage
                      )}
                    />

                    {/* <Progress percent={latestResults[1]?.attained_percentage} /> */}
                  </span>
                  <span
                    className={`text-[10px] relative top-1 right-[20px]`}
                    style={{ color: textColorClass1 }}
                  >
                    {latestResult[1]?.quiz_percentage}%
                  </span>
                </div>
                <hr className={styles.divider} />
                <div className={styles.infoLine} style={{ fontSize: "10px" }}>
                  <span
                    className={styles.info}
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    {latestResult[2]?.attempt_date}{" "}
                    <span className={styles.titlename}>
                      {latestResult[2]?.quiz_name}
                    </span>
                    {/* - {latestResults[2]?.quiz_category} */}
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      width: "120px",
                      height: "8px",
                      fontSize: "8px",
                      marginTop: "10px",
                      marginRight: "28px",
                    }}
                  >
                    <Line
                      percent={latestResult[2]?.quiz_percentage}
                      strokeWidth={4}
                      strokeColor={getColorPercentage(
                        latestResult[2]?.quiz_percentage
                      )}
                    />

                    {/* <Progress percent={latestResults[2]?.attained_percentage} /> */}
                  </span>
                  <span
                    className={`text-[10px] relative top-1 right-[20px]`}
                    style={{ color: textColorClass2 }}
                  >
                    {latestResult[2]?.quiz_percentage}%
                  </span>
                </div>
                <hr className={styles.divider} />
                <div className={styles.infoLine} style={{ fontSize: "10px" }}>
                  <span
                    className={styles.info}
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    {latestResult[3]?.attempt_date}{" "}
                    <span className={styles.titlename}>
                      {latestResult[3]?.quiz_name}
                    </span>
                    {/* - {latestResults[2]?.quiz_category} */}
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      width: "120px",
                      height: "8px",
                      fontSize: "8px",
                      marginTop: "10px",
                      marginRight: "28px",
                    }}
                  >
                    <Line
                      percent={latestResult[3]?.quiz_percentage}
                      strokeWidth={4}
                      strokeColor={getColorPercentage(
                        latestResult[3]?.quiz_percentage
                      )}
                    />
                    {/* <Progress percent={latestResults[2]?.attained_percentage} /> */}
                  </span>
                  <span
                    className={`text-[10px] relative top-1 right-[20px]`}
                    style={{ color: textColorClass3 }}
                  >
                    {latestResult[3]?.quiz_percentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.resultWrapper}>
            <div className={styles.timeSpent}>
              Time Spent (Last 7 Days)
              <span className={styles.moreButton}>
                {/* <img src={arrow3} alt="More" width={11} height={5} /> */}
              </span>
              <div className={styles.progressBars}>
                {timeData?.map((item, index) => (
                  <div className={styles.progressBar} key={index}>
                    <div className={styles.day}>{item.cal_date}</div>
                    <div className={styles.progress}>
                      <div
                        className={styles.progressFill}
                        style={{
                          height: "${item.timespent * 2}px",
                        }}
                      ></div>
                    </div>
                    <div className={styles.time} style={{ fontSize: "9px" }}>
                      {formatTime(item.timespent)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentWrapper1}>
          <div className={styles.latestQuizHeader}>
            <p>Latest Quizzes</p>

            <span className={styles.moreLink}>
              More <img src={moreArrow} alt="More" width={17} height={10} />
            </span>
          </div>
          <div className={styles.infoCards}>
            {/* Info cards content */}
            <div className={styles.card}>
              <span className="px-[40px] pr-[163px] pb-[3px] rounded-t-lg underline">
                {latestquizzes[0]?.quiz_name}
              </span>

              <div className={styles.infoBox}>
                <span className="h-[10px] w-[30px] text-[8px] ">
                  {latestquizzes[0]?.quiz_description}
                </span>

                <div className="pl-[20px] pr-[10px] w-[121.5px] mt-[30px] relative -top-[14px] -left-[11px] border border-current py-[4.5px]">
                  {latestquizzes[0]?.category}
                </div>
                {/* <p className="relative left-[98px] -top-[20px] ">|</p> */}
                <span className="px-[53.5px] w-[90px] mt-[-23px] text-nowrap relative -top-[30.5px] border border-current py-[4.8px] left-[110px]">
                  {latestquizzes[0]?.sub_category}
                </span>

                <div className="pl-[20px] pr-[10px] w-[121.5px] mt-[30px] relative -top-[15px] -left-[11px] border border-current py-[5px]">
                  {latestquizzes[0]?.category}
                </div>
                {/* <p className="relative left-[98px] -top-[20px] ">|</p> */}
                <span className="px-[52.9px] w-[90px] mt-[-23px] text-nowrap relative -top-[32px] border border-current py-[5px] left-[110px]">
                  {latestquizzes[0]?.sub_category}
                </span>

                <div className={styles.additionalInfo}>
                  <div
                    className={styles.infoIcon}
                    style={{ marginTop: "20px" }}
                  >
                    {/* <img
                      src={infoIcon}
                      alt="Separate Icon"
                      width={10}
                      height={10}
                      style={{ marginLeft: "40px" }}
                    /> */}
                  </div>
                  {/* <div className="pt-1">
                    Attempts
                  </div> */}

                  <div className="">
                    <div className="flex pl-[5px] pt-[5px] gap-[5px] h-[20px] w-[105px] border border-current relative -left-[6px] -top-[93px]">
                      {/* <img
                        className="h-[15px] w-[13px] pl-[2px] pt-[1px] mr-[3px]"
                        src={attempts}
                        alt="Attempts Icon"
                        width={10}
                        height={10}
                      /> */}
                      <p>{latestquizzes[0]?.quiz_attempts}</p>
                    </div>
                  </div>

                  <span className="flex pl-[5px] pt-[4px]  -mt-[93.5px] gap-[5px] h-[20px] w-[105px] border border-current relative -left-[6px] -top-[0.5px]">
                    {/* <img className="pl-[2px] pt-[2px] pb-[1px] mr-[3px]"

                  <span className="flex -mt-[93.5px] gap-[5px] h-[20px] w-[106px] border border-current relative -left-[7px]">
                    <img
                      className="pl-[2px] pt-[2px] pb-[1px] mr-[3px]"

                      src={topicIcon}
                      alt="Topic Icon"
                      width={10}
                      height={10}
                    />{" "} */}
                    {latestquizzes[0]?.category}
                  </span>

                  <span className="flex pl-[5px] pt-[4px]  gap-[5px] h-[20px] w-[105px] border border-current relative -top-[1px] -left-[6px]">
                    {/* <img 

                  <span className="flex mt-[1px] gap-[5px] h-[18px] w-[106px] border border-current relative -left-[7px]">
                    <img

                      className="-pl-2 -mr-[2px] pt-[2px]"
                      src={timerIcon}
                      alt="Time Icon"
                      width={15}
                      height={15}
                    />{" "} */}
                    {latestquizzes[0]?.quiz_duration}
                  </span>
                  <span className="flex pl-[5px] pt-[3px] gap-[5px] h-[20px] w-[105px] border border-current relative -left-[6px] -top-[1.5px]">
                    {/* <img
                      className="pl-[2px] pt-[2px] pb-[2px] pr-[3px]"
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={18}
                      height={8}
                    />{" "} */}
                    {latestquizzes[0]?.complexity}
                  </span>
                  <div className={styles.iconContainer}>
                    {/* <img src={img1Icon} alt="Icon 1" width={8} height={8} /> */}
                    {/* <img
                      className="ml-[15px]"
                      src={img2Icon}
                      alt="Icon 2"
                      width={6}
                      height={6}
                      style={{ marginTop: "1px" }}
                    />
                    <img
                      className="ml-[15px]"
                      src={img3Icon}
                      alt="Icon 3"
                      width={8}
                      height={8}
                    /> */}

                    <div className="border border-current pt-[4px] mb-[2px] px-[19.3px] relative -left-[6px] -top-[7px] py-[5px]">
                      <span className="pl-[13px] font-semibold">Play</span>
                      <span className="pl-[20px] font-semibold">Edit</span>

                      <div className="border border-current pt-[4px] mb-[2px] px-[20px] relative -left-[7.5px] -top-[4.5px] py-[4px]">
                        <span className="pl-[13px] font-semibold">Play</span>
                        <span className="pl-[20px] font-semibold">Edit</span>
                      </div>
                      {/* <img src={img4Icon} alt="Icon 4" width={11} height={7} /> */}
                      {/* <img src={img5Icon} alt="Icon 5" width={7} height={8} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.title}>
                  {latestquizzes[1]?.quiz_name}
                </span>
                <div className={styles.infoBox}>
                  <span className={styles.description}>
                    {latestquizzes[1]?.quiz_description}
                  </span>
                  <div className="pl-[20px] pr-[10px] w-[121.5px] mt-[30px] relative -top-[14px] -left-[11px] border border-current py-[4.5px]">
                    {latestquizzes[0]?.category}
                  </div>
                  {/* <p className="relative left-[98px] -top-[20px] ">|</p> */}
                  <span className="px-[53.5px] w-[90px] mt-[-23px] text-nowrap relative -top-[30.5px] border border-current py-[4.8px] left-[110px]">
                    {latestquizzes[0]?.sub_category}
                  </span>
                  <div className={styles.additionalInfo}>
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "20px" }}
                    >
                      {/* <img
                      src={infoIcon}
                      alt="Separate Icon"
                      width={10}
                      height={10}
                      style={{ marginLeft: "40px" }}
                    /> */}
                    </div>
                    <div className="flex pl-[5px] pt-[5px] gap-[5px] h-[20px] w-[105px] border border-current relative -left-[6px] -top-[93px]">
                      {/* <img
                        className="h-[15px] w-[13px] pl-[2px] pt-[1px] mr-[3px]"
                        src={attempts}
                        alt="Attempts Icon"
                        width={10}
                        height={10}
                      /> */}
                      <p>{latestquizzes[1]?.quiz_attempts}</p>
                    </div>
                    <span className="flex pl-[5px] pt-[4px]  -mt-[93.5px] gap-[5px] h-[20px] w-[105px] border border-current relative -left-[6px] -top-[0.5px]">
                      {/* <img
                      src={topicIcon}
                      alt="Topic Icon"
                      width={10}
                      height={10}
                    />{" "} */}
                      {latestquizzes[1]?.category}
                    </span>
                    <span className="flex pl-[5px] pt-[4px]  gap-[5px] h-[20px] w-[105px] border border-current relative -top-[1px] -left-[6px]">
                      {/* <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "} */}
                      {latestquizzes[1]?.quiz_duration}
                    </span>
                    <span className="flex pl-[5px] pt-[3px] gap-[5px] h-[20px] w-[105px] border border-current relative -left-[6px] -top-[1.5px]">
                      {/* <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "} */}
                      {latestquizzes[1]?.complexity}
                    </span>
                    <div className={styles.iconContainer}>
                      {/* <img src={img1Icon} alt="Icon 1" width={8} height={8} /> */}
                      {/* <img
                      src={img2Icon}
                      alt="Icon 2"
                      width={6}
                      height={6}
                      style={{ marginTop: "1px" }}
                    /> */}
                      <div className="border border-current pt-[4px] mb-[2px] px-[19.3px] relative -left-[6px] -top-[7px] py-[5px]">
                        <span className="pl-[13px] font-semibold">Play</span>
                        <span className="pl-[20px] font-semibold">Edit</span>
                      </div>
                      {/* <img src={img3Icon} alt="Icon 3" width={8} height={8} /> */}
                      {/* <img src={img4Icon} alt="Icon 4" width={11} height={7} /> */}
                      {/* <img src={img5Icon} alt="Icon 5" width={7} height={8} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.title}>
                  {latestquizzes[2]?.quiz_name}
                </span>
                <div className={styles.infoBox}>
                  <span className={styles.description}>
                    {latestquizzes[2]?.quiz_description}
                  </span>
                  <div className={styles.additionalInfo}>
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "20px" }}
                    >
                      <img
                        src={infoIcon}
                        alt="Separate Icon"
                        width={10}
                        height={10}
                        style={{ marginLeft: "40px" }}
                      />
                    </div>
                    <span className={styles.infoItem}>
                      <img
                        src={topicIcon}
                        alt="Topic Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[2]?.category}
                    </span>
                    <span className={styles.infoItem1}>
                      <img
                        src={timerIcon}
                        alt="Time Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[2]?.quiz_duration}
                    </span>
                    <span className={styles.infoItem2}>
                      <img
                        src={difficultyIcon}
                        alt="Easy Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[2]?.complexity}
                    </span>
                    <div className={styles.iconContainer}>
                      <img src={img1Icon} alt="Icon 1" width={8} height={8} />
                      <img
                        src={img2Icon}
                        alt="Icon 2"
                        width={6}
                        height={6}
                        style={{ marginTop: "1px" }}
                      />
                      <img src={img3Icon} alt="Icon 3" width={8} height={8} />
                      <img src={img4Icon} alt="Icon 4" width={11} height={7} />
                      <img src={img5Icon} alt="Icon 5" width={7} height={8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.title}>
                  {latestquizzes[3]?.quiz_name}
                </span>
                <div className={styles.infoBox}>
                  <span className={styles.description}>
                    {latestquizzes[3]?.quiz_description}
                  </span>
                  <div className={styles.additionalInfo}>
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "10px" }}
                    >
                      <img
                        src={infoIcon}
                        alt="Separate Icon"
                        width={10}
                        height={10}
                        style={{ marginLeft: "40px" }}
                      />
                    </div>
                    <span className={styles.infoItem}>
                      <img
                        src={topicIcon}
                        alt="Topic Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[3]?.category}
                    </span>
                    <span className={styles.infoItem1}>
                      <img
                        src={timerIcon}
                        alt="Time Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[3]?.quiz_duration}
                    </span>
                    <span className={styles.infoItem2}>
                      <img
                        src={difficultyIcon}
                        alt="Easy Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[3]?.complexity}
                    </span>
                    <div className={styles.iconContainer}>
                      <img src={img1Icon} alt="Icon 1" width={8} height={8} />
                      <img
                        src={img2Icon}
                        alt="Icon 2"
                        width={6}
                        height={6}
                        style={{ marginTop: "1px" }}
                      />
                      <img src={img3Icon} alt="Icon 3" width={8} height={8} />
                      <img src={img4Icon} alt="Icon 4" width={11} height={7} />
                      <img src={img5Icon} alt="Icon 5" width={7} height={8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.title}>
                  {latestquizzes[4]?.quiz_name}
                </span>
                <div className={styles.infoBox}>
                  <span className={styles.description}>
                    {latestquizzes[4]?.quiz_description}
                  </span>
                  <div className={styles.additionalInfo}>
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "10px" }}
                    >
                      <img
                        src={infoIcon}
                        alt="Separate Icon"
                        width={10}
                        height={10}
                        style={{ marginLeft: "40px" }}
                      />
                    </div>
                    <span className={styles.infoItem}>
                      <img
                        src={topicIcon}
                        alt="Topic Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[4]?.category}
                    </span>
                    <span className={styles.infoItem1}>
                      <img
                        src={timerIcon}
                        alt="Time Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[4]?.quiz_duration}
                    </span>
                    <span className={styles.infoItem2}>
                      <img
                        src={difficultyIcon}
                        alt="Easy Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[4]?.complexity}
                    </span>
                    <div className={styles.iconContainer}>
                      <img src={img1Icon} alt="Icon 1" width={8} height={8} />
                      <img
                        src={img2Icon}
                        alt="Icon 2"
                        width={6}
                        height={6}
                        style={{ marginTop: "1px" }}
                      />
                      <img src={img3Icon} alt="Icon 3" width={8} height={8} />
                      <img src={img4Icon} alt="Icon 4" width={11} height={7} />
                      <img src={img5Icon} alt="Icon 5" width={7} height={8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.title}>
                  {latestquizzes[5]?.quiz_name}
                </span>
                <div className={styles.infoBox}>
                  <span className={styles.description}>
                    {latestquizzes[5]?.quiz_description}
                  </span>
                  <div className={styles.additionalInfo}>
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "10px" }}
                    >
                      <img
                        src={infoIcon}
                        alt="Separate Icon"
                        width={10}
                        height={10}
                        style={{ marginLeft: "40px" }}
                      />
                    </div>
                    <span className={styles.infoItem}>
                      <img
                        src={topicIcon}
                        alt="Topic Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[5]?.category}
                    </span>
                    <span className={styles.infoItem1}>
                      <img
                        src={timerIcon}
                        alt="Time Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[5]?.quiz_duration}
                    </span>
                    <span className={styles.infoItem2}>
                      <img
                        src={difficultyIcon}
                        alt="Easy Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {latestquizzes[5]?.complexity}
                    </span>
                    <div className={styles.iconContainer}>
                      <img src={img1Icon} alt="Icon 1" width={8} height={8} />
                      <img
                        src={img2Icon}
                        alt="Icon 2"
                        width={6}
                        height={6}
                        style={{ marginTop: "1px" }}
                      />
                      <img src={img3Icon} alt="Icon 3" width={8} height={8} />
                      <img src={img4Icon} alt="Icon 4" width={11} height={7} />
                      <img src={img5Icon} alt="Icon 5" width={7} height={8} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.topScoredHeader}>
              <p>Most Popular</p>
            </div>
            <div className={styles.infoCards}>
              {/* Info cards content */}
              <div className={styles.card}>
                <span className={styles.title}>
                  {popularquizzes[0]?.quiz_name}
                </span>
                <div className={styles.infoBox}>
                  <span className={styles.description}>
                    {popularquizzes[0]?.quiz_description}
                  </span>
                  <div className={styles.additionalInfo}>
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "10px" }}
                    >
                      <img
                        src={infoIcon}
                        alt="Separate Icon"
                        width={10}
                        height={10}
                        style={{ marginLeft: "40px" }}
                      />
                    </div>
                    <span className={styles.infoItem}>
                      <img
                        src={topicIcon}
                        alt="Topic Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[0]?.category}
                    </span>
                    <span className={styles.infoItem1}>
                      <img
                        src={timerIcon}
                        alt="Time Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[0]?.quiz_duration}
                    </span>
                    <span className={styles.infoItem2}>
                      <img
                        src={difficultyIcon}
                        alt="Easy Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[0]?.complexity}
                    </span>
                    <div className={styles.iconContainer}>
                      <img src={img1Icon} alt="Icon 1" width={8} height={8} />
                      <img
                        src={img2Icon}
                        alt="Icon 2"
                        width={6}
                        height={6}
                        style={{ marginTop: "1px" }}
                      />
                      <img src={img3Icon} alt="Icon 3" width={8} height={8} />
                      <img src={img4Icon} alt="Icon 4" width={11} height={7} />
                      <img src={img5Icon} alt="Icon 5" width={7} height={8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.title}>
                  {popularquizzes[1]?.quiz_name}
                </span>
                <div className={styles.infoBox}>
                  <span className={styles.description}>
                    {popularquizzes[1]?.quiz_description}
                  </span>
                  <div className={styles.additionalInfo}>
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "10px" }}
                    >
                      <img
                        src={infoIcon}
                        alt="Separate Icon"
                        width={10}
                        height={10}
                        style={{ marginLeft: "40px" }}
                      />
                    </div>
                    <span className={styles.infoItem}>
                      <img
                        src={topicIcon}
                        alt="Topic Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[1]?.category}
                    </span>
                    <span className={styles.infoItem1}>
                      <img
                        src={timerIcon}
                        alt="Time Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[1]?.quiz_duration}
                    </span>
                    <span className={styles.infoItem2}>
                      <img
                        src={difficultyIcon}
                        alt="Easy Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[1]?.complexity}
                    </span>
                    <div className={styles.iconContainer}>
                      <img src={img1Icon} alt="Icon 1" width={8} height={8} />
                      <img
                        src={img2Icon}
                        alt="Icon 2"
                        width={6}
                        height={6}
                        style={{ marginTop: "1px" }}
                      />
                      <img src={img3Icon} alt="Icon 3" width={8} height={8} />
                      <img src={img4Icon} alt="Icon 4" width={11} height={7} />
                      <img src={img5Icon} alt="Icon 5" width={7} height={8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.title}>
                  {popularquizzes[2]?.quiz_name}
                </span>
                <div className={styles.infoBox}>
                  <span className={styles.description}>
                    {popularquizzes[2]?.quiz_description}
                  </span>
                  <div className={styles.additionalInfo}>
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "10px" }}
                    >
                      <img
                        src={infoIcon}
                        alt="Separate Icon"
                        width={10}
                        height={10}
                        style={{ marginLeft: "40px" }}
                      />
                    </div>
                    <span className={styles.infoItem}>
                      <img
                        src={topicIcon}
                        alt="Topic Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[2]?.category}
                    </span>
                    <span className={styles.infoItem1}>
                      <img
                        src={timerIcon}
                        alt="Time Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[2]?.quiz_duration}
                    </span>
                    <span className={styles.infoItem2}>
                      <img
                        src={difficultyIcon}
                        alt="Easy Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[2]?.complexity}
                    </span>
                    <div className={styles.iconContainer}>
                      <img src={img1Icon} alt="Icon 1" width={8} height={8} />
                      <img
                        src={img2Icon}
                        alt="Icon 2"
                        width={6}
                        height={6}
                        style={{ marginTop: "1px" }}
                      />
                      <img src={img3Icon} alt="Icon 3" width={8} height={8} />
                      <img src={img4Icon} alt="Icon 4" width={11} height={7} />
                      <img src={img5Icon} alt="Icon 5" width={7} height={8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.title}>
                  {popularquizzes[3]?.quiz_name}
                </span>
                <div className={styles.infoBox}>
                  <span className={styles.description}>
                    {popularquizzes[3]?.quiz_description}
                  </span>
                  <div className={styles.additionalInfo}>
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "10px" }}
                    >
                      <img
                        src={infoIcon}
                        alt="Separate Icon"
                        width={10}
                        height={10}
                        style={{ marginLeft: "40px" }}
                      />
                    </div>
                    <span className={styles.infoItem}>
                      <img
                        src={topicIcon}
                        alt="Topic Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[3]?.category}
                    </span>
                    <span className={styles.infoItem1}>
                      <img
                        src={timerIcon}
                        alt="Time Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[3]?.quiz_duration}
                    </span>
                    <span className={styles.infoItem2}>
                      <img
                        src={difficultyIcon}
                        alt="Easy Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[3]?.complexity}
                    </span>
                    <div className={styles.iconContainer}>
                      <img src={img1Icon} alt="Icon 1" width={8} height={8} />
                      <img
                        src={img2Icon}
                        alt="Icon 2"
                        width={6}
                        height={6}
                        style={{ marginTop: "1px" }}
                      />
                      <img src={img3Icon} alt="Icon 3" width={8} height={8} />
                      <img src={img4Icon} alt="Icon 4" width={11} height={7} />
                      <img src={img5Icon} alt="Icon 5" width={7} height={8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.title}>
                  {popularquizzes[4]?.quiz_name}
                </span>
                <div className={styles.infoBox}>
                  <span className={styles.description}>
                    {popularquizzes[4]?.quiz_description}
                  </span>
                  <div className={styles.additionalInfo}>
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "10px" }}
                    >
                      <img
                        src={infoIcon}
                        alt="Separate Icon"
                        width={10}
                        height={10}
                        style={{ marginLeft: "40px" }}
                      />
                    </div>
                    <span className={styles.infoItem}>
                      <img
                        src={topicIcon}
                        alt="Topic Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[4]?.complexity}
                    </span>
                    <span className={styles.infoItem1}>
                      <img
                        src={timerIcon}
                        alt="Time Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[4]?.quiz_duration}
                    </span>
                    <span className={styles.infoItem2}>
                      <img
                        src={difficultyIcon}
                        alt="Easy Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[4]?.complexity}
                    </span>
                    <div className={styles.iconContainer}>
                      <img src={img1Icon} alt="Icon 1" width={8} height={8} />
                      <img
                        src={img2Icon}
                        alt="Icon 2"
                        width={6}
                        height={6}
                        style={{ marginTop: "1px" }}
                      />
                      <img src={img3Icon} alt="Icon 3" width={8} height={8} />
                      <img src={img4Icon} alt="Icon 4" width={11} height={7} />
                      <img src={img5Icon} alt="Icon 5" width={7} height={8} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <span className={styles.title}>
                  {popularquizzes[5]?.quiz_name}
                </span>
                <div className={styles.infoBox}>
                  <span className={styles.quiz_description}>
                    {popularquizzes[5]?.description}
                  </span>
                  <div className={styles.additionalInfo}>
                    <div
                      className={styles.infoIcon}
                      style={{ marginTop: "10px" }}
                    >
                      <img
                        src={infoIcon}
                        alt="Separate Icon"
                        width={10}
                        height={10}
                        style={{ marginLeft: "40px" }}
                      />
                    </div>
                    <span className={styles.infoItem}>
                      <img
                        src={topicIcon}
                        alt="Topic Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[5]?.category}
                    </span>
                    <span className={styles.infoItem1}>
                      <img
                        src={timerIcon}
                        alt="Time Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[5]?.quiz_duration}
                    </span>
                    <span className={styles.infoItem2}>
                      <img
                        src={difficultyIcon}
                        alt="Easy Icon"
                        width={10}
                        height={10}
                      />{" "}
                      {popularquizzes[5]?.complexity}
                    </span>
                    <div className={styles.iconContainer}>
                      <img src={img1Icon} alt="Icon 1" width={8} height={8} />
                      <img
                        src={img2Icon}
                        alt="Icon 2"
                        width={6}
                        height={6}
                        style={{ marginTop: "1px" }}
                      />
                      <img src={img3Icon} alt="Icon 3" width={8} height={8} />
                      <img src={img4Icon} alt="Icon 4" width={11} height={7} />
                      <img src={img5Icon} alt="Icon 5" width={7} height={8} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LogoutBar />
      </div>
    </div>
  );
};

export default Dashboard;
