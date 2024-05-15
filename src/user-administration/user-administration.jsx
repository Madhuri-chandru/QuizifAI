"use client";
import React from "react";

// Navbar-icons
import QuizifAilogo from "../assets/Images/User-Administration/Quizifai 1.png";
import Dashboard from "../assets/Images/User-Administration/Dashboard.png";
import Quiz from "../assets/Images/User-Administration/Quiz.png";
import History from "../assets/Images/User-Administration/History.png";
import Schedule from "../assets/Images/User-Administration/Schedule.png";
import Notification from "../assets/Images/User-Administration/Notification.png";
import UserAdmin from "../assets/Images/User-Administration/User-Admin.png";
import Reports from "../assets/Images/User-Administration/Report.png";
import Profile from "../assets/Images/User-Administration/Profile.png";

// Main-Section-icons 
import Round from "../assets/Images/User-Administration/Round.png";
import CreateReport from "../assets/Images/User-Administration/Create-report.png";
import CreateUser from "../assets/Images/User-Administration/Create-User.png";
import Horizontal from "../assets/Images/User-Administration/Horizontal.png";
import Logo from "../assets/Images/User-Administration/Logo.png";
import OrgName from "../assets/Images/User-Administration/Org-Name.png";
import OrgDiscription from "../assets/Images/User-Administration/Org-Dis.png";
import Edit from "../assets/Images/User-Administration/Edit.png";
import Name from "../assets/Images/User-Administration/Name.png";
import OrgAddress from "../assets/Images/User-Administration/Org-Add.png";
import Phone from "../assets/Images/User-Administration/Phone-no.png";
import Subscription from "../assets/Images/User-Administration/Subscription.png";
import Dropdown from "../assets/Images/User-Administration/Dropdown.png";
import View from "../assets/Images/User-Administration/View.png";
import TableEdit from "../assets/Images/User-Administration/Table-Edit.png";
import TableDelete from "../assets/Images/User-Administration/Table-Delete.png";

function page() {
  return (
    <>
      <div className="">
        {/* Navigation-Section */}
        <header className="w-[219px] h-[1210px] absolute top-[-19px] left-[-9px] rounded-tl-[20px] rounded-bl-[20px] bg-[#F5F5FB] z-10 shadow-lg shadow-gray-500/60">
          <div className="h-[300px] w-[270px] absolute top-[20px] -left-[20px]">
            <img src={QuizifAilogo} alt="QuizifAi Logo Icon" />
          </div>

          {/* Navigation-icons */}
          <div className="flex w-[15px] h-[15px] absolute top-[231px] left-[51px]">
            <img src={Dashboard} alt="Dashborad img" />
            <a
              className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Dashboard
            </a>
          </div>

          <div className="flex w-[16px] h-[15px] absolute top-[285px] left-[51px]">
            <img src={Quiz} alt="Quiz's img" />
            <a
              className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Quiz's
            </a>
          </div>

          <div className="flex w-[13.87px] h-[15.41px] absolute top-[338px] left-[51px]">
            <img src={History} alt="History img" />
            <a
              className="ml-5 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              History
            </a>
          </div>

          <div className="flex w-[17px] h-4 absolute top-[394px] left-[51px]">
            <img src={Schedule} alt="Schedule img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Schedule
            </a>
          </div>

          <div className="flex w-4 h-[15px] absolute top-[453px] left-[51px]">
            <img src={Notification} alt="Notification img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Notification
            </a>
          </div>

          <div className="flex w-[28px] h-[30px] absolute top-[508px] left-[51px]">
            <img className="-ml-1" src={UserAdmin} alt="QuizAdmin img" />
            <a
              className="ml-4 mt-2 text-Poppins font-medium text-[15px] leading-[15px] text-nowrap text-[#9696BB]"
              for=""
            >
              User Admin
            </a>
          </div>

          <div className="flex w-[17px] h-[17px] absolute top-[581px] left-[51px]">
            <img src={Reports} alt="Profile img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px]"
              for=""
            >
              Reports
            </a>
          </div>

          <div className="flex w-[17px] h-[17px] absolute top-[644px] left-[51px]">
            <img src={Profile} alt="Profile img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Profile
            </a>
          </div>
        </header>

        <main className="w-mx-auto ">
          <div className="w-[1263px] h-[1191.6px] absolute bg-gradient-to-t from-[#CEE4FF80] to-[#EEF6FF80]">
            <div className="w-[139px] h-[41px] absolute top-[26px] left-[1077px] rounded-[10px] bg-[#FFEDCD]">
              <h1 className="font-Poppins font-medium text-[12px] leading-[18px] text-[#214082] ml-11 mt-3">
                Create Report
              </h1>
            </div>
            <img
              className="w-[29px] h-[27px] absolute top-[34px] left-[1085px]"
              src={Round}
            />
            <img
              className="w-[14px] h-[12px] absolute top-[41px] left-[1093px]"
              src={CreateReport}
            />

            <div className="w-[124px] h-[41px] absolute top-[26px] left-[941px] rounded-[10px] bg-[#FECAF9]">
              <img
                className="w-[25px] h-[25px] absolute mx-2 my-2"
                src={CreateUser}
              />
              <h1 className="font-Poppins font-medium text-[12px] leading-[18px] text-[#214082] ml-11 mt-3">
                Create User
              </h1>
            </div>

            <img
              className="w-[368px] absolute top-[78px] left-[849px]"
              src={Horizontal}
            />

            <div className="flex w-[985px] h-[307px] absolute top-[92px] left-[253px] rounded-[48px] bg-[#e9f1fa]">
              <div>
                <img className="w-[241px] h-[241px] mx-5 my-8" src={Logo} />
              </div>
            </div>

            <div className="w-[96px] h-[41px] absolute top-[109px] left-[1107px] rounded-[10px] bg-[#FCBB42]">
              <img
                className="w-[24px] h-[24px] absolute mx-2 my-2"
                src={Edit}
              />
              <h1 className="font-Poppins font-medium text-[12px] leading-[18px] text-[#FFFFFF] ml-11 mt-3">
                Edit
              </h1>
            </div>

            <img
              className="w-[26px] h-[26px] absolute top-[138px] left-[547px] "
              src={OrgName}
            />
            <div className=" absolute top-[130px] left-[585px]">
              <h1 className="font-Poppins font-bold text-[20px] leading-[40px] text-[#555555]">
                Organization Name
              </h1>
            </div>

            <img
              className="w-6 h-6 absolute top-[186px] left-[548px] "
              src={OrgDiscription}
            />
            <div className=" absolute top-[177px] left-[585px]">
              <h1 className="font-Poppins font-medium text-[18px] leading-[40px] text-[#555555]">
                Organization Description
              </h1>
            </div>

            <img
              className="w-[23px] h-[23px] absolute top-[230px] left-[548px] "
              src={Name}
            />
            <div className=" absolute top-[224px] left-[585px]">
              <h1 className="font-Poppins font-semibold text-[18px] leading-[40px] text-[#555555]">
                Name of POC
              </h1>
            </div>

            <img
              className="w-[26px] h-5 absolute top-[282px] left-[548px] "
              src={OrgAddress}
            />
            <div className="w-[188px] h-[93px] absolute top-[280px] left-[587px] ">
              <h1 className="font-Poppins font-semibold text-[18px] leading-[20px] text-[#555555]">
                Org Address Address
                <br />
                Address
              </h1>
            </div>

            <img
              className="w-[17.51px] h-[17.5px] absolute top-[258px] left-[774px] "
              src={Phone}
            />
            <div className=" absolute top-[246px] left-[801px] ">
              <h1 className="font-Poppins font-medium text-[18px] leading-[40px] text-[#555555]">
                Phone Number
              </h1>
            </div>

            <img
              className="w-[21.64px] h-[29.83px] absolute top-[292.17px] left-[772px] "
              src={Subscription}
            />
            <div className=" absolute top-[281px] left-[801px] ">
              <h1 className="font-Poppins font-medium text-[18px] leading-[30px] text-[#555555]">
                Subscriptions Details<br/>
                DD/MM/YYYY to
                <span className="text-[#843636]"> DD/MM/YYYY</span>
              </h1>
            </div>
          </div>

          <div className="w-[985px] h-[457px] absolute top-[424px] left-[259px] rounded-[31px] bg-[#FFFFFF]">
          <h1 className="font-Poppins font-bold text-[18px] leading-[40px] text-[#555555] mx-4 my-2">
          Users
              </h1>
          </div>

          <div className=" rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[461px] left-[700px]">
              <div className=" border-grey-400 leading-[18px] text-[12px] font-medium  px-4 py-3 rounded">
                Team
              </div>
              <img
                className="w-5 h-5 flex mt-3 ml-5 cursor-pointer"
                src={Dropdown}
                alt="Dropdown Icon for Division"
              />
            </div>

            <div className=" rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[461px] left-[861px]">
              <div className=" border-grey-400 leading-[18px] text-[12px] font-medium  px-4 py-3 rounded">
                Groups
              </div>
              <img
                className="w-5 h-5 flex mt-3 ml-4 cursor-pointer"
                src={Dropdown}
                alt="Dropdown Icon for Division"
              />
            </div>

            <table >
              <thead className="w-[404px] h-[29px] absolute top-[519px] left-[293px]">
                  <tr className="font-Poppins font-semibold text-[12px] leading-[18px]">
                    <th className="">#</th>
                    <th className="pl-10">User Name</th>
                    <th className="pl-10">Score</th>
                    <th className="pl-10">Attempts</th>
                    <th className="pl-10">Duration</th>
                  </tr>
              </thead>
              <tbody className="w-[420px] h-[314px] absolute top-[551px] left-[292px]">
                <tr className="font-Poppins font-medium text-[12px] leading-[45px]">
                  <td>1</td>
                  <td className="pl-12">User Name</td>
                  <td className="pl-12">100</td>
                  <td className="pl-[70px]">1</td>
                  <td className="pl-20">15 Min</td>
                </tr>

                <tr className="font-Poppins font-medium text-[12px] leading-[45px]">
                  <td>2</td>
                  <td className="pl-12">User Name</td>
                  <td className="pl-12">100</td>
                  <td className="pl-[70px]">1</td>
                  <td className="pl-20">15.2 Min</td>
                </tr>

                <tr className="font-Poppins font-medium text-[12px] leading-[45px]">
                  <td>3</td>
                  <td className="pl-12">User Name</td>
                  <td className="pl-12">100</td>
                  <td className="pl-[70px]">1</td>
                  <td className="pl-20">15.5 Min</td>
                </tr>

                <tr className="font-Poppins font-medium text-[12px] leading-[45px]">
                  <td>4</td>
                  <td className="pl-12">User Name</td>
                  <td className="pl-12">100</td>
                  <td className="pl-[70px]">1</td>
                  <td className="pl-20">15.8 Min</td>
                </tr>

                <tr className="font-Poppins font-medium text-[12px] leading-[45px]">
                  <td>5</td>
                  <td className="pl-12">User Name</td>
                  <td className="pl-12">100</td>
                  <td className="pl-[70px]">1</td>
                  <td className="pl-20">16.2 Min</td>
                </tr>

                <tr className="font-Poppins font-medium text-[12px] leading-[45px]">
                  <td>6</td>
                  <td className="pl-12">User Name</td>
                  <td className="pl-12">100</td>
                  <td className="pl-[70px]">1</td>
                  <td className="pl-20">16.8 Min</td>
                </tr>

                <tr className="font-Poppins font-medium text-[12px] leading-[45px]">
                  <td>7</td>
                  <td className="pl-12">User Name</td>
                  <td className="pl-12">100</td>
                  <td className="pl-[70px]">1</td>
                  <td className="pl-20">23 Min</td>
                </tr>
              </tbody>
            </table>

            <div className="flex w-[290px] h-9 absolute top-[555px] left-[697px] rounded-[10px] bg-[#EFF6FF]">
             <img className="w-5 h-5 mx-2 my-2" src={View} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">View </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableEdit} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Edit </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableDelete} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Delete </a>
            </div>

            <div className="flex w-[290px] h-9 absolute top-[598px] left-[697px] rounded-[10px] bg-[#EFF6FF]">
             <img className="w-5 h-5 mx-2 my-2" src={View} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">View </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableEdit} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Edit </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableDelete} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Delete </a>
            </div>

            <div className="flex w-[290px] h-9 absolute top-[644px] left-[697px] rounded-[10px] bg-[#EFF6FF]">
             <img className="w-5 h-5 mx-2 my-2" src={View} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">View </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableEdit} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Edit </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableDelete} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Delete </a>
            </div>

            <div className="flex w-[290px] h-9 absolute top-[690px] left-[697px] rounded-[10px] bg-[#EFF6FF]">
             <img className="w-5 h-5 mx-2 my-2" src={View} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">View </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableEdit} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Edit </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableDelete} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Delete </a>
            </div>

            <div className="flex w-[290px] h-9 absolute top-[736px] left-[697px] rounded-[10px] bg-[#EFF6FF]">
             <img className="w-5 h-5 mx-2 my-2" src={View} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">View </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableEdit} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Edit </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableDelete} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Delete </a>
            </div>

            <div className="flex w-[290px] h-9 absolute top-[782px] left-[697px] rounded-[10px] bg-[#EFF6FF]">
             <img className="w-5 h-5 mx-2 my-2" src={View} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">View </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableEdit} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Edit </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableDelete} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Delete </a>
            </div>

            <div className="flex w-[290px] h-9 absolute top-[828px] left-[697px] rounded-[10px] bg-[#EFF6FF]">
             <img className="w-5 h-5 mx-2 my-2" src={View} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">View </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableEdit} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Edit </a>
             <img className="w-6 h-6 ml-7 mr-2 my-1" src={TableDelete} />
             <a for="" className="font-Poppins font-semibold text-[10px] leading-[40px]">Delete </a>
            </div>

            <div className=" flex">
            <button className="w-[224px] h-[57px] absolute top-[968px] left-[284px] rounded-[10px] bg-[#214082] text-[#FFF500]">Quiz Report</button>
            <button className="w-[224px] h-[57px] absolute top-[968px] left-[582px] rounded-[10px] bg-[#214082] text-[#FFF500]">User Report</button>
            <button className="w-[224px] h-[57px] absolute top-[968px] left-[880px] rounded-[10px] bg-[#214082] text-[#FFF500]">Audit Report</button>
            </div>

            <div>
            <button className="w-[104px] h-[37px] absolute top-[1046px] left-[284px] rounded-[10px] bg-[#555555] text-[#FFFFFF]">Report 1</button>
            <button className="w-[104px] h-[37px] absolute top-[1046px] left-[404px] rounded-[10px] bg-[#555555] text-[#FFFFFF]">Report 2</button>
            <button className="w-[104px] h-[37px] absolute top-[1046px] left-[583px] rounded-[10px] bg-[#555555] text-[#FFFFFF]">Report 1</button>
            <button className="w-[104px] h-[37px] absolute top-[1046px] left-[703px] rounded-[10px] bg-[#555555] text-[#FFFFFF]">Report 2</button>
            <button className="w-[104px] h-[37px] absolute top-[1046px] left-[880px] rounded-[10px] bg-[#555555] text-[#FFFFFF]">Report 1</button>
            <button className="w-[104px] h-[37px] absolute top-[1046px] left-[1000px] rounded-[10px] bg-[#555555] text-[#FFFFFF]">Report 2</button>
            </div>

        </main>
      </div>
    </>
  );
}

export default page;
