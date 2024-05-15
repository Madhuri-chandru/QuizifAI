//import Head from 'next/head';
//import img from 'next/image';
import { useEffect, useState } from 'react';
import styles from './quizquestions.module.css';
import numberIcon from "../assets/Images/images/questions/numberIcon.png"; 
import iconA from "../assets/Images/images/questions/IconA.png";
import iconB from "../assets/Images/images/questions/IconB.png";
import iconC from "../assets/Images/images/questions/IconC.png";
import iconD from "../assets/Images/images/questions/IconD.png"; 
import clockIcon from "../assets/Images/images/questions/clock.png";
import LeftBar from "../leftbar/leftbar";


const QuizQuestions = () => {

  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetch('https://quizifai.com:8010/access_quiz_for_master', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quiz_id: 963,
        user_id: 1
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setQuizData(data.data);
      initializeAnswers(data.data.questions);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
  }, []);
function getIcon(option) {
  switch (option.quiz_ans_option_id) {
    case option.quiz_ans_option_1_id:
      return iconA;
    case option.quiz_ans_option_2_id:
      return iconB;
    case option.quiz_ans_option_3_id:
      return iconC;
    case option.quiz_ans_option_4_id:
      return iconD;
    default:
      return null;
  }
}
const initializeAnswers = (questions) => {
  const initialAnswers = {};
  questions.forEach(question => {
    initialAnswers[question.question_id] = null;
  });
  setAnswers(initialAnswers);
};

const handleOptionSelect = (optionId) => {
  setSelectedOption(optionId);
  setAnswers(prevAnswers => ({
    ...prevAnswers,
    [quizData.questions[currentQuestionIndex].question_id]: optionId
  }));
};

const handleNextQuestion = () => {
  if (currentQuestionIndex < quizData.questions.length - 1) {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    setSelectedOption(null);
  }
};

const handlePreviousQuestion = () => {
  if (currentQuestionIndex > 0) {
    setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    setSelectedOption(null);
  }
};

const handleSubmit = () => {
  // Submit answers
  console.log(answers);
  // You can implement your logic to submit answers to the server here
};

if (!quizData) {
  return <div>Loading...</div>;
}

const currentQuestion = quizData.questions[currentQuestionIndex];
  return (
    <div className={styles.container}>
      {/*<Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
  </Head>*/}
      <LeftBar/>
      <div className={styles.mainContent}>
          <h1 className={styles.quizTitle}>{quizData.quiz_title}</h1>
          <div className={styles.imageContainer}>
          <img
    src={numberIcon} 
    alt="Logo"
    width={59}
    height={59}
    className={styles.logoImage}
  />
        <div className={styles.textContainer}>
        <p>{currentQuestion.question_text}</p>
        </div>
        
    </div>
    <div className={styles.boxesContainer}>

    <div className={styles.icon}>
    <ul>
          {Object.keys(currentQuestion).map(key => {
            if (key.startsWith('quiz_ans_option_') && key.endsWith('_text')) {
              const optionId = currentQuestion[key.replace('_text', '_id')];
              return (
                <li key={optionId} >
                  <button className={styles.box}
                    onClick={() => handleOptionSelect(optionId)}
                    style={{ fontWeight: selectedOption === optionId ? 'bold' : 'normal' }}
                  >
                    {currentQuestion[key]}
                  </button>
                </li>
              );
            }
            return null;
          })}
        </ul>
    </div>


<div className={styles.buttonsContainer}>
<div>
        <button className={styles.button} style={{ color: '#FFFFFF', backgroundColor: '#FEBB42', height: '52px', borderRadius: '10px', border: 'none' }} onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Previous</button>
        {currentQuestionIndex === quizData.questions.length - 1 && <button className={styles.button}              style={{ marginLeft: '50px', backgroundColor: '#8453FC', height: '52px', borderRadius: '10px', border: 'none', color: '#FFFFFF' }}
 onClick={handleSubmit}>Submit</button>}
        <button className={styles.button} style={{ marginLeft: '50px', backgroundColor: '#8453FC', height: '52px', borderRadius: '10px', border: 'none', color: '#FFFFFF' }} onClick={handleNextQuestion} disabled={currentQuestionIndex === quizData.questions.length - 1}>Next</button>
      </div>
</div>

    </div>
    
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.sentence1} style={{marginTop:"110px"}}>1 out of  {quizData.num_questions}</div>
          <div className={styles.sentence2} style={{marginTop:"170px"}}>Total timer: </div>
          <div className={styles.sentence3} style={{marginTop:"230px"}}>HH:MM:SS</div>
          <div className={styles.sentence4} style={{marginTop:"290px", marginLeft:"-140px"}}>Quiz timer: </div>
          <div className={styles.imageContainer} style={{marginTop: "350px", marginLeft: "-100px"}}>
    <img
      src={clockIcon} 
      alt="Icon"
      width={100}
      height={100}
      className={styles.clockIcon}
    />
  </div>
      </div>
    
  );
};

export default QuizQuestions;
