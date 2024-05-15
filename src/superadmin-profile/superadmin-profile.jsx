// Dashboard.js
import React from "react";
//import { useRouter } from 'next/router';
import Navigation from "../navbar/navbar.jsx"
import styles from "./superadmin-profile.module.css";
//import Head from "next/head";
//import img from "next/image";
import searchIcon from "../assets/Images/images/dashboard/searchBar.png";
import logoutArrowIcon from "../assets/Images/images/dashboard/logoutArrow1.png";
import NotifiedIcon from "../assets/Images/images/superadmin/notified.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import rankingImage from "../assets/Images/images/profile/ranking.png"; 
import todayTopicIcon from "../assets/Images/images/dashboard/todayTopic.png";
import subTopicIcon from "../assets/Images/images/dashboard/subTopic.png";
import superadminProfile from "../assets/Images/images/profile/superadmin-profile.png";
import infoPhImage from "../assets/Images/images/profile/infoPh.png"; 
import notifyIconSrc from "../assets/Images/images/dashboard/notify.png";
import todayTopicSrc from "../assets/Images/images/dashboard/todayTopic.png";
import notifyIcon from "../assets/Images/images/dashboard/notify.png";
import subTopicSrc from "../assets/Images/images/dashboard/subTopic.png";
import logoutArrowSrc from "../assets/Images/images/dashboard/logoutArrow1.png";



const SuperadminProfile = () => {
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
            <div>{getFormattedDate()}</div>
            <div className={styles.searchIconContainer}>
              <img
                src={searchIcon}
                alt="Search Icon"
                className={styles.searchIcon}
              />
            </div>
            <div className={styles.searchIconContainer}>
              <img
                src={NotifiedIcon}
                alt="Search Icon"
                className={styles.NotifiedIcon} style={{width:"37px",height:"37px"}}
              />
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
    <div className={styles.imageAndTextContainer}>
        <div className={styles.profileImageContainer}>
        <img
    src={superadminProfile} 
    alt="img"
    className={styles.profileImage}
   
  />
  </div>

  <div className={styles.contentContainer}>
  <div className={styles.textContainer}>
        <div className={styles.textLine1}>Profession </div>
  <div className={styles.textLine2}>(Plan of the Subscription)  </div>
  <div className={styles.textLine3}>no. days left in Subscription/ free</div>
      </div>
    </div>
  </div>
  
  <div className={styles.additionalTextContainer1}>
  <div className={styles.contentContainer1}>
    <div className={styles.textAndImageContainer1}>
      <div className={styles.textContainer1}>
        <p className={styles.textLines1}>You Ranked</p>
    
      </div>
      <div className={styles.imageContainer2}>
      <img
    src={rankingImage} 
    alt="img"
    className={styles.RankingImage}
   
  />
      </div>
    </div>
    <div className={styles.textAndimgContainer2}>
      <div className={styles.textContainer1}>
        <p className={styles.textLines3} style={{marginTop:"-20px"}}>002</p>
        <p className={styles.textLines4} style={{marginTop:"-20px"}}>in last 30 days</p>
      </div>
      
    </div>
    <div className={styles.imageContainer1}>
    <img
    src={infoPhImage}
    alt="img"
    className={styles.infoImage}
   
  />
      </div>
    </div>
   </div>
  </div>
  <div className={styles.sortBy}>
  <p>Switch to</p>
  <div className={styles.dropdowns}>
    <select className={styles.dropdown}>
      <option value="toughness">Division</option>
      {/*  options  */}
    </select>
    <select className={styles.dropdown1}>
      <option value="topic">User name</option>
      {/* options  */}
    </select>
  </div>
  <p>Edit</p>
  <div className={styles.section}>
  
        {/* Left side */}
        <div className={styles.inputContainer}>
          <input type="text" placeholder="First Name" className={styles.inputBox}  style={{
                      backgroundImage: `url('images/signup/firstNameIcon.png')`,
                      backgroundRepeat: "no-repeat",
                      fontFamily:"poppins",
                      backgroundColor: "#F0EFFF",
                      paddingLeft: "40px",
                      backgroundPosition: "10px center",
                     
                    }} />
          <input type="date" placeholder="DD/MM/YYYY" className={styles.inputBox} style={{
                      //backgroundImage: `url('images/signup/middleNameIcon.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#F0EFFF",
                      fontFamily:"poppins",
                      paddingLeft: "20px",
                      width:"296px",
                      backgroundPosition: "10px center",
                     
                    }} />
          <input type="email" placeholder="Email Address" className={styles.inputBox}    style={{
                      backgroundImage: `url('images/signup/emailIcon.png')`,
                      backgroundRepeat: "no-repeat",
                      fontFamily:"poppins",
                      backgroundColor: "#F0EFFF",
                      paddingLeft: "40px",
                      backgroundPosition: "10px center",
                    }}/>
          <input type="tel" placeholder="Mobile Number" className={styles.inputBox}  style={{
                        backgroundImage: `url('images/signup/mobileIcon.png')`,
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "#F0EFFF",
                        fontFamily:"poppins",
                        paddingLeft: "40px",
                        backgroundPosition: "10px center",
                      }}/>
          </div>
        {/* Right side */}
        <div className={styles.inputContainer} style={{marginLeft:"-20px"}}>
          <input type="text" placeholder="Last Name" className={styles.inputBox} style={{
                      backgroundImage: `url('images/signup/lastNameIcon.png')`,
                      backgroundRepeat: "no-repeat",
                      fontFamily:"poppins",
                      backgroundColor: "#F0EFFF",
                      paddingLeft: "40px",
                      backgroundPosition: "10px center",
                     
                    }}/>
          <textarea placeholder="Address"className={styles.inputBox} rows={3} style={{
                      backgroundImage: `url('images/signup/postalCodeIcon.png')`,
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#F0EFFF",
                      fontFamily:"poppins",
                      paddingLeft: "40px",
                      backgroundPosition: "10px top",
                      height:"50px"
                    }} />
                    <div className="address-controls">
      
     
        
      <button className="add-button" style={{backgroundColor:"#5E81F4", width:" 123px",height: "32px",borderRadius: "10px", border:"none", fontFamily:"poppins", color:"#FFFFFF" , marginTop:"50px"}}>Update</button>
      
    </div>
    
    
        </div>
        </div>
        </div>
        
        <div className={styles.horizontalBoxes}>
    <div className={styles.box}>
    <div className={styles.contentWrapper}>
          <div className={styles.resultWrapper}>
            <div className={styles.latestResult}>
              Latest Result
              <div className={styles.resultInfo}>
                <div className={styles.infoLine}>
                  <span
                    className={styles.info}
                    style={{ fontSize: "10px", color: "grey", marginTop:"20px" , marginLeft:"10px" }}
                  >
                    Date -<span className={styles.title}>Title</span> - Topic
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      
                      width: "100px",
                      height: "2px",
                      fontSize:"10px",
                    
                    }}
                  >
                    <Progress percent={25} />
                  </span>
                </div>
                <hr className={styles.divider} />
                <div className={styles.infoLine}>
                  <span
                    className={styles.info}
                    style={{ fontSize: "10px", color: "grey", marginTop:"5px" , marginLeft:"10px"}}
                  >
                    Date -<span className={styles.title}>Title</span> - Topic
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      marginTop:"-10px", 
                      width: "100px", 
                      height: "2px",
                      fontSize:"10px"
                
                    }}
                  >
                    <Progress percent={44} />
                  </span> 
                </div>
                <hr className={styles.divider} />
                <div className={styles.infoLine} style={{ fontSize: "10px" }}>
                  <span
                    className={styles.info}
                    style={{ fontSize: "10px", color: "grey", marginTop:"5px" , marginLeft:"10px" }}
                  >
                    Date -<span className={styles.title}>Title</span> - Topic
                  </span>
                  <span
                    style={{
                      marginLeft: "10px",
                      marginTop:"-10px",
                      width: "100px",
                      height: "2px",
                  
                      fontSize:"10px"
                    }}
                  >
                    <Progress percent={40} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
    </div>
    <div className={styles.box}>
    <div className={styles.resultWrapper}>
            <div className={styles.timeSpent}>
              Time Spent on Quiz
              <span className={styles.moreButton}>
                Last week 
              </span>
              <div className={styles.progressBars}>
                <div className={styles.progressBar}>
                  <div className={styles.day}>Mon</div>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressFill}
                      style={{ height: "20%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.day}>Tue</div>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressFill}
                      style={{ height: "30%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.day}>Wed</div>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressFill}
                      style={{ height: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.day}>Thu</div>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressFill}
                      style={{ height: "70%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.day}>Fri</div>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressFill}
                      style={{ height: "40%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.day}>Sat</div>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressFill}
                      style={{ height: "60%" }}
                    ></div>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.day}>Sun</div>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressFill}
                      style={{ height: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    <div className={styles.box}>
    <div className={styles.resultWrapper}>
            <div className={styles.rewards}>
              Rewards
              
              </div>
              <div className={styles.sentencesWrapper}>
      {/* Add five <div> tags for the sentences */}
      <div className={styles.sentence}>1. Top Ranked in last week</div>
      <div className={styles.sentence}>2. Won four Vouchers</div>
      <div className={styles.sentence}>3. Won four Vouchers</div>
      <div className={styles.sentence}>4. Won four Vouchers</div>
      <div className={styles.sentence}>5. Won four Vouchers</div>
    </div>
    </div>
    </div>
    </div>



       </div>
      <div className={styles.logout}>
      <div style={{ marginTop: "60px", display: "flex", alignItems: "center" , marginLeft:"20px"}}>
  <span style={{ marginRight: "10px" }}>Logout</span>
  <img
    src={logoutArrowIcon}
    alt="Logout Icon"
    style={{ width: "30px", height: "20px", marginLeft:"130px" }}
  />
  </div>
  <div style={{ textAlign: "left", marginTop: "30px", fontFamily: "Poppins", fontSize: "15px", fontWeight: 700, lineHeight: "23px", letterSpacing: "0em" , color:"#214082", marginLeft:"20px"}}>
    You’ve completed 10 <br></br>Quiz’s this week of <br></br>average score of 85%
  </div>
  <div style={{ textAlign: "left", marginLeft:"20px" }}>
  <span style={{ fontSize: "15px", color: "#000000", fontWeight: 500 }}>
    Notification
  </span>
  <img
    src={notifyIcon}
    alt="Notify Icon"
    className={styles.notifyIcon}
    style={{ marginLeft: "120px" }}
  />
    <div style={{ marginTop: "20px", }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "5px",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFE8EE",
            width: "30px",
            height: "30px",
            borderRadius: "5px",
            marginRight: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={todayTopicIcon}
            alt="Scored Icon"
            style={{ width: "15px", height: "15px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontWeight: 500,
              marginRight: "15px",
            }}
          >
            Today - Topic
          </span>
          <span
            style={{
              fontSize: "10px",
              color: "#9696BB",
              marginTop: "3px",
            }}
          >
            23 Jan 2024, Tuesday
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "#E4EBFF",
            width: "30px",
            height: "30px",
            borderRadius: "5px",
            marginRight: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={subTopicIcon}
            alt="Time Spent Icon"
            style={{ width: "17px", height: "13px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "15px", fontWeight: 500 }}>
            Topic - Sub Topic Title
          </span>
          <span
            style={{
              fontSize: "10px",
              color: "#9696BB",
              marginTop: "3px",
              marginRight: "30px",
            }}
          >
            24 Jan 2024, Wednesday
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "#E4EBFF",
            width: "30px",
            height: "30px",
            borderRadius: "5px",
            marginRight: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={subTopicIcon}
            alt="Time Spent Icon"
            style={{ width: "17px", height: "13px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "15px", fontWeight: 500 }}>
            Topic - Sub Topic Title
          </span>
          <span
            style={{
              fontSize: "10px",
              color: "#9696BB",
              marginTop: "3px",
              marginRight: "30px",
            }}
          >
            24 Jan 2024, Wednesday
          </span>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default SuperadminProfile ;
