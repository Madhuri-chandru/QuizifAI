import React, {useRef} from 'react'
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import QuizifAilogo from "../assets/Images/quiz-type/Quizifai 1.png";

export default function pdf2 (){

    const reportTemplateRef = useRef(null);
  const downloadPDF2 = async ()=>{
    const input = reportTemplateRef.current;

    try{
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
            orientation:"portrait",
            unit: 'px',
            format:"a4"
        });

        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width)/canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, width,height);
        pdf.save("document1.pdf");
    
    }catch(error){
        console.error("Error generating PDF:",error);
    }
    

  };

  return (
    <>
    <div className='h-[1000px] w-full' ref={reportTemplateRef}>
    <div className='h-[150px] w-full bg-amber-50'>
     <h1 className='text-[30px] font-semibold font-serif pl-[200px] pt-[30px] '>Online Quiz</h1>
              <p className=' pl-[200px] pt-[10px] text-lg font-semibold'>Yoh have 45  minutes to take the quiz</p>
              <img className='h-[300px] w-[270px]  absolute -top-[80px] left-[860px]' src={QuizifAilogo} alt="QuizifAi Logo Icon" />
              <h1 className='pl-5 pt-[80px]'>1.<span className='font-serif'>
            Which of the following is not a correct way to state a null hypothesis?
             </span></h1>
             
             <input className='ml-8 text-xs' type='radio' name='options1' value='option-1'/>H0: ˆ ˆ 0 p1 − p2 = 0 <br/>
             <input className='ml-8 text-xs' type='radio' name='options1' id='female' value='option-2'/>H0: µd = 10<br/>
             <input className='ml-8 text-xs' type='radio' name='options1' id='female' value='option-3'/>H0: µ1 − µ2 = 0 <br/>
             <input className='ml-8 text-xs' type='radio' name='options1' id='female' value='option-4'/>H0: p = .5 

             <h1 className='pl-5 pt-[20px]'>2. <span className='font-serif'>
             A result is called “statistically significant” whenever
             </span></h1>
             
             <input className='ml-8 text-xs' type='radio' name='options2' value='option-1'/>The null hypothesis is true.<br/>
             <input className='ml-8 text-xs' type='radio' name='options2' id='female' value='option-2'/>The alternative hypothesis is true.<br/>
             <input className='ml-8 text-xs' type='radio' name='options2' id='female' value='option-3'/>The p-value is less or equal to the significance level <br/>
             <input className='ml-8 text-xs' type='radio' name='options2' id='female' value='option-4'/>The p-value is larger than the significance level. 

             <h1 className='pl-5 pt-[20px]'>3. <span className='font-serif'>
             A test of H0: µ = 0 versus Ha: µ 0 is conducted on the same population independently<br/> by two
             different researchers. They both use the same sample size and the same value of <br/>α = 0.05. Which of
             the following will be the same for both researchers? 
             </span></h1>
             
             <input className='ml-8 text-xs' type='radio' name='options3' value='option-1'/>The p-value of the test. <br/>
             <input className='ml-8 text-xs' type='radio' name='options3' id='female' value='option-2'/>The power of the test if the true µ = 6. <br/>
             <input className='ml-8 text-xs' type='radio' name='options3' id='female' value='option-3'/>The value of the test statistic. <br/>
             <input className='ml-8 text-xs' type='radio' name='options3' id='female' value='option-4'/>The decision about whether or not to reject the null hypothesis.  
        
    </div>
    <button className='bg-blue-400 rounded-md px-3 py-3 relative left-[50px] top-[550px] mb-10 hover:bg-blue-300' onClick={downloadPDF2}>Download PDF</button>
  </div>
     

    </>
  )
}

