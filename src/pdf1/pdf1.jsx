import React, { useRef ,useState, useEffect} from 'react'
import QuizifAilogo from "../assets/Images/quiz-type/Quizifai 1.png";
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

export default function pdf1 (){

    // const [subject, setSubject] = useState([]);  
    // const [question1, setQuestion1] = useState([]);  

    // useEffect(() => {
    //     const downloadPDF = async () => {
    //       try {
    //         const response = await fetch(
    //           `https://quizifai.com:8010/access_quiz_for_master`
    //         );
    //         if (!response.ok) {
    //           throw new Error("Failed to fetch quiz data");
    //         }
    //         const data = await response.json();
    //         setSubject(data.quiz_sub_category_name)
            
           
    //       } catch (error) {
    //         console.error("Error fetching quiz data:", error);
    //       }
    //     };
    
    //     downloadPDF();
    //   }, []);
    
    

const pdfRef1 = useRef(null);
const downloadPDF1 = async ()  =>{
    const input = pdfRef1.current;

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
    <div className='h-full w-full' ref={pdfRef1}>
    <h1 className='font-serif font-bold text-center relative top-5 text-[25px] mt-20'><span className='text-red-600'>KENDRIYA VIDYALAYA SANGATHAN, RAIPUR REGION </span><br/>
    <span>SCIENCE</span> <br/>CLASS IX (THEORY)
    <br/>SAMPLE QUESTION PAPER - II <br/>2024</h1>
    <img className='h-[130px] w-[130px]  absolute top-[160px] left-[150px] border-4 border-solid' src={QuizifAilogo} alt="QuizifAi Logo Icon" />
            <h1 className='font-serif font-bold text-left relative top-[50px] pl-[150px] pt-10 text-[20px]'>Hall Ticket No:</h1>
            <h1 className='font-serif font-bold text-left relative top-6 pl-[150px] pt-6 text-[20px]'>Time:<span className='font-thin font-none pl-1'>60 Min</span></h1>
            <h1 className='font-serif font-bold text-left relative -top-10 pl-[950px]  text-[20px]'>Subject Code:</h1>
            <h1 className='font-serif font-bold text-left relative -top-10 pl-[950px] text-[20px]'>Maximum Marks:<span className='font-thin font-none pl-1'>75</span></h1>
            <h1 className='font-serif font-semibold text-center text-[25px] relative text-blue-900 mt-5 pl-20 -ml-20'>Multiple Choice Questions</h1>

            <div className='flex'>
                <h1 className='pl-[200px] pt-[35px] text-bold font-serif text-[21px] pr-3'>1.</h1>
                <span className='pt-[40px] pr-[350px]'>
                Seema visited a Natural Gas Compressing Unit and found that the gas can
                be liquefied under specific conditions of temperature and pressure. While
                sharing her experience with friends she got confused. Help her to identity
                the correct set of conditions.
                </span>
            </div>
            <span className=' font-serif pl-[220px]'>(a) Low temperature, low pressure</span><br/>
             <span className=' font-serif pl-[220px]'>(b) High temperature, low pressure</span><br/>
             <span className=' font-serif pl-[220px]'>(c) Low temperature, high pressure</span><br/>
             <span className=' font-serif pl-[220px]'>(d) High temperature, high pressure</span>
             <span className='pl-[330px]'>(1)</span>

             <div className='flex'>
                <h1 className='pl-[200px] pt-[15px] text-bold font-serif text-[20px] pr-3'>2.</h1>
                <span className='pt-[18px] pr-[350px]'>
                Which of the following are physical changes?
                </span>
            </div>
            <span className=' font-serif pl-[220px]'>(i) Melting of iron metal</span><br/>
             <span className=' font-serif pl-[220px]'>(ii) Rusting of iron</span><br/>
             <span className=' font-serif pl-[220px]'>(iii) Bending of an iron rod</span><br/>
             <span className=' font-serif pl-[220px]'>(iv) Drawing a wire of iron metal</span><br/>

             <span className=' font-serif pl-[220px]'>(a) (i), (ii) and (iii)</span><br/>
             <span className=' font-serif pl-[220px]'>(b) (i), (ii) and (iv)</span><br/>
             <span className=' font-serif pl-[220px]'>(c) (i), (iii) and (iv)</span><br/>
             <span className=' font-serif pl-[220px]'>(d) (ii), (iii) and (iv)</span>
             <span className='pl-[459px]'>(1)</span>

             <div className='flex'>
                <h1 className='pl-[200px] pt-[10px] text-bold font-serif text-[20px] pr-3'>3.</h1>
                <span className='pt-[14px] pr-[350px]'>
                Which one of the following has maximum number of atoms?
                </span>
            </div>
            <span className=' font-serif pl-[220px]'>(a) 18 g of H2O</span><br/>
             <span className=' font-serif pl-[220px]'>(b) 18 g of O2</span><br/>
             <span className=' font-serif pl-[220px]'>(c) 18 g of CO2</span><br/>
             <span className=' font-serif pl-[220px]'>(d) 18 g of CH4</span>
             <span className='pl-[479px]'>(1)</span>

             <div className='flex'>
                <h1 className='pl-[200px] pt-[15px] text-bold font-serif text-[20px] pr-3'>4.</h1>
                <span className='pt-[17px] pr-[350px]'>
                In a sample of ethyl ethanoate (CH3COOC2H5) the two oxygen atoms have
                the same number of electrons but different number of neutrons. Which of
                the following is the correct reason for it?
                </span>
            </div>
            <span className=' font-serif pl-[220px]'>(a) One of the oxygen atoms has gained electrons</span><br/>
             <span className=' font-serif pl-[220px]'>(b) One of the oxygen atoms has gained two neutrons</span><br/>
             <span className=' font-serif pl-[220px]'>(c) The two oxygen atoms are isotopes</span><br/>
             <span className=' font-serif pl-[220px]'> (d) The two oxygen atoms are isobars.</span>
             <span className='pl-[320px]'>(1)</span>

             <h1 className='text-xs pl-[1000px] pt-10 pb-10 font-semibold'>16-04-2018</h1>
     
         <button className='bg-blue-400 rounded-md px-3 py-3 relative left-[500px] mb-10 hover:bg-blue-300' onClick={downloadPDF1}>Download PDF</button>


    </div>
    </>
    
  )
};