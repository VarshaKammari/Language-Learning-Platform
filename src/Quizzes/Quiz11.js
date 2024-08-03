import React, { useState, useRef } from 'react';
import './Quiz.css';
import Lock11 from '../Locks/Lock11';

function Quiz11() {
    const questions = [
        {
            qtext:"Identify the word that signifies this image?",
            option1:"చాకలి",
            option2:"నేత పనివాడు",
            option3:"రక్షకభటుడు",
            option4:"కుమ్మరి",
            ans:3,
            imagePath:"/Letters/police.jpg"
        },
        {
            qtext:"Identify the word that signifies this image?",
            option1:"గొర్రెల కాపరి ",
            option2:"మంగలి",
            option4:"వడ్రంగి ",
            option3:"శాస్త్రవేత్త",
            ans:3,
            imagePath:"/Letters/scientist.png"
        },
        {
            qtext:"Identify the word that signifies this image?",
            option4:"ఆచార్యుడు",
            option2:"చెఫ్ ",
            option3:"రక్షకభటుడు",
            option1:"న్యాయవాది ",
            ans:4,
            imagePath:"/Letters/professor.jpeg"
        },
        {
            qtext:"Identify the word that signifies this image?",
            option1:"గొర్రెల కాపరి ",
            option2:"రైతు",
            option3:"ఆచార్యుడు ",
            option4:"శాస్త్రవేత్త",
            ans:2,
            imagePath:"/Letters/raithu.jpg"
        },
        {
            qtext:"Identify the word that signifies this image?",
            option1:"చెఫ్ ",
            option2:"స్వర్ణకారుడు",
            option3:"సైనికుడు",
            option4:"రైతు",
            ans:3,
            imagePath:"/Letters/soldier.jpeg"
        }
    ];

    const [currQ, setCurrQ] = useState(0);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);
    const [heading, setHeading] = useState("It's Quiz time!🧠");

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);
    let nbtn = useRef(null);
    let main = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (!lock) {
            if (questions[currQ].ans === ans) {
                e.target.classList.add("correct");
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                option_array[questions[currQ].ans - 1].current.classList.add("correct");
            }
            nbtn.current.classList.remove("q-lock");
            setLock(true);
        }
    };

    const next = () => {
        if (lock) {
            if (currQ === questions.length - 1) {
                setResult(true);
                main.current.classList.add('q-dis');
                setHeading(score >= 3 ? "Congratulations🎉\n,New level unlocked!" : "Back to the lesson👈");
            }
            setCurrQ(prev => prev + 1);
            nbtn.current.classList.add("q-lock");
            setLock(false);
            option_array.forEach(option => {
                option.current.classList.remove("wrong", "correct");
            });
        }
    };

    return (
        <div className='q-wrapper'>
            <h1>{heading}</h1>
            <div className="q-main" ref={main}>
                {result ? (
                    <>
                        <div className='q-res'>You have Scored {score} out of {questions.length}</div>
                        <Lock11 score={score} target={3} />
                    </>
                ) : (
                    <>
                        <div className="q-block">
                            <div className='q-count'>
                                <span>Question {currQ + 1}</span>/{questions.length}
                            </div>
                            <div className='q-text'>{questions[currQ].qtext}</div>
                            <div className='q-img'>
                                <img src={questions[currQ].imagePath} alt="Question" />
                            </div>
                        </div>
                        <div className="options">
                            <dd>
                                <dl ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{questions[currQ].option1}</dl>
                                <dl ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{questions[currQ].option2}</dl>
                                <dl ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{questions[currQ].option3}</dl>
                                <dl ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{questions[currQ].option4}</dl>
                            </dd>
                            <button className='n-bn q-lock' ref={nbtn} onClick={next}>Next</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz11;


