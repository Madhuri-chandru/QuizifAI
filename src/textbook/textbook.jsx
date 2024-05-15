"use client";
import React, { useState ,useEffect} from "react";
import { Line } from "rc-progress";
import Switch from "react-switch";

// import ToggleButton from 'react-toggle-button'

// Navbar-icons
import QuizifAilogo from "../assets/Images/quiz-type/Quizifai 1.png";
import Dashboard from "../assets/Images/quiz-type/Dashboard.png";
import Quiz from "../assets/Images/quiz-type/Quiz.png";
import History from "../assets/Images/quiz-type/History.png";
import Schedule from "../assets/Images/quiz-type/Schedule.png";
import Notification from "../assets/Images/quiz-type/Notification.png";
import QuizAdmin from "../assets/Images/quiz-type/Quiz-admin.png";
import Profile from "../assets/Images/quiz-type/Profile.png";

// Main-Section-icons
import QuizTitle from "../assets/Images/quiz-type/Quiz-Title.png";
import Dropdown from "../assets/Images/quiz-type/Dropdown.png";
import QuizDiscription from "../assets/Images/quiz-type/Quiz-discription.png";
import Toggle from "../assets/Images/quiz-type/Toggle.png";
import Next from "../assets/Images/quiz-type/Next.png";
import Plus from "../assets/Images/quiz-type/Plus.png";
import Book from "../assets/Images/quiz-type/Book.png";
import Navigation from "../navbar/navbar";

const options1 =[
  {label: "Numbers"},
  {label: "10-30"},
  {label: "30-50"},
  {label: "50-70"},
  {label: "70-100"},
  {label: "100-150"},

]

const options2 =[
  {label: "Pages for you"},
  {label: "Education"},
  {label: "General"},
  {label: "Creative"},
 
]

const options3 =[
  {label: "Division"},
  {label: "Group A"},
  {label: "Group B"},
  {label: "Group C"},
  {label: "Group D"},
  {label: "Group E"},
]


const options4 =[
  {label: "Classes"},
  {label: "Class 1-4"},
  {label: "Class 5-8"},
  {label: "Class 9-10"},
  {label: "Class 11"},
  {label: "Class 12"},
]


const options5 =[
  {label: "Percentage"},
  {label: "95%"},
  {label: "90%"},
  {label: "85%"},
  {label: "80%"},
  {label: "60%"},
]
const options6 =[
  {label: "Complexity"},
  {label: "Simple"},
  {label: "Medium"},
  {label: "Complex"},
]
const options7 =[
  {label: "Duration"},
  {label: "20 Mins"},
  {label: "30 Mins"},
  {label: "60 Mins"},
  {label: "150 Mins"},
  {label: "150 Mins"},
]

const options8 =[
  {label: "Timings"},
  {label: "No"},
  {label: "Each questions different time"},
  {label: "All questions in same time"},
]

const options9 =[
  {label: "Minutes"},
  {label: "0.5 Min"},
  {label: "1 Min"},
  {label: "1.5 Min"},
  {label: "2 Min"},
  {label: "2.5 Min"},
]


export default function textbook() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [number, setNumber] = useState('')
  const [quizCategory, setQuizCategory] = useState('')
  const [multiAnswer, setMultiAnswer] = useState('')
  const [subCategory, setSubCategory] = useState('')
  const [classes, setClasses] = useState('')
  const [percentage, setPercentage] = useState('')
  const [Complexity, setComplexity] = useState('')
  const [retakeOption, setRetakeOption] = useState('')
  const [retake, setRetake] = useState('')
  const [duration, setDuration] = useState('')
  const [timings, setTimings] = useState('')
  const [minutes, setMinutes] = useState('')
  const [publicAccess, setPublicAccess] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    
    console.log('Selected file:', file.name);
  };
  const handleFileInputClick = () => {
    document.getElementById('fileInput').click();
  };

  useEffect(() => {
    const handleCsv = async () => {
      try {
        const response = await fetch(`https://quizifai.com:8010/crt_quiz_mnlly`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quiz_title: title,
            um_question: number,
            quiz_description: description,
            quiz_category_name: quizCategory,
            multi_answer: multiAnswer,
            quiz_sub_category_name: subCategory,
            class_name: classes,
            pass_percentage: percentage,
            quiz_complexity_name: Complexity,
            retake_flag: retake,
            quiz_duration: duration,
            quiz_time_bounded_questions: timings,
            quiz_public_access: publicAccess,
          }),
        });
  
        const responseData = await response.json();
        console.log(responseData, "data");
  
        if (response.ok) {
          router.push("/enter-quiz");
        } else {
          setErrorMessage(responseData.detail);
        }
      } catch (error) {
        console.error("Type-Quiz failed:", error);
        setErrorMessage("An error occurred while choosing the type of the quiz");
      }
    };
  
    handleCsv(); 
  }, []);
  

  const toggler1 =()=>{
    multiAnswer ? setMultiAnswer(false):setMultiAnswer(true);
  }
  const toggler2 =()=>{
    retakeOption ? setRetakeOption(false):setRetakeOption(true);
  }

  const toggler3 =()=>{
    publicAccess ? setPublicAccess(false):setPublicAccess(true);
  }


  function handleSelect1(event){
    setNumber(event.target.value)
  }

  function handleSelect2(event){
    setQuizCategory(event.target.value)
  }

  function handleSelect3(event){
    setSubCategory(event.target.value)
  }
  function handleSelect4(event){
    setClasses(event.target.value)
  }

  function handleSelect5(event){
    setPercentage(event.target.value)
  }
  
  function handleSelect6(event){
    setComplexity(event.target.value)
  }
  function handleSelect7(event){
    setDuration(event.target.value)
  }
  function handleSelect8(event){
    setTimings(event.target.value)
  }
  function handleSelect9(event){
    setMinutes(event.target.value)
  }

  return (
    
    <>
     <div>
        {/* Navigation-Section */}
        <header className="w-[219px] h-[1000px] absolute top-[-19px] left-[-9px] rounded-tl-[20px] rounded-bl-[20px] bg-[#F5F5FB] z-10 shadow-lg shadow-gray-400/60">
          {/* <div className="h-[300px] w-[270px] absolute top-[20px] -left-[20px]">
            <img src={QuizifAilogo} alt="QuizifAi Logo Icon" />
          </div> */}

          {/* Navigation-icons */}
          {/* <div className="flex w-[15px] h-[15px] absolute top-[231px] left-[51px]">
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
              Quiz
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

          <div className="flex w-[25.46px] h-[27.87px] absolute top-[508px] left-[51px]">
            <img className="-ml-2.5" src={QuizAdmin} alt="QuizAdmin img" />
            <a
              className="ml-4 text-Poppins font-medium text-[15px] leading-[15px] text-nowrap text-[#30304F]"
              for=""
            >
              Quiz Admin
            </a>
          </div>

          <div className="flex w-[17px] h-[17px] absolute top-[581px] left-[51px]">
            <img src={Profile} alt="Profile img" />
            <a
              className="ml-4 -mt-0.5 text-Poppins font-medium text-[15px] leading-[22.5px] text-[#9696BB]"
              for=""
            >
              Profile
            </a>
          </div> */}
          <Navigation/>
        </header>

        <main className="w-max-auto">
          <div className="w-[761px] h-[48px] absolute top-[30px] left-[161px] rounded-[10px] bg-[#FFEDCD] z-0">
            <h1 className="font-Poppins font-semibold text-[25px] leading-[37.5px] text-[#555555] flex justify-center items-center mt-2 ml-20">
            Configure and click next to import your Text Book
            </h1>
          </div>

          <div className="flex">
            <div className="w-[51px] h-[37px] absolute top-[102px] left-[284px]">
              <img src={QuizTitle} alt="QuizTitle icon" />
            </div>

            <div className="w-[201px] h-[22px] absolute top-[111px] left-[352px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Quiz Title
              </h1>
            </div>

            <div className="">
              <input className="w-[260px] h-[43px] absolute top-[99px] left-[498px] rounded-[10px] border bg-[#F4F4F4]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}></input>
            </div>

            <div className="w-[201px] h-[23px] absolute top-[109px] left-[779px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Number of Question
              </h1>
            </div>

            <div className=" rounded-lg absolute top-[99px] left-[987px]">
              <select className="w-[135px] border-solid border-[#B8BBC2] border-[1.8px] px-3 py-3 rounded-md text-[12px] font-medium leading-[18px] cursor-pointer" 
              onChange={handleSelect1} value={number}>
                {options1.map(options1 =>(
                <option className="border-grey-400 leading-[18px] text-[12px] font-medium"
                 >{options1.label}</option>
                  ))}
              </select>
              
            </div>

          </div>
          <div className="flex">
            <div className="w-[43px] h-[43px] absolute top-[166px] left-[283px]">
              <img src={QuizDiscription} alt="QuizDiscription icon" />
            </div>

            <div className="w-[201px] h-[22px] absolute top-[174px] left-[352px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Quiz Description
              </h1>
            </div>

            <div className="">
              <input className="w-[634px] h-[45px] absolute top-[163px] left-[498px] rounded-[10px] border bg-[#F4F4F4]"
              value={description}
              onChange={(e) =>setDescription(e.target.value)}></input>
            </div>
          </div>

          <div className="flex">
            <div className="w-[201px] h-[27px] absolute top-[248px] left-[284px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Quiz Category
              </h1>
            </div>

            <div className=" rounded-lg w-[260px] flex border-solid border-[#B8BBC2] border-[1.8px] text-[12px] font-medium leading-[18px] absolute top-[240px] left-[498px]">
            <select className="w-[260px] border-solid border-[#B8BBC2] px-3 py-3 rounded-md cursor-pointer" onChange={handleSelect2} value={quizCategory}>
                {options2.map(options2 =>(
                <option className="border-grey-400 leading-[18px] text-[12px] font-medium rounded"
                 >{options2.label}</option>
                 
                  ))}
              </select>
            </div>

            <div className="w-[22px] h-[22px] absolute top-[261px] left-[764px]">
                <img src={Plus}/>
            </div>

            <div className="w-[164px] h-[30px] absolute top-[247px] left-[812px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Multiple Answers
              </h1>
            </div>
           
           
            <div className="w-[36px] h-5 absolute top-[251px] left-[945px]">  
           <Switch onClick={toggler1}/>
            </div>

            <div className="w-[164px] h-[30px] absolute top-[247px] left-[1003px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
              Public access
              </h1>
            </div>
           
           
            <div className="w-[36px] h-5 absolute top-[251px] left-[1113px]">
            <Switch onClick={toggler3}/>
            </div>
          </div>

          <div className="flex">
            <div className="w-[201px] h-[27px] absolute top-[314px] left-[284px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Sub Category
              </h1>
            </div>

            <div className=" rounded-lg w-[260px] flex border-solid border-[#B8BBC2] border-[1.8px] text-[12px] font-medium leading-[18px] absolute top-[306px] left-[498px]">
            <select className="w-[260px] border-solid border-[#B8BBC2] px-3 py-3 rounded-md cursor-pointer" onChange={handleSelect3} value={subCategory}>
                {options3.map(options3 =>(
                <option className="border-grey-400 leading-[18px] text-[12px] font-medium rounded"
                 >{options3.label}</option>
                 
                  ))}
              </select>
            </div>
            
            <div className="w-[22px] h-[22px] absolute top-[333px] left-[764px]">
                <img src={Plus}/>
            </div>

            <div className="w-[109px] h-[27px] absolute top-[314px] left-[810px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Classes
              </h1>
            </div>

            
            <div className=" rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[306px] left-[889px]">
              <div className=" border-grey-400 leading-[18px] text-[12px] font-medium  px-4 py-3 rounded">
                Course
              </div>
              <img
                className="w-5 h-5 flex mt-3 ml-5 cursor-pointer"
                src={Dropdown}
                alt="Dropdown Icon for Division"
              />
            </div>
            <div className=" rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[306px] left-[1041px]">
              <div className=" border-grey-400 leading-[18px] text-[12px] font-medium  px-4 py-3 rounded">
                Classes
              </div>
              <img
                className="w-5 h-5 flex mt-3 ml-5 cursor-pointer"
                src={Dropdown}
                alt="Dropdown Icon for Division"
              />
            </div>
          </div>
          <div className="rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] text-[12px] font-medium leading-[18px] absolute top-[306px] left-[1041px]">
          <select className="w-[260px] border-solid border-[#B8BBC2] px-3 py-3 rounded-md cursor-pointer" onChange={handleSelect4} value={classes}>
                {options4.map(options4 =>(
                <option className="border-grey-400 leading-[18px] text-[12px] font-medium rounded"
                 >{options4.label}</option>
                 
                  ))}
              </select>
            </div>


            
          <div className="flex">
            <div className="w-[164px] h-[30px] absolute top-[383px] left-[284px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Pass percentage
              </h1>
            </div>

            <div className=" rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[376px] left-[498px]">
            <select className="w-[129px] px-3 py-3 rounded-md cursor-pointer text-[12px]" onChange={handleSelect5} value={percentage}>
                {options5.map(options5 =>(
                <option className="border-grey-400 leading-[18px] font-medium rounded"
                 >{options5.label}</option>
                 
                  ))}
              </select>
            </div>

            <div className="w-[164px] h-[30px] absolute top-[383px] left-[779px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Complexity{" "}
              </h1>
            </div>
            <div className=" rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[376px] left-[890px]">
            <select className="w-[129px] px-3 py-3 rounded-md cursor-pointer text-[12px]" onChange={handleSelect6} value={Complexity}>
                {options6.map(options6 =>(
                <option className="border-grey-400 leading-[18px] font-medium rounded"
                 >{options6.label}</option>
                 
                  ))}
              </select>
            </div>
          </div>


          <div className="flex">
            <div className="w-[174px] h-[30px] absolute top-[456px] left-[284px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Quiz Duration
              </h1>
            </div>

            <div className=" rounded-lg w-[129px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[449px] left-[498px]">
            <select className="w-[129px] px-3 py-3 rounded-md cursor-pointer text-[12px]" onChange={handleSelect7} value={duration}>
                {options7.map(options7 =>(
                <option className="border-grey-400 leading-[18px] font-medium rounded"
                 >{options7.label}</option>
                 
                  ))}
              </select>
            </div>

            <div className="w-[238px] h-[30px] absolute top-[452px] left-[689px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Time bounded Questions{" "}
              </h1>
            </div>

            <div className=" rounded-lg w-[254px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[440px] left-[888px]">
            <select className="w-[254px] px-3 py-3 rounded-md cursor-pointer text-[12px]" onChange={handleSelect8} value={timings}>
                {options8.map(options8 =>(
                <option className="border-grey-400 leading-[18px] font-medium rounded"
                 >{options8.label}</option>
                 
                  ))}
              </select>
            </div>
          </div>

          <div className="flex">
            <div className="w-[164px] h-[30px] absolute top-[521px] left-[284px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Retake Option
              </h1>
            </div>

            <div className="w-[36px] h-5 absolute top-[521px] left-[505px]">
            <Switch onClick={toggler2}/>
            </div>

            <div className="">
              <input className="w-[48px] h-[35px] absolute top-[515px] left-[580px] rounded-[10px] border-[1.8px] bg-[#F4F4F4] "
               value={retake}
               onChange={(e) => setRetake(e.target.value)}></input>
            </div>
          </div>

          <div className="flex">
            <div className="w-[253px] h-[30px] absolute top-[590px] left-[284px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
              Quiz Starts from
              </h1>
            </div>

            <div className=" rounded-lg w-[156px] h-[43px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[584px] left-[498px] bg-[#F4F4F4]">
            <input className="rounded-lg w-[156px] h-[43px] flex border-solid border-[#B8BBC2] border-[1.8px]
              text-[#9696BB] leading-[22.5px] text-[15p] font-medium bg-[#F4F4F4] px-4" placeholder="DD/MM/YYYY">
              </input>
            </div>

            <div className="w-[233px] h-[30px] absolute top-[590px] left-[689px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
              Quiz will expire on{" "}
              </h1>
            </div>

            <div className=" rounded-lg w-[156px] h-[43px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[584px] left-[888px] bg-[#F4F4F4]">
            <input className="rounded-lg w-[156px] h-[43px] flex border-solid border-[#B8BBC2] border-[1.8px]
              text-[#9696BB] leading-[22.5px] text-[15p] font-medium bg-[#F4F4F4] px-4" placeholder="DD/MM/YYYY">
                
              </input>
              </div>
          </div>

          <dijukv className="flex">

            <div className="w-[174px] h-[30px] absolute top-[521px] left-[695px]">
              <h1 className="font-Poppins font-semibold text-[15px] leading-[22.5px]">
                Time per question{" "}
              </h1>
            </div>

            <div className=" rounded-lg w-[110px] flex border-solid border-[#B8BBC2] border-[1.8px] absolute top-[514px] left-[888px]">
            <select className="w-[110px] px-3 py-3 rounded-md cursor-pointer text-[12px]" onChange={handleSelect9} value={minutes}>
                {options9.map(options9 =>(
                <option className="border-grey-400 leading-[18px] font-medium rounded"
                 >{options9.label}</option>
                 
                  ))}
              </select>
            </div>
          
          </dijukv>

          <div className="w-[140.68px] h-[37.09px] absolute top-[681px] left-[654.43px] rounded-[10px] bg-[#1E4DE9]">
          <label htmlFor="fileInput" className="font-Poppins font-medium text-[15px] leading-[22.5px] flex justify-start px-4 py-2 text-white cursor-pointer" onClick={handleFileInputClick}>
          Upload
          <img className="w-[24px] h-[24px] ml-4 -rotate-90" src={Next} alt="Next"/>
          <img className="w-[26px] h-[26px] ml-1" src={Book}/>
        </label>
        <input id="fileInput" type="file" accept=".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={handleFileInputChange} className="hidden" />

            <div className="w-[137.09px] h-[9.05px] absolute top-[740.11px] -mt-[680px]">
              <Line percent={50} strokeWidth={5} strokeColor="#FCE7E7" />
            </div>
            <h1 className="font-Poppins font-normal text-[10px] leading-[15px] text-[#555555] mt-7 ml-5">Uploading 50%</h1>
            
          </div>
        </main>
      </div>
    </>
  );
};
