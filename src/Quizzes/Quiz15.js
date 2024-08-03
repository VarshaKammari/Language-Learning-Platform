import React, { useState,useRef } from 'react';
import './Quiz.css';
import Lock15 from '../Locks/Lock15';

function Quiz15() {
    const questions=[
        {
            qtext:"Identify the word that signifies 'Please' in Telugu?",
            option1:"శుభోదయం",
            option2:"దయచేసి",
            option3:"మీ పేరు ఏమిటి?",
            option4:"నాకు ఆకలి వేస్తుంది",
            
            ans:2,
    
        },
        {
            qtext:"Identify the word that signifies 'How much is this?' in Telugu?",
            option1:"క్షమించండి",
            option2:"నమస్కారం",
            option3:"ఇది ఎంత?",
            option4:"నా బిల్లు ఇవ్వండి",
           
            ans:3,
    
        },
        {
            qtext:"Identify the word that signifies 'What is your name?' in Telugu?",
            option1:"ధన్యవాదాలు",
            option2:"శుభోదయం",
            option3:"శుభ రాత్రి",
            option4:"మీ పేరు ఏమిటి?",
            
            ans:4,
    
        },
        {
            qtext:"Identify the word that signifies 'I am fine' in Telugu?",
            option1:"వీడ్కోలు",
            option2:"దయచేసి",
            option3:"అవును",
            option4:"నేను బాగున్నాను",
            
            ans:4,
    
        },
        {
            qtext:"Identify the word that signifies 'How are you?' in Telugu?",
            option1:"మీరు ఎలా ఉన్నారు?",
            option2:"కాదు",
            option3:"నాకు ఆకలి వేస్తుంది",
            option4:"దయచేసి",
           
            ans:1,
    
        }
    ];
    const [currQ,setCurrQ]=useState(0);
    const [lock,setLock]=useState(false);
    const [score,setScore]=useState(0);
    const [result,setResult]=useState(false);
    const [heading,setHeading]=useState("Its Quiz time!🧠");
    

    let Option1=useRef(null);
    let Option2=useRef(null);
    let Option3=useRef(null);
    let Option4=useRef(null);
    let nbtn=useRef(null);
    let main=useRef(null);

    let option_array=[Option1,Option2,Option3,Option4];

    

    const checkAns=(e,ans) => {
        if(lock===false){
            if(questions[currQ].ans===ans)
            {
                e.target.classList.add("correct");
                setScore(prev=>prev+1);
            }else{
                e.target.classList.add("wrong");
                option_array[questions[currQ].ans-1].current.classList.add("correct");
            }
            nbtn.current.classList.remove("q-lock");
            setLock(true);
        }
    };

    const next=()=>{
        if(lock===true){
            if(currQ===questions.length-1){
                setResult(true);
                main.current.classList.add('q-dis');
                if(score>=3){
                    setHeading("Congratulations🎉\n,New level unlocked!")
                }else{
                    setHeading("Back to the lesson👈")
                }
            }
            setCurrQ(prev=>prev+1);
            nbtn.current.classList.add("q-lock");
            setLock(false);
            option_array.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    };
    
    return (
    <div className='q-wrapper'>
      <h1>{heading}</h1> 
      <div className="q-main" ref={main}>
        {result ? 
        <>
            <div className='q-res'>You have Scored {score} out of {questions.length}</div> 
            <Lock15 score={score} target={3}/>
        </>
        : 
        <>
        <div className="q-block">
            <div className='q-count'>
                <span>Question {currQ+1}</span>/{questions.length}
            </div>
            <div className='q-text'>{questions[currQ].qtext}</div>
           
        </div>
        <div className="options">
           <dd>
                <dl ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{questions[currQ].option1}</dl>
                <dl ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{questions[currQ].option2}</dl>
                <dl ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{questions[currQ].option3}</dl>
                <dl ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{questions[currQ].option4}</dl>
           </dd>
           <button className='n-bn q-lock' ref={nbtn} onClick={next}>Next</button>
        </div>
        </>}
        
      </div>  
      </div>    
    )
}

export default Quiz15;

