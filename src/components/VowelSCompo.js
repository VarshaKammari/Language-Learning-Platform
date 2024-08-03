import React,{useState} from 'react'
import './alphaS.css'
// import P3 from './P3';
import Quiz4 from '../Quizzes/Quiz4';

function VowelSCompo() {
    const [result,setResult]=useState(false);
    function handleNext()
    {
        setResult(true);
    }
    const handleAudio=(path)=>{
        const ad=new Audio(path);
        ad.play();
    };
  return (
    result ? <Quiz4 /> :
    <div className='vs-cnr'>
     <h1>Vowel Signs</h1>
    <div className="vs-main">
       
    <div className="vs-bx">
        <div className="vs-b" id="vs-l1">
            <div className="vs-lt">✓</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/thakattu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        
        <div className="vs-b" id="vs-l2">
            <div className="vs-lt">ా</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/deergam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l3">
            <div className="vs-lt">ి</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/gudi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l4">
            <div className="vs-lt">ీ</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/gudideergam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l9">
            <div className="vs-lt">ు</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/kommu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l10">
            <div className="vs-lt">ూ</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/kommudergam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l11">
            <div className="vs-lt">ృ</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/ruthvamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l12">
            <div className="vs-lt">ౄ</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/ruthvadeergam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        
    </div>
    <div className="vs-bx">
        <div className="vs-b" id="vs-l9">
            <div className="vs-lt">ె</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/ethvamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l10">
            <div className="vs-lt">ే</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/eethvamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l11">
            <div className="vs-lt">ై</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/ithvamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l12">
            <div className="vs-lt"> ొ</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/othvamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l1">
            <div className="vs-lt"> ో</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/oothvamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l2">
            <div className="vs-lt"> ౌ</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/authvamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l3">
            <div className="vs-lt"> ం</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/purnanuswaramu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div>
        <div className="vs-b" id="vs-l4">
            <div className="vs-lt"> ః</div>
            <button className="vs-bn" onClick={() => handleAudio("/audio/visargamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
        </div> 
    </div>
</div>
<button className='vs-nbn' onClick={handleNext}>Next</button>
</div>
  )
}

export default VowelSCompo
