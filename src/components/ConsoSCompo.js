import React,{useState} from 'react';
import Quiz6 from '../Quizzes/Quiz6';
import './ConsoS.css';

function ConsoSCompo() {
    const [result,setResult]=useState(false);
    function handleClick(){
        setResult(true);
    }
  return (
    result ? <Quiz6 /> :
    <div className='cs-cnr'>
        <h1>Consonant Signs</h1>
    <div className="cs-main">
        <div className="cs-bx">
            <div className="cs-b cs-l1">
                <div className="cs-lt">క</div>
                <div className="cs-bn">క్క</div>
            </div>
            <div className="cs-b cs-l2">
                <div className="cs-lt">ఖ</div>
                <div className="cs-bn">ఖ్ఖ</div>
            </div>
            <div className="cs-b cs-l3">
                <div className="cs-lt">గ</div>
                <div className="cs-bn">గ్గ</div>
            </div>
            <div className="cs-b cs-l4">
                <div className="cs-lt">ఘ</div>
                <div className="cs-bn">ఘ్ఘ</div>
            </div>
            <div className="cs-b cs-l5">
                <div className="cs-lt">ఙ</div>
                <div className="cs-bn">ఙ్ఙ</div>
            </div>
        </div>
        <div className="cs-bx">
            <div className="cs-b cs-l6">
                <div className="cs-lt">చ</div>
                <div className="cs-bn">చ్చ</div>
            </div>
            <div className="cs-b cs-l7">
                <div className="cs-lt">ఛ</div>
                <div className="cs-bn">ఛ్ఛ</div>
            </div>
            <div className="cs-b cs-l8">
                <div className="cs-lt">జ</div>
                <div className="cs-bn">జ్జ</div>
            </div>
            <div className="cs-b cs-l9">
                <div className="cs-lt">ఝ</div>
                <div className="cs-bn">ఝ్ఝ</div>
            </div>
            <div className="cs-b cs-l10">
                <div className="cs-lt">ఞ</div>
                <div className="cs-bn">ఞ్ఞ్</div>
            </div>
        </div>
        <div className="cs-bx">
            <div className="cs-b cs-l1">
                <div className="cs-lt">ట</div>
                <div className="cs-bn">ట్ట</div>
            </div>
            <div className="cs-b cs-l2">
                <div className="cs-lt">ఠ</div>
                <div className="cs-bn">ఠ్ఠ</div>
            </div>
            <div className="cs-b cs-l3">
                <div className="cs-lt">డ</div>
                <div className="cs-bn">డ్డ</div>
            </div>
            <div className="cs-b cs-l4">
                <div className="cs-lt">ఢ</div>
                <div className="cs-bn">ఢ్ఢ</div>
            </div>
            <div className="cs-b cs-l5">
                <div className="cs-lt">ణ</div>
                <div className="cs-bn">ణ్ణ్</div>
            </div>
        </div>
        <div className="cs-bx">
            <div className="cs-b cs-l6">
                <div className="cs-lt">త</div>
                <div className="cs-bn">త్త</div>
            </div>
            <div className="cs-b cs-l7">
                <div className="cs-lt">థ</div>
                <div className="cs-bn">థ్థ</div>
            </div>
            <div className="cs-b cs-l8">
                <div className="cs-lt">ద</div>
                <div className="cs-bn">ద్ద</div>
            </div>
            <div className="cs-b cs-l9">
                <div className="cs-lt">ధ</div>
                <div className="cs-bn">ధ్ధ</div>
            </div>
            <div className="cs-b cs-l10">
                <div className="cs-lt">న</div>
                <div className="cs-bn">న్న</div>
            </div>
       </div>
        <div className="cs-bx">
            <div className="cs-b cs-l1">
                <div className="cs-lt">ప</div>
                <div className="cs-bn">ప్ప</div>
            </div>
            <div className="cs-b cs-l2">
                <div className="cs-lt">ఫ</div>
                <div className="cs-bn">ఫ్ఫ</div>
            </div>
            <div className="cs-b cs-l3">
                <div className="cs-lt">బ</div>
                <div className="cs-bn">బ్బ</div>
            </div>
            <div className="cs-b cs-l4">
                <div className="cs-lt">భ</div>
                <div className="cs-bn">భ్భ</div>
            </div>
            <div className="cs-b cs-l5">
                <div className="cs-lt">మ</div>
                <div className="cs-bn">మ్మ</div>
            </div>
        </div>
        <div className="cs-bx">
            <div className="cs-b cs-l6">
                <div className="cs-lt">య</div>
                <div className="cs-bn">య్య</div>
            </div>
            <div className="cs-b cs-l7">
                <div className="cs-lt">ర</div>
                <div className="cs-bn">ర్ర</div>
            </div>
            <div className="cs-b cs-l9">
                <div className="cs-lt">ల</div>
                <div className="cs-bn">ల్ల</div>
            </div>
            <div className="cs-b cs-l10">
                <div className="cs-lt">వ</div>
                <div className="cs-bn">వ్వ</div>
            </div>
            
        </div>
        <div className="cs-bx">
            <div className="cs-b cs-l1">
                <div className="cs-lt">శ</div>
                <div className="cs-bn">శ్శ</div>
            </div>
            <div className="cs-b cs-l2">
                <div className="cs-lt">ష</div>
                <div className="cs-bn">ష్ష</div>
            </div>
            <div className="cs-b cs-l4">
                <div className="cs-lt">స</div>
                <div className="cs-bn">స్స</div>
            </div>
            <div className="cs-b cs-l5">
                <div className="cs-lt">హ</div>
                <div className="cs-bn">హ్హ</div>
            </div>
        </div>
        <div className="cs-bx">
            <div className="cs-b cs-l6">
                <div className="cs-lt">ళ</div>
                <div className="cs-bn">ళ్ళ</div>
            </div>
            <div className="cs-b cs-l7">
                <div className="cs-lt">క్ష</div>
                <div className="cs-bn">క్ష్క్ష్</div>
            </div>
            <div className="cs-b cs-l8">
                <div className="cs-lt">ఱ</div>
                <div className="cs-bn">ఱ్ఱ</div>
            </div>
        </div>
    </div>
    <button className='cs-nbn' onClick={handleClick}>Next</button>
    </div>
  )
}

export default ConsoSCompo
