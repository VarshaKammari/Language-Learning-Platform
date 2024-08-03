import React, { useState,useRef } from 'react';
import './Quiz.css';
import Lock13 from '../Locks/Lock13';

function Quiz13() {
    const questions=[
        {
            qtext:"Identify the word that signifies 'Father-in-law' in Telugu?",
            option1:"మరదలు",
            option2:"తండ్రి",
            option3:"మామయ్య",
            option4:"అన్నయ్య",    
            ans:3,
        },
        {
            qtext:"Identify the word that signifies 'Grandmother (Mother's mother)' in Telugu?",
            option1:"అక్క",
            option2:"అమ్మమ్మ",
            option3:"మరిది",
            option4:"మరదలు",
            ans:2,
        },
        {
            qtext:"Identify the word that signifies 'Wife' in Telugu?",
            option1:"నానమ్మ",
            option2:"తండ్రి",
            option3:"భార్య",
            option4:"తమ్ముడు",
            ans:3,    
        },
        {
            qtext:"Identify the word that signifies 'Younger Sister' in Telugu?",
            option1:"చెల్లి",
            option2:"తాత",
            option3:"మరిది",
            option4:"కూతురు",
            ans:1,    
        },
        {
            qtext:"Identify the word that signifies 'Grandmother (Father's mother)' in Telugu?",
            option1:"తల్లి",
            option2:"తాత",
            option3:"నానమ్మ",
            option4:"మామయ్య",
            ans:3,    
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
            <Lock13 score={score} target={3}/>
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

export default Quiz13;

