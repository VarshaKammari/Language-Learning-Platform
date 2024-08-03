import React, { useState, useRef } from 'react';
import './Quiz.css';
import Lock8 from '../Locks/Lock8';

function Quiz8() {
    const questions = [
        {
            qtext: "Identify the word that signifies this image?",
            option1: "ఎలుక",
            option2: "అమ్మ",
            option3: "ఋషి",
            option4: "ఇల్లు",
            ans: 1,
            imagePath: "/Letters/eluka.jpeg"
        },
        {
            qtext: "Identify the word that signifies this image?",
            option1: "ఉడుత",
            option2: "ఓడ ",
            option3: "అరటి పండు",
            option4: "ఈగ ",
            ans: 3,
            imagePath: "/Letters/arati.png"
        },
        {
            qtext: "Identify the Word based on it's  image?",
            option1: "ఊయల",
            option2: "ఔషధం",
            option3: "ఐదు",
            option4: "ఆకు",
            ans: 4,
            imagePath: "/Letters/aaku.jpg"  
        },
        {
            qtext: "Identify the Word based on it's image?",
            option1: "ఉప్పు",
            option4: "ఇంద్రధనుస్సు",
            option3: "ఓపిక",
            option2: "ఏడు",
            ans: 2,
            imagePath: "/Letters/aedu.jpeg"  // Replace with your image path
        },
        {
            qtext: "Identify the Word based on it's image?",
            option1: "ఐశ్వర్యం",
            option2: "ఇంద్రధనుస్సు",
            option3: "ఏనుగు",
            option4: "ఓడ",
            ans: 3,
            imagePath: "/Letters/aenugu.jpg"  // Replace with your image path
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
                        <Lock8 score={score} target={3} />
                    </>
                ) : (
                    <>
                        <div className="q-block">
                            <div className='q-count'>
                                <span>Question {currQ + 1}</span>/{questions.length}
                            </div>
                            <div className='q-text'>{questions[currQ].qtext}</div>
                            <div className='q-img'>
                            <img src={questions[currQ].imagePath} alt="Question"/>
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

export default Quiz8;
