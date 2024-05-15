// Dashboard.js
import React from "react";
import styles from "./superadmin.module.css";
//import Head from "next/head";
import Navigation from "../navbar/navbar.jsx"
import LogoutBar from "../logoutbar/logoutbar.jsx"
//import img from "next/image";
import searchIcon from "../assets/Images/images/dashboard/searchBar.png";
import toggleImageSrc from "../assets/Images/images/superadmin/toggle.png";
import dropdownImageSrc from "../assets/Images/images/superadmin/add.png";
import newQuizImageSrc from "../assets/Images/images/superadmin/newQuiz.png";
import editQuizImageSrc from "../assets/Images/images/superadmin/EditQuiz.png";
import ProgressBar from "@ramonak/react-progress-bar";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
//import LogoutBar from "./logoutbar";



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
            <div>
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
  <p>Create</p>
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
        <div className={styles.inputContainer}>
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
      
      <select className={styles.dropdown}>
      <option value="toughness">Division</option>
      {/*  options  */}
    </select>
        
    <img
      src={dropdownImageSrc}
      alt="img"
      className="dropdown-image"
      style={{ width: "22px", height: "22px", marginTop: "55px" }}
      width={22}
      height={22}
    />
      <button className="add-button" style={{backgroundColor:"#5E81F4", width:" 85px",height: "32px",borderRadius: "10px", border:"none", fontFamily:"poppins", color:"#FFFFFF" }}>Add</button>
      
    </div>
    
    
        </div>
        

      </div>
    </div>
    <div className="newQuiz" style={{ display: "flex", alignItems: "center" }}>
        <img src={newQuizImageSrc} alt="img" className="newImage" width={22} height={22} style={{ marginRight: "20px", marginLeft: "65px", fontFamily: "poppins", fontWeight: "600px", fontSize: "16px" }} />
        <span>Create a new quiz</span>
      </div>
      <div className={styles.sortBy}>
        <div className="newQuiz" style={{ display: "flex", alignItems: "center", marginTop: "30px", marginBottom: "30px" }}>
          <img src={editQuizImageSrc} alt="img" className="newImage" width={22} height={22} style={{ marginRight: "20px", fontFamily: "poppins", fontWeight: "600px", fontSize: "16px" }} />
          <span>Edit the Quiz Created by</span>
        </div>
  <div className={styles.dropdowns} style={{marginLeft:"40px"}}> 
    <select className={styles.dropdown}>
      <option value="toughness">Division</option>
      {/*  options  */}
    </select>
    <select className={styles.dropdown2}>
      <option value="topic">User name</option>
      {/* options  */}
    </select>
  </div>
  </div>
  <div className={styles.sortBy}>
  <p>Edit</p>
  <div className={styles.dropdowns}>
    <select className={styles.dropdown}>
      <option value="toughness">Division</option>
      {/*  options  */}
    </select>
    <select className={styles.dropdown2}>
      <option value="topic">User name</option>
      {/* options  */}
    </select>
    <div style={{ marginTop: "10px" }}>
      Latest Created
      <span>
        <img
          src={toggleImageSrc}
          alt="img"
          className="newImage"
          style={{
            width: "36px",
            height: "20px",
            marginTop: "10px",
            marginRight: "10px",
            fontFamily: "poppins",
            fontWeight: "600px",
            fontSize: "16px"
          }}
          width={36}
          height={20}
        />
      </span>
    </div>
  </div>
  </div>

  <div className={styles.section}>
  
        {/* Left side */}
        <div className={styles.inputContainer} style={{marginLeft:"65px"}}>
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
        <div className={styles.inputContainer}>
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
                     <div className="address-controls" style={{marginTop:"70px"}}>
   
        
      <button className="add-button" style={{backgroundColor:"#5E81F4", width:" 123px",height: "32px",borderRadius: "10px", border:"none", fontFamily:"poppins", color:"#FFFFFF",marginLeft:"10px" }}
      >Update</button>
      <button className="add-button" style={{backgroundColor:"#5E81F4", width:" 123px",height: "32px",borderRadius: "10px", border:"none", marginLeft:"30px" , fontFamily:"poppins", color:"#FFFFFF"}}>Delete</button>
      
    </div>
        </div>
        </div>

</div>



      <LogoutBar/>
    </div>
  );
};

export default Superadmin;
