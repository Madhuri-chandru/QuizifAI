// Dashboard.js
import React , { useState, useEffect } from "react";
import styles from "./notification.module.css";
import Navigation from "../navbar/navbar.jsx"
import LogoutBar from "../logoutbar/logoutbar.jsx"
//import { useRouter } from 'next/router';
//import Head from "next/head";
//import img from "next/image";
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
import addQuizIcon from "../assets/Images/images/superadmin/add-quiz.png";
import ProgressBar from "@ramonak/react-progress-bar";

const Notification = () => {
  const currentValue1 = 50; 
  const maxValue1 = 100; 
  const currentValue2 = 30;
  const maxValue2 = 80; 
  const [latestResults, setLatestResults] = useState([]);
  const [timeData, setTimeData] = useState([]);
  const [weeklyQuizCount, setWeeklyQuizCount] = useState(0);
  const [averageScorePercentage, setAverageScorePercentage] = useState(0);
  const [quizData, setQuizData] = useState(null);
  const [quizAssignedData, setQuizAssignedData] = useState([]);
  const [uniqueAssignedNames, setUniqueAssignedNames] = useState([]);
  const [selectedName, setSelectedName] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [uniqueAssignedGroups, setUniqueAssignedGroups] = useState([]);
  const [quizAssignedByYou, setQuizAssignedByYou] = useState([]);
 
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(`https://quizifai.com:8010/notification_page?user_id=1`);
        if (!response.ok) {
          throw new Error('Failed to fetch quiz data');
        }
        const data = await response.json();
        
        setWeeklyQuizCount(data.weekly_quiz_count);
        setAverageScorePercentage(data.average_score_percentage);
        setQuizData(data.quiz_must_complete_today);
        setQuizAssignedData(data.quiz_assigned_to_you);
        setUniqueAssignedNames(data.unique_assigned_names_dropdown);
        setUniqueAssignedGroups(data.unique_assigned_groups_dropdown);
        setQuizAssignedByYou(data.quiz_assigned_by_you);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuizData();
  }, []);


 

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
       {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <Navigation/>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          {/* Header content */}
          <p>Welcome Username</p>
          <div className={styles.headerRight}>
          <div className={styles.createQuiz}>
          <a href="/create-quiz" className={styles.iconContainer9}>
  <img
    src={addQuizIcon} 
    alt="Icon 1"
    className={styles.icon9}
    width={99} 
    height={42} 
  />
</a>
                  </div>
            
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
        You've completed  {weeklyQuizCount} Quizzes this week with an average score of {averageScorePercentage}%
        </div>
       
        <div className={styles.contentWrapper1}>
      <div className={styles.latestQuizHeader}>
        <p>Quizzes that must be completed today</p>
      </div>
      {quizData !== "no_quizzes_must_be_completed_today" ? (
        <div className={styles.infoCards}>
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
      ) : (
        <p style={{ marginLeft: "60px" }}>No quizzes must be completed today</p>
      )}

        

          <div className={styles.topScoredHeader} style={{marginTop:"20px"}}>

            <p>Quizzes Assigned to you by Username</p>
          </div>
          <div className={styles.infoCards}>
            
            {/* Info cards content */}
            <div className={styles.card}>
          <span className={styles.title}>{quizAssignedData[0]?.title}</span>
          <div className={styles.infoBox}>
            <span className={styles.description}>{quizAssignedData[0]?.quiz_description}</span>
            <div className={styles.additionalInfo}>
              <div className={styles.infoIcon} style={{marginTop:"20px"}}>
                <img src={infoIcon} alt="Separate Icon" width={10} height={10} style={{ marginLeft: "40px" }} />
              </div>
              <span className={styles.infoItem}>
                <img src={topicIcon} alt="Topic Icon" width={10} height={10} /> {quizAssignedData[0]?.topic}
              </span>
              <span className={styles.infoItem1}>
                <img src={timerIcon} alt="Time Icon" width={10} height={10} />{quizAssignedData[0]?.quiz_duration}
              </span>
              <span className={styles.infoItem2}>
                <img src={difficultyIcon} alt="Easy Icon" width={10} height={10} /> {quizAssignedData[0]?.quiz_complexity}
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
          <span className={styles.title}>{quizAssignedData[1]?.title}</span>
          <div className={styles.infoBox}>
            <span className={styles.description}>{quizAssignedData[1]?.quiz_description}</span>
            <div className={styles.additionalInfo}>
              <div className={styles.infoIcon} style={{marginTop:"20px"}}>
                <img src={infoIcon} alt="Separate Icon" width={10} height={10} style={{ marginLeft: "40px" }} />
              </div>
              <span className={styles.infoItem}>
                <img src={topicIcon} alt="Topic Icon" width={10} height={10} /> {quizAssignedData[1]?.topic}
              </span>
              <span className={styles.infoItem1}>
                <img src={timerIcon} alt="Time Icon" width={10} height={10} />  {quizAssignedData[1]?.quiz_duration}
              </span>
              <span className={styles.infoItem2}>
                <img src={difficultyIcon} alt="Easy Icon" width={10} height={10} />  {quizAssignedData[1]?.quiz_complexity}
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
          <span className={styles.title}>{quizAssignedData[2]?.title}</span>
          <div className={styles.infoBox}>
            <span className={styles.description}>{quizAssignedData[2]?.quiz_description}</span>
            <div className={styles.additionalInfo}>
              <div className={styles.infoIcon} style={{marginTop:"20px"}}>
                <img src={infoIcon} alt="Separate Icon" width={10} height={10} style={{ marginLeft: "40px" }} />
              </div>
              <span className={styles.infoItem}>
                <img src={topicIcon} alt="Topic Icon" width={10} height={10} />  {quizAssignedData[2]?.topic}
              </span>
              <span className={styles.infoItem1}>
                <img src={timerIcon} alt="Time Icon" width={10} height={10} />{quizAssignedData[2]?.quiz_duration}
              </span>
              <span className={styles.infoItem2}>
                <img src={difficultyIcon} alt="Easy Icon" width={10} height={10} /> {quizAssignedData[2]?.quiz_complexity}
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
  <p>Quizzes Assigned by you to </p>
  <div className={styles.dropdowns}>
  <select
            id="assignedName"
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
          >
            <option value="">Select Assigned Name</option>
            {uniqueAssignedNames.map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
          <select
            id="assignedGroup"
            className={styles.dropdown1}
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
          >
            <option value="">Select Assigned Group</option>
            {uniqueAssignedGroups.map((group, index) => (
              <option key={index} value={group}>{group ? group : "None"}</option>
            ))}
          </select>
   
  </div>
</div>
<div className={styles.infoCards1 } >
            {/* Info cards content */}
           
            <div>
        {quizAssignedByYou.length > 0 && (
          
          <div>
       
          {quizAssignedByYou[0].name === selectedName && (selectedGroup === '' || quizAssignedByYou[0].group_name === selectedGroup) && (
          <div className={styles.card}>
            <span className={styles.title}>{quizAssignedByYou[0].title}</span>
            <div className={styles.infoBox}>
              <span className={styles.description}>{quizAssignedByYou[0].quiz_description}</span>
              <div className={styles.additionalInfo}>
                <div className={styles.infoIcon}style={{marginTop:"20px"}}>
                  <img src={infoIcon} alt="Separate Icon" width={10} height={10} style={{ marginLeft: "40px" }} />
                </div>
                <span className={styles.infoItem}>
                  <img src={topicIcon} alt="Topic Icon" width={10} height={10} /> {quizAssignedByYou[0].topic}
                </span>
                <span className={styles.infoItem1}>
                  <img src={timerIcon} alt="Time Icon" width={10} height={10} /> {quizAssignedByYou[0].quiz_duration}
                </span>
                <span className={styles.infoItem2}>
                  <img src={difficultyIcon} alt="Easy Icon" width={10} height={10} /> {quizAssignedByYou[0].quiz_complexity}
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
      )}
    </div>
  )}

        {quizAssignedByYou.length > 1 && (
           <div>
       
           {quizAssignedByYou[1].name === selectedName && (selectedGroup === '' || quizAssignedByYou[1].group_name === selectedGroup) && (
          <div className={styles.card}>
            <span className={styles.title}>{quizAssignedByYou[1].title}</span>
            <div className={styles.infoBox}>
              <span className={styles.description}>{quizAssignedByYou[1].quiz_description}</span>
              <div className={styles.additionalInfo}>
                <div className={styles.infoIcon}style={{marginTop:"20px"}}>
                  <img src={infoIcon} alt="Separate Icon" width={10} height={10} style={{ marginLeft: "40px" }} />
                </div>
                <span className={styles.infoItem}>
                  <img src={topicIcon} alt="Topic Icon" width={10} height={10} /> {quizAssignedByYou[1].topic}
                </span>
                <span className={styles.infoItem1}>
                  <img src={timerIcon} alt="Time Icon" width={10} height={10} /> {quizAssignedByYou[1].quiz_duration}
                </span>
                <span className={styles.infoItem2}>
                  <img src={difficultyIcon} alt="Easy Icon" width={10} height={10} /> {quizAssignedByYou[1].quiz_complexity}
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
      )}
    </div>
  )}
        {quizAssignedByYou.length > 2 && (
           <div>
       
           {quizAssignedByYou[2].name === selectedName && (selectedGroup === '' || quizAssignedByYou[2].group_name === selectedGroup) && (
          <div className={styles.card}>
            <span className={styles.title}>{quizAssignedByYou[2].title}</span>
            <div className={styles.infoBox}>
              <span className={styles.description}>{quizAssignedByYou[2].quiz_description}</span>
              <div className={styles.additionalInfo}>
                <div className={styles.infoIcon} style={{marginTop:"20px"}}>
                  <img src={infoIcon} alt="Separate Icon" width={10} height={10} style={{ marginLeft: "40px" }} />
                </div>
                <span className={styles.infoItem}>
                  <img src={topicIcon} alt="Topic Icon" width={10} height={10} /> {quizAssignedByYou[2].topic}
                </span>
                <span className={styles.infoItem1}>
                  <img src={timerIcon} alt="Time Icon" width={10} height={10} /> {quizAssignedByYou[2].quiz_duration}
                </span>
                <span className={styles.infoItem2}>
                  <img src={difficultyIcon} alt="Easy Icon" width={10} height={10} /> {quizAssignedByYou[2].quiz_complexity}
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
      )}
    </div>
  )}
        {quizAssignedByYou.length > 3 && (
           <div>
       
           {quizAssignedByYou[3].name === selectedName && (selectedGroup === '' || quizAssignedByYou[3].group_name === selectedGroup) && (
          
          <div className={styles.card}>
            <span className={styles.title}>{quizAssignedByYou[3].title}</span>
            <div className={styles.infoBox}>
              <span className={styles.description}>{quizAssignedByYou[3].quiz_description}</span>
              <div className={styles.additionalInfo}>
                <div className={styles.infoIcon}style={{marginTop:"20px"}}>
                  <img src={infoIcon} alt="Separate Icon" width={10} height={10} style={{ marginLeft: "40px" }} />
                </div>
                <span className={styles.infoItem}>
                  <img src={topicIcon} alt="Topic Icon" width={10} height={10} /> {quizAssignedByYou[3].topic}
                </span>
                <span className={styles.infoItem1}>
                  <img src={timerIcon} alt="Time Icon" width={10} height={10} /> {quizAssignedByYou[3].quiz_duration}
                </span>
                <span className={styles.infoItem2}>
                  <img src={difficultyIcon} alt="Easy Icon" width={10} height={10} /> {quizAssignedByYou[3].quiz_complexity}
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
      )}
    </div>
  )}
        {quizAssignedByYou.length > 4 && (
           <div>
       
           {quizAssignedByYou[4].name === selectedName && (selectedGroup === '' || quizAssignedByYou[4].group_name === selectedGroup) && (
          <div className={styles.card}>
            <span className={styles.title}>{quizAssignedByYou[4].title}</span>
            <div className={styles.infoBox}>
              <span className={styles.description}>{quizAssignedByYou[4].quiz_description}</span>
              <div className={styles.additionalInfo}>
                <div className={styles.infoIcon} style={{marginTop:"20px"}}>
                  <img src={infoIcon} alt="Separate Icon" width={10} height={10} style={{ marginLeft: "40px" }} />
                </div>
                <span className={styles.infoItem}>
                  <img src={topicIcon} alt="Topic Icon" width={10} height={10} /> {quizAssignedByYou[4].topic}
                </span>
                <span className={styles.infoItem1}>
                  <img src={timerIcon} alt="Time Icon" width={10} height={10} /> {quizAssignedByYou[4].quiz_duration}
                </span>
                <span className={styles.infoItem2}>
                  <img src={difficultyIcon} alt="Easy Icon" width={10} height={10} /> {quizAssignedByYou[4].quiz_complexity}
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
      )}
    </div>
  )}
  </div>
  </div>
           </div>
           </div>
           </div>
      
      <LogoutBar/>
    </div>
  );
};

export default Notification;
