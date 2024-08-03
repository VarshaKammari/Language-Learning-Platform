import React, { useState, useRef } from 'react';
import './Quiz.css';
import Lock9 from '../Locks/Lock9';

function Quiz9() {
    const questions = [
        {
            qtext:"Identify the word that signifies this image?",
            option1:"ధన",
            option2:"గది",
            option3:"కలం",
            option4:"యజ్ఞం",
            ans:3,
            imagePath:"/Letters/kalamu.png"
        },
        {
            qtext:"Identify the word that signifies this image?",
            option1:"దనం",
            option2:"కత్తి",
            option4:"వల",
            option3:"తల",
            ans:4,
            imagePath:"/Letters/vala.jpeg"
        },
        {
            qtext:"Identify the word that signifies this image?",
            option4:"బడి",
            option2:"క్షమ",
            option3:"జంతువు",
            option1:"ధనియాలు",
            ans:1,
            imagePath:"/Letters/dhhaniyaalu.png"
        },
        {
            qtext:"Identify the word that signifies this image?",
            option1:"యజ్ఞ",
            option4:"శంఖం",
            option3:"మధ్యాహ్నం ",
            option2:"ఘర్షణ",
            ans:2,
            imagePath:"/Letters/gharshana.jpeg"
        },
        {
            qtext:"Identify the word that signifies this image?",
            option1:"సంతోషం",
            option2:"చక్కర",
            option3:"పలక",
            option4:"హస్తం",
            ans:3,
            imagePath:"/Letters/palaka.jpeg"
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
                        <Lock9 score={score} target={3} />
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

export default Quiz9;


