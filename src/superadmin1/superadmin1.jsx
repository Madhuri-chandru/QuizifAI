// Dashboard.js
import React from "react";
import styles from "./quiz.module.css";
import Navigation from "../navbar/navbar.jsx"
import LogoutBar from "../logoutbar/logoutbar.jsx"
//import Head from "next/head";
//import { useRouter } from 'next/router';
//import img from "next/image";
import searchIcon from "../assets/Images/images/dashboard/searchBar.png";
import addQuizIcon from "../assets/Images/images/superadmin/add-quiz.png";
import arrow1 from "../assets/Images/images/dashboard/arrow1.png";
import addUserIcon from "../assets/Images/images/superadmin/add-user.png";
import switchUserIcon from "../assets/Images/images/superadmin/switch-user.png";
import infoIcon from "../assets/Images/images/dashboard/infoIcon.png";
import topicIcon from "../assets/Images/images/dashboard/topicNew.png";
import timerIcon from "../assets/Images/images/dashboard/timerNew.png";
import difficultyIcon from "../assets/Images/images/dashboard/difficultyLevelNew.png";
import img1Icon from "../assets/Images/images/dashboard/img1New.png";
import img2Icon from "../assets/Images/images/dashboard/img2New.png";
import img3Icon from "../assets/Images/images/dashboard/img3New.png";
import img4Icon from "../assets/Images/images/dashboard/newImg4.png";
import img5Icon from "../assets/Images/images/dashboard/img5New.png";
import eyeIcon from "../assets/Images/images/dashboard/eyeIcon.png"; 
import img3NewIcon from "../assets/Images/images/dashboard/img3New.png";
import ProgressBar from "@ramonak/react-progress-bar";


const Superadmin1 = () => {
  const currentValue1 = 50; 
  const maxValue1 = 100; 
  const currentValue2 = 30;
  const maxValue2 = 80; 

 
 // const BasicProgressBar = ({ currentValue, maxValue }) => (
   // <progress value={currentValue} max={maxValue}>{currentValue}%</progress>
  //);

  const BasicProgressBar = ({ currentValue, maxValue }) => (
    <progress
      value={currentValue}
      max={maxValue}
      style={{ width: "100px" }} 
    >
      {currentValue}%
    </progress>
  );
  

  return (
    <div className={styles.container}>
      {/*<Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
  </Head>*/}
      <Navigation/>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          {/* Header content */}
          <p>Welcome Username</p>
          <div className={styles.headerRight}>
          <div className={styles.iconContainer9}>
          <img
      src={addQuizIcon} 
      alt="Icon 1"
      className={styles.icon9}
      width={99} 
      height={42} 
    />
      </div>
      <div className={styles.iconContainer9}>
      <img
      src={addUserIcon} 
      alt="Icon 2"
      className={styles.icon9}
      width={99} 
      height={41}
    />
      </div>
      <div className={styles.iconContainer9}>
      <img
      src={switchUserIcon} 
      alt="Icon 3"
      className={styles.icon9}
      width={124} 
      height={43}
    />
      </div>
            <div className={styles.searchIconContainer}>
              <img
                src={searchIcon}
                alt="Search Icon"
                className={styles.searchIcon } style={{marginTop:"28px"}}
              />
            </div>
          </div>
        </div>
        <div className={styles.completionInfo}>
          You've completed 10 Quizzes this week with an average score of 85%
        </div>
       
        <div className={styles.contentWrapper1}>
          <div className={styles.latestQuizHeader}>
            <p>Latest Quiz</p>

            <span className={styles.moreLink}>
              More <img src={arrow1} alt="More" width={15} height={8} />
            </span>
          </div>
          <div className={styles.infoCards}>
            {/* Info cards content */}
            <div className={styles.card}>
              <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
              <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
              <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
              <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
              <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
              <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
            <div className={styles.card } style={{backgroundColor:"#CFFCFF"}}>
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
            <div className={styles.sortBy}>
  <p>Sort by:</p>
  <div className={styles.dropdowns}>
    <select className={styles.dropdown}>
      <option value="toughness">Toughness</option>
      {/*  options  */}
    </select>
    <select className={styles.dropdown1}>
      <option value="topic">Topic</option>
      {/* options  */}
    </select>
    <select className={styles.dropdown2}>
      <option value="toughness">Toughness</option>
      {/* options*/}
    </select>
  </div>
</div>
<div className={styles.infoCards1 } >
            {/* Info cards content */}
            <div className={styles.card} style={{backgroundColor:"#CFFCFF"}}>
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
                    <img
                      src="/images/dashboard/infoIcon.png"
                      alt="Separate Icon"
                      style={{
                        width: "10px",
                        height: "10px",
                        marginLeft: "40px",
                      }}
                    />
                  </div>
                  <span className={styles.infoItem}>
                    <img
                      src="/images/dashboard/topicNew.png"
                      alt="Topic Icon"
                    />{" "}
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                    <img src="/images/dashboard/timerNew.png" alt="Time Icon" />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src="/images/dashboard/difficultyLevelNew.png"
                      alt="Easy Icon"
                    />{" "}
                    Easy
                  </span>
                  <div className={styles.iconContainer}>
                  <img
    src={eyeIcon} 
    alt="Icon 1"
    width={13}
    height={6}
    style={{ marginLeft: "5px", marginTop: "1px" }}
  />
  <img
    src={img3NewIcon} 
    alt="Icon 3"
    width={8}
    height={8}
  />

                   
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card} style={{backgroundColor:"#CFFCFF"}}>
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
                    <img
                      src="/images/dashboard/infoIcon.png"
                      alt="Separate Icon"
                      style={{
                        width: "10px",
                        height: "10px",
                        marginLeft: "40px",
                      }}
                    />
                  </div>
                  <span className={styles.infoItem}>
                    <img
                      src="/images/dashboard/topicNew.png"
                      alt="Topic Icon"
                    />{" "}
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                    <img src="/images/dashboard/timerNew.png" alt="Time Icon" />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src="/images/dashboard/difficultyLevelNew.png"
                      alt="Easy Icon"
                    />{" "}
                    Easy
                  </span>
                  <div className={styles.iconContainer}>
                  <img
    src={eyeIcon} 
    alt="Icon 1"
    width={13}
    height={6}
    style={{ marginLeft: "5px", marginTop: "1px" }}
  />
  <img
    src={img3NewIcon} 
    alt="Icon 3"
    width={8}
    height={8}
  />

                   
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
                    <img
                      src="/images/dashboard/infoIcon.png"
                      alt="Separate Icon"
                      style={{
                        width: "10px",
                        height: "10px",
                        marginLeft: "40px",
                      }}
                    />
                  </div>
                  <span className={styles.infoItem}>
                    <img
                      src="/images/dashboard/topicNew.png"
                      alt="Topic Icon"
                    />{" "}
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                    <img src="/images/dashboard/timerNew.png" alt="Time Icon" />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src="/images/dashboard/difficultyLevelNew.png"
                      alt="Easy Icon"
                    />{" "}
                    Easy
                  </span>
                  <div className={styles.iconContainer}>
                  <img
    src={eyeIcon} 
    alt="Icon 1"
    width={13}
    height={6}
    style={{ marginLeft: "5px", marginTop: "1px" }}
  />
  <img
    src={img3NewIcon} 
    alt="Icon 3"
    width={8}
    height={8}
  />

                   
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card}>
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
            <span className={styles.title}>Python Beginners</span>
              <div className={styles.infoBox}>
                <span className={styles.description}>
                  Description of Topic Description of Topic Description of Topic
                  Description of Topic
                </span>
                <div className={styles.additionalInfo}>
                  <div className={styles.infoIcon}>
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
                    Topic
                  </span>
                  <span className={styles.infoItem1}>
                  <img
                      src={timerIcon}
                      alt="Time Icon"
                      width={10}
                      height={10}
                    />{" "}
                    180 mins
                  </span>
                  <span className={styles.infoItem2}>
                    <img
                      src={difficultyIcon}
                      alt="Easy Icon"
                      width={10}
                      height={10}
                    />{" "}
                    Easy
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
           </div>
      <LogoutBar/>
    </div>
  );
};

export default Superadmin1;
