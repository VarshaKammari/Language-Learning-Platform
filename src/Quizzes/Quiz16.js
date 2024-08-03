import React, { useState,useRef } from 'react';
import './Quiz.css';
import Lock16 from '../Locks/Lock16';

function Quiz16() {
    const questions=[
        {
            qtext:"Identify the word that signifies '40' in Telugu?",
            option1:"నేను తినను",
            option2:"నలభై",
            option3:"కుమ్మరి",
            option4:"మరదలు",
            
            ans:2,
    
        },
        {
            qtext:"Identify the word that signifies 'Father' in Telugu?",
            option1:"క్షమించండి",
            option2:"న్యాయవాది ",
            option3:"తండ్రి",
            option4:"మూడు",
           
            ans:3,
    
        },
        {
            qtext:"Identify the word that signifies 'What is your name?' in Telugu?",
            option1:"ధన్యవాదాలు",
            option2:"శుభోదయం",
            option3:"ఐదు",
            option4:"మీ పేరు ఏమిటి?",
            
            ans:4,
    
        },
        {
            qtext:"Identify the word that signifies 'Please' in Telugu?",
            option1:"వీడ్కోలు",
            option2:"దయచేసి",
            option3:"ఎనిమిది",
            option4:"నేను బాగున్నాను",
            
            ans:2,
    
        },
        {
            qtext:"Identify the word that signifies 'Scientist' in Telugu?",
            option1:"శాస్త్రవేత్త",
            option2:"మూడు",
            option3:"నాకు ఆకలి వేస్తుంది",
            option4:"దయచేసి",
           
            ans:1,
    
        },
        {
            qtext:"Identify the word that signifies 'He ate' in Telugu?",
            option1:"ఆమె తినదు",
            option2:"తమ్ముడు",
            option3:"అతడు తిన్నాడు",
            option4:"మేము",
         
            ans:3,
    
        },
        {
            qtext:"Identify the word that signifies 'Elder Sister' in Telugu?",
            option1:"అక్క",
            option2:"నువ్వు తిన్నావు",
            option3:"ఏనభై",
            option4:"వడ్రంగి",
            
            ans:1,
    
        },
        {
            qtext:"Identify the word that signifies 'Farmer' in Telugu?",
            option1:"ముప్పై",
            option2:"కాదు",
            option3:"రైతు",
            option4:"ధన్యవాదాలు",
            ans:3,
    
        },
        {
            qtext:"Identify the word that signifies '80' in Telugu?",
            option1:"ఏనభై",
            option2:"పది",
            option3:"శుభ రాత్రి",
            option4:"రక్షకభటుడు",
            ans:1,
    
        },
        {
            qtext:"Identify the word that signifies 'Sister-in-law' in Telugu?",
            option1:"నువ్వు తింటావు",
            option2:"సైనికుడు",
            option3:"నువ్వు ఏమి చేస్తున్నావు?",
            option4:"మరదలు",
    
            ans:4,
    
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
                if(score>=5){
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
            <Lock16 score={score} target={5}/>
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

export default Quiz16;

