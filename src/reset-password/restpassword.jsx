import React, { useState, useEffect } from "react";
import styles from "./email.module.css";
import styles1 from "./signup.module.css";
import icon1 from "../assets/Images/images/mdi_gmail.png";
import icon2 from "../assets/Images/images/clarity_mobile-line.png";
import quizifailogo from "../assets/Images/images/home/Quizifai3.png";
import successImage from "../assets/Images/images/signup/successImage.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaTimes, FaCheck } from "react-icons/fa";
import wrongMarkImage from "../assets/Images/images/signup/wrongMarkImage.png";

import TextField from "@mui/material/TextField";

import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const resetpassword = () => {
  const [loginMethod, setLoginMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [email1, setEmail1] = useState("email");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [name1, setName1] = useState("");
  const [name, setName] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [showGmailPopup, setShowGmailPopup] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isContentSelected, setIsContentSelected] = useState(false);
  const [showRegistrationSuccess, setShowRegistrationSuccess] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [emailValid, setEmailValid] = useState(false);
  const [mobileValid, setMobileValid] = useState(false);

  //   const router = useRouter();
  const [Districtname, setDistrictname] = useState("");
  const [emailOrMobile, setemailOrMobile] = useState("");
  const [firstname, setfirstname] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [lastname, setlastname] = useState("");
  const [userphonenumber, setuserphonenumber] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [occupationname, setoccupationname] = useState("");
  const [cityname, setcityname] = useState("");
  const [countryname, setcountryname] = useState("");
  const [statename, setstatename] = useState("");
  const [data, setdata] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [mobile, setMobile] = useState("");
  const [mobile1, setMobile1] = useState("");

  const navigate = useNavigate();
  const handleBackToDashboard = () => {
    navigate("/login");
  };
  const handlecancel = () => {
    navigate("/");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp2 = () => {
    const userData = {
      reset_option: email1,
      email_or_mobile: email,
      otp: otp,
      new_password: password,
      confirm_new_password: confirmpassword,
    };

    fetch("https://quizifai.com:8010/resetpassword", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("resetpassword");
        }
        return response.json();
      })
      .then((data) => {
        console.log("resetpassword successful:", data);
        if (data.output === "Password has been successfully reset.") {
        
          setShowRegistrationSuccess(true);
        } else if (data.message ===
          "Please click on Reset Password link to Email and try again.") {
          // Email is already registered, handle accordingly (for example, show an error message)
          // setErrorMessage(data.data); // Set error message to display on the same page
          alert(data.message)
        }
        
       else{
        alert("Error resetpassword")
       }
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <div className={styles1.logo}>
            <img src={quizifailogo} alt="Logo" width={300} height={308} />
          </div>
        </div>
        <div className={styles.rightSection}>
          {/* Registration success message */}
          {showRegistrationSuccess && (
            <div className={styles.registrationSuccess}>
              <h2>Password reset Successfully</h2>
              <img
                src={successImage}
                alt="Success"
                width={145.4}
                height={145.4}
              />
              <p className={styles.redirectText} style={{ fontWeight: 700 }}>
                Password has been successfully reset Now you can login
              </p>
              <p className={styles.redirectLink}>
                Click{" "}
                <span
                  className={styles.link}
                  style={{ fontWeight: 700, cursor: "pointer" }}
                  onClick={handleBackToDashboard}
                >
                  here
                </span>{" "}

                Go to Login
              </p>
            </div>
          )}
          {/* Register form */}

          {/* Sign up form */}
          {!showRegisterForm && !showRegistrationSuccess && (
            <>
              <div className={styles.SignupHeader}>
                {/* <h1 className={styles.SignupTitle}>Sign Up</h1> */}
                <p className={styles.SignupDescription}>Reset Password</p>
              </div>

              {/* <div className={styles.registerUsing}>
                <div className={styles.registerText}>Register Using</div>
                <div className={styles.rememberText}>
                  (Remember your selection for signup)
                </div>
              </div> */}

              <div className={styles.toggleOptions}>
                {/* <label className={styles.toggleLabel}>
                  <input
                    type="radio"
                    name="contactMethod"
                    className={`${styles.toggleRadio} ${styles.greyScale}`}
                    value="email"
                    checked={loginMethod === "email"}
                    onChange={() => handleLoginMethodChange("email")}
                  />
                  <div className={styles.icon1}>
                    <img src={icon1} alt="Logo" width={24} height={24} />
                  </div>
                  Email
                </label> */}

                {/* <label className={styles.toggleLabel}>
                  <input
                    type="radio"
                    name="contactMethod"
                    className={`${styles.toggleRadio} ${styles.greyScale}`}
                    value="mobile"
                    checked={loginMethod === "mobile"}
                    onChange={() => handleLoginMethodChange("mobile")}
                  />
                  <div className={styles.icon2}>
                    <img src={icon2} alt="Logo" width={30} height={30} />
                  </div>
                  Mobile
                </label> */}
              </div>
              {/*  email content */}
              {loginMethod === "email" && (
                <div className={styles.emailContent}>
                  <div className={styles.inputContainer}>
                    <div className={styles.inputWrapper}>
                      <div
                        className={styles.inputWithIcon}
                        style={{ marginTop: "0px", marginRight: "90px" }}
                      >
                        <TextField
                          id="email"
                          label="Email ID"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          variant="outlined"
                          className={styles.inputField}
                          style={{ width: "325px", height: "50px" }}
                          InputLabelProps={{
                            style: { fontFamily: "poppins" },
                          }}
                          InputProps={{
                            style: {
                              backgroundImage: `url('/images/email/mail.png')`,
                              backgroundSize: "19px 16px",
                              backgroundPosition: "296px center",
                              backgroundRepeat: "no-repeat",
                              width: "325px",
                              height: "50px",
                              // backgroundColor: "#F0EFFF",
                              border: "none",
                              fontFamily: "poppins",
                              paddingLeft: "0px",
                              borderRadius: "10px",
                            },
                            autoComplete: "off",
                          }}
                        />
                      </div>
                      {errors.emailOrMobile && (
                        <p className={styles.errormessage}>
                          {errors.emailOrMobile}
                        </p>
                      )}
                    </div>

                    <div className={styles.inputWrapper}>
                      <div
                        className={styles.inputWithIcon}
                        style={{ marginRight: "87px" }}
                      >
                        <TextField
                          id="password"
                          label="Enter New Password "
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          variant="outlined"
                          className={styles.inputField}
                          style={{ width: "328px", height: "50px" }}
                          InputLabelProps={{
                            style: { fontFamily: "poppins" },
                          }}
                          InputProps={{
                            style: {
                              backgroundSize: "19px 16px",
                              backgroundPosition: "10px center",
                              backgroundRepeat: "no-repeat",
                              width: isMobile ? "100%" : "328px",
                              height: "50px",
                              // backgroundColor: "#F0EFFF",
                              border: "none",
                              fontFamily: "poppins",
                              paddingLeft: "0px",
                              borderRadius: "10px",
                            },
                            endAdornment: (
                              <div
                                className={styles.passwordToggleIcon}
                                onClick={togglePasswordVisibility}
                              >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                              </div>
                            ),
                            autoComplete: "new-password",
                          }}
                          type={showPassword ? "text" : "password"}
                        />
                      </div>
                      {errors.password && (
                        <p className={styles.errormessage}>{errors.password}</p>
                      )}

                      <div className={styles.inputWrapper}>
                        <div
                          className={styles.inputWithIcon}
                          style={{ marginTop: "20px", marginRight: "87px" }}
                        >
                          <TextField
                            id="password"
                            label="Confirm Password"
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                            variant="outlined"
                            className={styles.inputField}
                            style={{ width: "328px", height: "50px" }}
                            InputLabelProps={{
                              style: { fontFamily: "poppins" },
                            }}
                            InputProps={{
                              style: {
                                backgroundSize: "19px 16px",
                                backgroundPosition: "10px center",
                                backgroundRepeat: "no-repeat",
                                width: isMobile ? "100%" : "328px",
                                height: "50px",
                                // backgroundColor: "#F0EFFF",
                                border: "none",
                                fontFamily: "poppins",
                                paddingLeft: "0px",
                                borderRadius: "10px",
                              },
                              endAdornment: (
                                <div
                                  className={styles.passwordToggleIcon}
                                  onClick={togglePasswordVisibility}
                                >
                                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </div>
                              ),
                              autoComplete: "new-password",
                            }}
                            type={showPassword ? "text" : "password"}
                          />
                        </div>
                        {errors.confirmpassword && (
                          <p className={styles.errormessage}>
                            {errors.confirmpassword}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile content */}
              {/* {loginMethod === "mobile" && (
                <div className={styles.mobileContent}>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#454B60",
                      marginRight: "210px",
                    }}
                  >    
                  </p>
                  {!showOtpField && (
                  <div className={styles.inputWrapper}>
                    <div
                      className={styles.inputWithIcon}
                      style={{ marginTop: "20px", marginRight: "90px" }}
                    >
                      <TextField
                        id="name"
                        label="Name"
                        type="text"
                        variant="outlined"
                        className={styles.inputField}
                        style={{ width: "325px", height: "50px" }}
                        InputLabelProps={{
                          style: { fontFamily: "poppins" },
                        }}
                        InputProps={{
                          style: {
                            backgroundImage: `url('/images/contact/first.png')`,
                            backgroundSize: "25px 25px",
                            backgroundPosition: "290px center",
                            backgroundRepeat: "no-repeat",
                            width: "325px",
                            height: "50px",
                            // backgroundColor: "#F0EFFF",
                            border: "none",
                            fontFamily: "poppins",
                            paddingLeft: "0px",
                            borderRadius: "10px",
                          },
                          autoComplete: "off",
                        }}
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    {errors.name && <p className={styles.errormessage}>{errors.name}</p>}

                  </div>
                  )}
                         {!showOtpField && (
                  <div className={styles.inputWrapper}>
                    <div
                      className={styles.inputWithIcon}
                      style={{
                        marginTop: "20px",
                        marginRight: "90px",
                        position: "relative",
                      }}
                    >
                      <TextField
                        id="number"
                        label="Mobile Number"
                        type="tel"
                        value={mobile}
                        onChange={handleMobileChange1}
                        variant="outlined"
                        className={styles.inputField}
                        style={{
                          width: "325px",
                          height: "50px",
                        }}
                        InputLabelProps={{
                          style: { fontFamily: "poppins" },
                        }}
                        InputProps={{
                          style: {
                            backgroundImage: `url('/images/mobile/mob.png')`,
                            backgroundSize: "10px 19px",
                            backgroundPosition: "295px center",
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: "100%",
                            // backgroundColor: "#F0EFFF",
                            border: "none",
                            fontFamily: "poppins",
                            paddingLeft: "0px",
                            borderRadius: "10px",
                          },
                          autoComplete: "off",
                        }}
                      />
                   
                    </div>
                    {errors.mobile && <p className={styles.errormessage}>{errors.mobile}</p>}

                  </div>
                         )}
                  {showOtpField && (
                  <div className={styles.inputWrapper}>
                    <div
                      className={styles.inputWithIcon}
                      style={{
                        marginTop: "20px",
                        marginRight: "90px",
                        position: "relative",
                      }}
                    >
                      <TextField
                        id="number"
                        label="Mobile Number"
                        type="tel"
                        value={mobile1}
                        onChange={handleMobileChange2}
                        variant="outlined"
                        className={styles.inputField}
                        style={{
                          width: "325px",
                          height: "50px",
                        }}
                        InputLabelProps={{
                          style: { fontFamily: "poppins" },
                        }}
                        InputProps={{
                          style: {
                            backgroundImage: `url('/images/mobile/mob.png')`,
                            backgroundSize: "10px 19px",
                            backgroundPosition: "295px center",
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: "100%",
                            // backgroundColor: "#F0EFFF",
                            border: "none",
                            fontFamily: "poppins",
                            paddingLeft: "0px",
                            borderRadius: "10px",
                          },
                          autoComplete: "off",
                        }}
                      />
                       {!showOtpField && ( 
                      <button className={styles1.button}
                        onClick={handleSignUp2}
                        // style={{
                        //   position: "absolute",
                        //   top: "5px",
                        //   right: "5px",
                        //   width: "100px",
                        //   height: "50px",
                        //   backgroundColor: "#1A73E8",
                        //   color: "#ffffff",
                        //   border: "none",
                        //   borderRadius: "10px",
                        //   cursor: "pointer",
                          
                        // }}
                      >
                        Send OTP
                      </button>
                       )}
                    </div>
                    {errors.mobile && <p className={styles.errormessage}>{errors.mobile}</p>}

                  </div>
                  )}
                  {!showOtpField && (
                    <div className={styles.inputWrapper}>
                      <div
                        className={styles.inputWithIcon}
                        style={{ marginRight: "87px" }}
                      >
                        <TextField
                          id="password"
                          label="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          variant="outlined"
                          className={styles.inputField}
                          style={{ width: "328px", height: "50px" }}
                          InputLabelProps={{
                            style: { fontFamily: "poppins" },
                          }}
                          InputProps={{
                            style: {
                              backgroundSize: "19px 16px",
                              backgroundPosition: "10px center",
                              backgroundRepeat: "no-repeat",
                              width: isMobile ? "100%" : "328px",
                              height: "50px",
                              // backgroundColor: "#F0EFFF",
                              border: "none",
                              fontFamily: "poppins",
                              paddingLeft: "0px",
                              borderRadius: "10px",
                            },
                            endAdornment: (
                              <div
                                className={styles.passwordToggleIcon}
                                onClick={togglePasswordVisibility}
                              >
                                {showPassword ?  <FaEye/> : <FaEyeSlash />}
                              </div>
                            ),
                            autoComplete: "new-password",
                          }}
                          type={showPassword ? "text" : "password"}
                        />
                      </div>
                      {errors.password && <p className={styles.errormessage}>{errors.password}</p>}

                      <div className={styles.inputWrapper}>
                        <div
                          className={styles.inputWithIcon}
                          style={{ marginTop: "20px", marginRight: "87px" }}
                        >
                          <TextField
                            id="password"
                            label="Confirm Password"
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                            variant="outlined"
                            className={styles.inputField}
                            style={{ width: "328px", height: "50px" }}
                            InputLabelProps={{
                              style: { fontFamily: "poppins" },
                            }}
                            InputProps={{
                              style: {
                                backgroundSize: "19px 16px",
                                backgroundPosition: "10px center",
                                backgroundRepeat: "no-repeat",
                                width: isMobile ? "100%" : "328px",
                                height: "50px",
                                // backgroundColor: "#F0EFFF",
                                border: "none",
                                fontFamily: "poppins",
                                paddingLeft: "0px",
                                borderRadius: "10px",
                              },
                              endAdornment: (
                                <div
                                  className={styles.passwordToggleIcon}
                                  onClick={togglePasswordVisibility}
                                >
                                  {showPassword ?  <FaEye/> : <FaEyeSlash />}
                                </div>
                              ),
                              autoComplete: "new-password",
                            }}
                            type={showPassword ? "text" : "password"}
                          />
                        </div>
                        {errors.confirmpassword && <p className={styles.errormessage}>{errors.confirmpassword}</p>}

                      </div>
                    </div>
                  )}
                  {showOtpField && (
                    <div className={styles.inputWrapper}>
                      <div
                        className={styles.inputWithIcon}
                        style={{
                          marginTop: "20px",
                          marginRight: "90px",
                          marginBottom: "40px",
                        }}
                      >
                        <TextField
                          id="otp"
                          label="OTP"
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          variant="outlined"
                          className={styles.inputField}
                          style={{ width: "325px", height: "50px" }}
                          InputLabelProps={{
                            style: { fontFamily: "poppins" },
                          }}
                          InputProps={{
                            style: {
                              backgroundImage: `url('/images/mobile/otp.png')`,
                            backgroundSize: "25px 19px",
                            backgroundPosition: "290px center",
                              backgroundRepeat: "no-repeat",
                              width: "325px",
                              height: "50px",
                              // backgroundColor: "#F0EFFF",
                              border: "none",
                              fontFamily: "poppins",
                              paddingLeft: "0px",
                              borderRadius: "10px",
                            },
                          }}
                        />
                      </div>
                     
                    </div>
                  )}
                </div>
              )} */}

              {/* <p
                className={`${styles.signUpText} ${
                  !isContentSelected || loginMethod === "gmail"
                    ? styles.withMarginTop
                    : ""
                }`}
               
              >
                Already having an account?{" "}
                <span className={styles.diffColor}
              onClick={handleBackToDashboard} >login</span>{" "}
              </p>
              <div className={styles1.checkbox1}>
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  className={styles.checkboxInput1}
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                />
                <span className={styles.span}>
                  {" "}
                  I agree with the terms and conditions
                </span>
                
             
              
              </div> */}

              {/* {responseMessage && <p className={styles1.responseMessage}>{responseMessage}</p>}
              {loginMethod === "email" && (
                <button
                  onClick={handleSignUp1}
                  // onSubmit={handleVerification}
                  className={styles1.loginButton}
                >
                  Sign Up
                </button>
              )} */}

              <div>
                <button
                  onClick={handlecancel}
                  className={styles1.loginButton}
                >
                  cancel
                </button>
                <button
                  onClick={handleSignUp2}
                  className={styles1.loginButton1}
                >
                  submit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default resetpassword;
