// Dashboard.js
import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Navigation from "../navbar/navbar.jsx"
import LogoutBar from "../logoutbar/logoutbar.jsx"
// import LogoutBar from "./logoutbar";
// import { useRouter } from "next/router";
// import Head from "next/head";
// import Image from "next/image";
import searchIcon from "../assets/Images/images/dashboard/searchBar.png";
import arrow1 from "../assets/Images/images/dashboard/arrow1.png";
import arrow3 from "../assets/Images/images/dashboard/arrow3.png";
import moreArrow from "../assets/Images/images/dashboard/moreArrow.png";
import infoIcon from "../assets/Images/images/dashboard/infoIcon.png";
import topicIcon from "../assets/Images/images/dashboard/topicNew.png";
import timerIcon from "../assets/Images/images/dashboard/timerNew.png";
import difficultyIcon from "../assets/Images/images/dashboard/difficultyLevelNew.png";
import img1Icon from "../assets/Images/images/dashboard/img1New.png";
import img2Icon from "../assets/Images/images/dashboard/img2New.png";
import img3Icon from "../assets/Images/images/dashboard/img3New.png";
import img4Icon from "../assets/Images/images/dashboard/newImg4.png";
import img5Icon from "../assets/Images/images/dashboard/img5New.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const Superadmin = () => {
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
  const [latestResults, setLatestResults] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [weeklyQuizCount, setWeeklyQuizCount] = useState(0);
  const [averageScorePercentage, setAverageScorePercentage] = useState(0);
  const [notAttemptedQuizzes, setNotAttemptedQuizzes] = useState([]);
  const [attemptedQuizzes, setAttemptedQuizzes] = useState([]);
  const [topScoredQuizzes, setTopScoredQuizzes] = useState([]);
  // const BasicProgressBar = ({ currentValue, maxValue }) => (
  // <progress value={currentValue} max={maxValue}>{currentValue}%</progress>
  //);

  const BasicProgressBar = ({ currentValue, maxValue }) => (
    <progress value={currentValue} max={maxValue} style={{ width: "100px" }}>
      {currentValue}%
    </progress>
  );

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(
          `https://quizifai.com:8010/landing_page?user_id=1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch quiz data");
        }
        const data = await response.json();
        setTimeData(data.time_spent);
        setLatestResults(data.latest_results);
        setWeeklyQuizCount(data.weekly_quiz_count);
        setAverageScorePercentage(data.average_score_percentage);
        setNotAttemptedQuizzes(data.latest_not_attempted_quizzes);
        setAttemptedQuizzes(data.latest_attempted_quizzes);
        setTopScoredQuizzes(data.top_scored_quizzes);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  const calculateTotalMinutes = (day) => {
    return timeData
      .filter((item) => item.day_of_week.toLowerCase() === day.toLowerCase())
      .reduce(
        (total, item) => total + parseInt(item.time_spent.split(" ")[0]),
        0
      );
  };

  // Function to format time duration
  const formatTime = (minutes) => {
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      if (remainingMinutes === 0) {
        return `${hours}h`;
      } else {
        return `${hours}h ${remainingMinutes}m`;
      }
    } else {
      return `${minutes} min`;
    }
  };
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
              <span className={styles.moreButton} style={{marginLeft:"170px"}}>
                More <img src={arrow1} alt="More" width={15} height={8} />
              </span>
              <div className={styles.resultInfo}>
                <div className={styles.infoLine}>
                  <span
                    className={styles.info}
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    {latestResults[0]?.date} -
                    <span className={styles.title}>
                      {latestResults[0]?.quiz_name}
                    </span>{" "}
                    - {latestResults[0]?.quiz_category}
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      width: "130px",
                      height: "8px",
                      fontSize: "10px",
                      marginTop: "-10px",
                    }}
                  >
                    <Progress percent={latestResults[0]?.attained_percentage} />
                  </span>
                </div>
                <hr className={styles.divider} />
                <div className={styles.infoLine}>
                  <span
                    className={styles.info}
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    {latestResults[1]?.date} -
                    <span className={styles.title}>
                      {latestResults[1]?.quiz_name}
                    </span>{" "}
                    - {latestResults[1]?.quiz_category}
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      width: "130px",
                      height: "8px",
                      fontSize: "10px",
                      marginTop: "-10px",
                    }}
                  >
                    <Progress percent={latestResults[1]?.attained_percentage} />
                  </span>
                </div>
                <hr className={styles.divider} />
                <div className={styles.infoLine} style={{ fontSize: "10px" }}>
                  <span
                    className={styles.info}
                    style={{ fontSize: "10px", color: "grey" }}
                  >
                    {latestResults[2]?.date} -{" "}
                    <span className={styles.title}>
                      {latestResults[2]?.quiz_name}
                    </span>
                    - {latestResults[2]?.quiz_category}
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      width: "130px",
                      height: "8px",
                      marginTop: "-10px",
                      fontSize: "10px",
                    }}
                  >
                    <Progress percent={latestResults[2]?.attained_percentage} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.resultWrapper}>
            <div className={styles.timeSpent}>
              Time Spent on Quiz
              <span className={styles.moreButton}>
                Last week <img src={arrow3} alt="More" width={11} height={5} />
              </span>
              <div className={styles.progressBars}>
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day, index) => (
                  <div className={styles.progressBar} key={index}>
                    <div className={styles.day}>{day.substring(0, 3)}</div>
                    <div className={styles.progress}>
                      <div
                        className={styles.progressFill}
                        style={{
                          height: `${calculateTotalMinutes(day) * 2}px`,
                        }}
                      ></div>
                    </div>
                    <div className={styles.time} style={{ fontSize: "9px" }}>
                      {formatTime(calculateTotalMinutes(day))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentWrapper1}>
          <div className={styles.latestQuizHeader}>
            <p>Latest Quiz</p>

            <span className={styles.moreLink}>
              More <img src={moreArrow} alt="More" width={17} height={10} />
            </span>
          </div>
          <div className={styles.infoCards}>
            {/* Info cards content */}
            <div className={styles.card}>
              <span className={styles.title}>
                {notAttemptedQuizzes[0]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {notAttemptedQuizzes[0]?.description}
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
                    {notAttemptedQuizzes[0]?.category}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {notAttemptedQuizzes[0]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {notAttemptedQuizzes[0]?.complexity}
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
                {notAttemptedQuizzes[1]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {notAttemptedQuizzes[1]?.description}
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
                    {notAttemptedQuizzes[1]?.category}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {notAttemptedQuizzes[1]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {notAttemptedQuizzes[1]?.complexity}
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
                {notAttemptedQuizzes[2]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {notAttemptedQuizzes[2]?.description}
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
                    {notAttemptedQuizzes[2]?.category}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {notAttemptedQuizzes[2]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {notAttemptedQuizzes[2]?.complexity}
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
                {attemptedQuizzes[0]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {attemptedQuizzes[0]?.description}
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
                    {attemptedQuizzes[0]?.category}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {attemptedQuizzes[0]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {attemptedQuizzes[0]?.complexity}
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
                {attemptedQuizzes[1]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {attemptedQuizzes[1]?.description}
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
                    {attemptedQuizzes[1]?.category}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {attemptedQuizzes[1]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {attemptedQuizzes[1]?.complexity}
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
                {attemptedQuizzes[2]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {attemptedQuizzes[2]?.description}
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
                    {attemptedQuizzes[2]?.category}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {attemptedQuizzes[2]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {attemptedQuizzes[2]?.complexity}
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
            <p>Top Scored</p>
          </div>
          <div className={styles.infoCards}>
            {/* Info cards content */}
            <div className={styles.card}>
              <span className={styles.title}>
                {topScoredQuizzes[0]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {topScoredQuizzes[0]?.description}
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
                    {topScoredQuizzes[0]?.topic}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[0]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[0]?.complexity}
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
                {topScoredQuizzes[1]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {topScoredQuizzes[1]?.description}
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
                    {topScoredQuizzes[1]?.topic}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[1]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[1]?.complexity}
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
                {topScoredQuizzes[2]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {topScoredQuizzes[2]?.description}
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
                    {topScoredQuizzes[2]?.topic}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[2]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[2]?.complexity}
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
                {topScoredQuizzes[3]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {topScoredQuizzes[3]?.description}
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
                    {topScoredQuizzes[3]?.topic}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[3]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[3]?.complexity}
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
                {topScoredQuizzes[4]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {topScoredQuizzes[4]?.description}
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
                    {topScoredQuizzes[4]?.topic}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[4]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[4]?.complexity}
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
                {topScoredQuizzes[5]?.quiz_name}
              </span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  {topScoredQuizzes[5]?.description}
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
                    {topScoredQuizzes[5]?.topic}
                  </span>
                  <span className={styles.infoItem1}>
                    <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[5]?.duration}
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    {topScoredQuizzes[5]?.complexity}
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
  );
};

// function Dashboard() {
//   return (
//     <div>dashboard</div>
//   )
// }

export default Superadmin;

