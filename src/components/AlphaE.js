import React,{useState} from 'react';
import './alphaE.css';


function AlphaE(props) {
    const [currentSlide,setCurrentSlide]=useState(0);
    
    const handleCheck=(path)=>{
        const ad=new Audio(path);
        ad.play();
    };

    const handleLeftClick=()=>{
        
        const newSlide=currentSlide-1;
        setCurrentSlide(newSlide);
        props.onClick(newSlide);
        
    }
    const handleRightClick=()=>{
       
        const newSlide=currentSlide+1;
        setCurrentSlide(newSlide);
        props.onClick(newSlide);
        
    }
  return (
    <div className='ae-body'>
    <div className="carousel slide" data-bs-ride="false" data-bs-interval="false" id="banners">
        <div className="carousel-inner">
            <h1>Vowel Signs Example</h1>
            <p>Here is how they are typically used with a base consonant.This pattern continues for each consonant, combining with the vowel signs to form different syllables.</p>
            <div className="carousel-item active" >
                <div className="ae-ot">
                    <div className="ae-slice">
                        <div className="ae-bt l11">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l12">✓</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l13">క</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/ka.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    <div className="ae-slice">
                        <div className="ae-bt l21">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l22"> ా</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l23">కా</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/kaa.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    <div className="ae-slice">
                        <div className="ae-bt l31">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l32"> ి</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l33">కి</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/ki.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    <div className="ae-slice">
                        <div className="ae-bt l41">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l42"> ీ</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l43">కీ</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/kii.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="ae-ot ae-top">
                    <div className="ae-slice">
                        <div className="ae-bt l11">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l12"> ు</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l13">కు</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/ku.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    <div className="ae-slice">
                        <div className="ae-bt l21">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l22"> ూ</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l23">కూ</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/kuu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    <div className="ae-slice">
                        <div className="ae-bt l31">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l32"> ృ</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l33">కృ</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/kru.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    <div className="ae-slice">
                        <div className="ae-bt l41">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l42"> ౄ</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l43">కౄ</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/kruu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="ae-ot ae-mid ae-top">
                    <div className="ae-slice">
                        <div className="ae-bt l11">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l12"> ె</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l13">కె</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/ke.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    <div className="ae-slice">
                        <div className="ae-bt l21">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l22"> ే</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l23">కే</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/kee.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    <div className="ae-slice">
                        <div className="ae-bt l31">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l32"> ై</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l33">కై</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/kai.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="ae-ot ae-mid ae-top">
                    <div className="ae-slice">
                        <div className="ae-bt l11">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l12"> ొ</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l13">కొ</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/ko.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    <div className="ae-slice">
                        <div className="ae-bt l21">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l22"> ో</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l23">కో</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/koo.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    <div className="ae-slice">
                        <div className="ae-bt l31">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l32"> ౌ</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l33">కౌ</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/kau.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="ae-ot ae-top" id="ae-last">
                    <div className="ae-slice">
                        <div className="ae-bt l11">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l12"> ం</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l13">కం</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/kam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    <div className="ae-slice">
                        <div className="ae-bt l21">క</div><span className='ae-s'>+</span>
                        <div className="ae-bt l22"> ః</div><span className='ae-s'>&#8658;</span>
                        <div className="ae-bt l23">కః</div>
                    </div>
                    <button className="aes-bn" onClick={() => handleCheck("/audio/kaha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="oicontainer">
                    <div className="olet">
                        <div className="olt">క</div>
                        <div className="olt">కా</div>
                        <div className="olt">కి</div>
                        <div className="olt">కీ</div>
                        <div className="olt">కు</div>
                        <div className="olt">కూ</div>
                        <div className="olt">కృ</div>
                        <div className="olt">కౄ</div>
                        <div className="olt">కె</div>
                        <div className="olt">కే</div>
                        <div className="olt">కై</div>
                        <div className="olt">కొ</div>
                        <div className="olt">కో</div>
                        <div className="olt">కౌ</div>
                        <div className="olt">కం</div>
                        <div className="olt">కః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ఖ</div>
                        <div className="olt">ఖా</div>
                        <div className="olt">ఖి</div>
                        <div className="olt">ఖీ</div>
                        <div className="olt">ఖు</div>
                        <div className="olt">ఖూ</div>
                        <div className="olt">ఖృ</div>
                        <div className="olt">ఖౄ</div>
                        <div className="olt">ఖె</div>
                        <div className="olt">ఖే</div>
                        <div className="olt">ఖై</div>
                        <div className="olt">ఖొ</div>
                        <div className="olt">ఖో</div>
                        <div className="olt">ఖౌ</div>
                        <div className="olt">ఖం</div>
                        <div className="olt">ఖః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">గ</div>
                        <div className="olt">గా</div>
                        <div className="olt">గి</div>
                        <div className="olt">గీ</div>
                        <div className="olt">గు</div>
                        <div className="olt">గూ</div>
                        <div className="olt">గృ</div>
                        <div className="olt">గౄ</div>
                        <div className="olt">గె</div>
                        <div className="olt">గే</div>
                        <div className="olt">గై</div>
                        <div className="olt">గొ</div>
                        <div className="olt">గో</div>
                        <div className="olt">గౌ</div>
                        <div className="olt">గం</div>
                        <div className="olt">గః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ఘ</div>
                        <div className="olt">ఘా</div>
                        <div className="olt">ఘి</div>
                        <div className="olt">ఘీ</div>
                        <div className="olt">ఘు</div>
                        <div className="olt">ఘూ</div>
                        <div className="olt">ఘృ</div>
                        <div className="olt">ఘౄ</div>
                        <div className="olt">ఘె</div>
                        <div className="olt">ఘే</div>
                        <div className="olt">ఘై</div>
                        <div className="olt">ఘొ</div>
                        <div className="olt">ఘో</div>
                        <div className="olt">ఘౌ</div>
                        <div className="olt">ఘం</div>
                        <div className="olt">ఘః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">చ</div>
                        <div className="olt">చా</div>
                        <div className="olt">చి</div>
                        <div className="olt">చీ</div>
                        <div className="olt">చు</div>
                        <div className="olt">చూ</div>
                        <div className="olt">చృ</div>
                        <div className="olt">చౄ</div>
                        <div className="olt">చె</div>
                        <div className="olt">చే</div>
                        <div className="olt">చై</div>
                        <div className="olt">చొ</div>
                        <div className="olt">చో</div>
                        <div className="olt">చౌ</div>
                        <div className="olt">చం</div>
                        <div className="olt">చః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ఛ</div>
                        <div className="olt">ఛా</div>
                        <div className="olt">ఛి</div>
                        <div className="olt">ఛీ</div>
                        <div className="olt">ఛు</div>
                        <div className="olt">ఛూ</div>
                        <div className="olt">ఛృ</div>
                        <div className="olt">ఛౄ</div>
                        <div className="olt">ఛె</div>
                        <div className="olt">ఛే</div>
                        <div className="olt">ఛై</div>
                        <div className="olt">ఛొ</div>
                        <div className="olt">ఛో</div>
                        <div className="olt">ఛౌ</div>
                        <div className="olt">ఛం</div>
                        <div className="olt">ఛః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">జ</div>
                        <div className="olt">జా</div>
                        <div className="olt">జి</div>
                        <div className="olt">జీ</div>
                        <div className="olt">జు</div>
                        <div className="olt">జూ</div>
                        <div className="olt">జృ</div>
                        <div className="olt">జౄ</div>
                        <div className="olt">జె</div>
                        <div className="olt">జే</div>
                        <div className="olt">జై</div>
                        <div className="olt">జొ</div>
                        <div className="olt">జో</div>
                        <div className="olt">జౌ</div>
                        <div className="olt">జం</div>
                        <div className="olt">జః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ఝ</div>
                        <div className="olt">ఝా</div>
                        <div className="olt">ఝి</div>
                        <div className="olt">ఝీ</div>
                        <div className="olt">ఝు</div>
                        <div className="olt">ఝూ</div>
                        <div className="olt">ఝృ</div>
                        <div className="olt">ఝౄ</div>
                        <div className="olt">ఝె</div>
                        <div className="olt">ఝే</div>
                        <div className="olt">ఝై</div>
                        <div className="olt">ఝొ</div>
                        <div className="olt">ఝో</div>
                        <div className="olt">ఝౌ</div>
                        <div className="olt">ఝం</div>
                        <div className="olt">ఝః</div>
                    </div>   
                </div> 
            </div>
            <div className="carousel-item" >
                <div className="oicontainer">
                    <div className="olet">
                        <div className="olt">ట</div>
                        <div className="olt">టా</div>
                        <div className="olt">టి</div>
                        <div className="olt">టీ</div>
                        <div className="olt">టు</div>
                        <div className="olt">టూ</div>
                        <div className="olt">టృ</div>
                        <div className="olt">టౄ</div>
                        <div className="olt">టె</div>
                        <div className="olt">టే</div>
                        <div className="olt">టై</div>
                        <div className="olt">టొ</div>
                        <div className="olt">టో</div>
                        <div className="olt">టౌ</div>
                        <div className="olt">టం</div>
                        <div className="olt">టః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ఠ</div>
                        <div className="olt">ఠా</div>
                        <div className="olt">ఠి</div>
                        <div className="olt">ఠీ</div>
                        <div className="olt">ఠు</div>
                        <div className="olt">ఠూ</div>
                        <div className="olt">ఠృ</div>
                        <div className="olt">ఠౄ</div>
                        <div className="olt">ఠె</div>
                        <div className="olt">ఠే</div>
                        <div className="olt">ఠై</div>
                        <div className="olt">ఠొ</div>
                        <div className="olt">ఠో</div>
                        <div className="olt">ఠౌ</div>
                        <div className="olt">ఠం</div>
                        <div className="olt">ఠః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">డ</div>
                        <div className="olt">డా</div>
                        <div className="olt">డి</div>
                        <div className="olt">డీ</div>
                        <div className="olt">డు</div>
                        <div className="olt">డూ</div>
                        <div className="olt">డృ</div>
                        <div className="olt">డౄ</div>
                        <div className="olt">డె</div>
                        <div className="olt">డే</div>
                        <div className="olt">డై</div>
                        <div className="olt">డొ</div>
                        <div className="olt">డో</div>
                        <div className="olt">డౌ</div>
                        <div className="olt">డం</div>
                        <div className="olt">డః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ఢ</div>
                        <div className="olt">ఢా</div>
                        <div className="olt">ఢి</div>
                        <div className="olt">ఢీ</div>
                        <div className="olt">ఢు</div>
                        <div className="olt">ఢూ</div>
                        <div className="olt">ఢృ</div>
                        <div className="olt">ఢౄ</div>
                        <div className="olt">ఢె</div>
                        <div className="olt">ఢే</div>
                        <div className="olt">ఢై</div>
                        <div className="olt">ఢొ</div>
                        <div className="olt">ఢో</div>
                        <div className="olt">ఢౌ</div>
                        <div className="olt">ఢం</div>
                        <div className="olt">ఢః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ణ</div>
                        <div className="olt">ణా</div>
                        <div className="olt">ణి</div>
                        <div className="olt">ణీ</div>
                        <div className="olt">ణు</div>
                        <div className="olt">ణూ</div>
                        <div className="olt">ణృ</div>
                        <div className="olt">ణౄ</div>
                        <div className="olt">ణె</div>
                        <div className="olt">ణే</div>
                        <div className="olt">ణై</div>
                        <div className="olt">ణొ</div>
                        <div className="olt">ణో</div>
                        <div className="olt">ణౌ</div>
                        <div className="olt">ణం</div>
                        <div className="olt">ణః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">త</div>
                        <div className="olt">తా</div>
                        <div className="olt">తి</div>
                        <div className="olt">తీ</div>
                        <div className="olt">తు</div>
                        <div className="olt">తూ</div>
                        <div className="olt">తృ</div>
                        <div className="olt">తౄ</div>
                        <div className="olt">తె</div>
                        <div className="olt">తే</div>
                        <div className="olt">తై</div>
                        <div className="olt">తొ</div>
                        <div className="olt">తో</div>
                        <div className="olt">తౌ</div>
                        <div className="olt">తం</div>
                        <div className="olt">తః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">థ</div>
                        <div className="olt">థా</div>
                        <div className="olt">థి</div>
                        <div className="olt">థీ</div>
                        <div className="olt">థు</div>
                        <div className="olt">థూ</div>
                        <div className="olt">థృ</div>
                        <div className="olt">థౄ</div>
                        <div className="olt">థె</div>
                        <div className="olt">థే</div>
                        <div className="olt">థై</div>
                        <div className="olt">థొ</div>
                        <div className="olt">థో</div>
                        <div className="olt">థౌ</div>
                        <div className="olt">థం</div>
                        <div className="olt">థః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ద</div>
                        <div className="olt">దా</div>
                        <div className="olt">ది</div>
                        <div className="olt">దీ</div>
                        <div className="olt">దు</div>
                        <div className="olt">దూ</div>
                        <div className="olt">దృ</div>
                        <div className="olt">దౄ</div>
                        <div className="olt">దె</div>
                        <div className="olt">దే</div>
                        <div className="olt">దై</div>
                        <div className="olt">దొ</div>
                        <div className="olt">దో</div>
                        <div className="olt">దౌ</div>
                        <div className="olt">దం</div>
                        <div className="olt">దః</div>
                        
                    </div>  
                </div>    
            </div> 
            <div className="carousel-item" >
                <div className="oicontainer">
                    <div className="olet">
                        <div className="olt">ధ</div>
                        <div className="olt">ధా</div>
                        <div className="olt">ధి</div>
                        <div className="olt">ధీ</div>
                        <div className="olt">ధు</div>
                        <div className="olt">ధూ</div>
                        <div className="olt">ధృ</div>
                        <div className="olt">ధౄ</div>
                        <div className="olt">ధె</div>
                        <div className="olt">ధే</div>
                        <div className="olt">ధై</div>
                        <div className="olt">ధొ</div>
                        <div className="olt">ధో</div>
                        <div className="olt">ధౌ</div>
                        <div className="olt">ధం</div>
                        <div className="olt">ధః</div>
                    </div><hr />
                    <div className="olet">
                        <div className="olt">న</div>
                        <div className="olt">నా</div>
                        <div className="olt">ని</div>
                        <div className="olt">నీ</div>
                        <div className="olt">ను</div>
                        <div className="olt">నూ</div>
                        <div className="olt">నృ</div>
                        <div className="olt">నౄ</div>
                        <div className="olt">నె</div>
                        <div className="olt">నే</div>
                        <div className="olt">నై</div>
                        <div className="olt">నొ</div>
                        <div className="olt">నో</div>
                        <div className="olt">నౌ</div>
                        <div className="olt">నం</div>
                        <div className="olt">నః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ప</div>
                        <div className="olt">పా</div>
                        <div className="olt">పి</div>
                        <div className="olt">పీ</div>
                        <div className="olt">పు</div>
                        <div className="olt">పూ</div>
                        <div className="olt">పృ</div>
                        <div className="olt">పౄ</div>
                        <div className="olt">పె</div>
                        <div className="olt">పే</div>
                        <div className="olt">పై</div>
                        <div className="olt">పొ</div>
                        <div className="olt">పో</div>
                        <div className="olt">పౌ</div>
                        <div className="olt">పం</div>
                        <div className="olt">పః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ఫ</div>
                        <div className="olt">ఫా</div>
                        <div className="olt">ఫి</div>
                        <div className="olt">ఫీ</div>
                        <div className="olt">ఫు</div>
                        <div className="olt">ఫూ</div>
                        <div className="olt">ఫృ</div>
                        <div className="olt">ఫౄ</div>
                        <div className="olt">ఫె</div>
                        <div className="olt">ఫే</div>
                        <div className="olt">ఫై</div>
                        <div className="olt">ఫొ</div>
                        <div className="olt">ఫో</div>
                        <div className="olt">ఫౌ</div>
                        <div className="olt">ఫం</div>
                        <div className="olt">ఫః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">బ</div>
                        <div className="olt">బా</div>
                        <div className="olt">బి</div>
                        <div className="olt">బీ</div>
                        <div className="olt">బు</div>
                        <div className="olt">బూ</div>
                        <div className="olt">బృ</div>
                        <div className="olt">బౄ</div>
                        <div className="olt">బె</div>
                        <div className="olt">బే</div>
                        <div className="olt">బై</div>
                        <div className="olt">బొ</div>
                        <div className="olt">బో</div>
                        <div className="olt">బౌ</div>
                        <div className="olt">బం</div>
                        <div className="olt">బః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">భ</div>
                        <div className="olt">భా</div>
                        <div className="olt">భి</div>
                        <div className="olt">భీ</div>
                        <div className="olt">భు</div>
                        <div className="olt">భూ</div>
                        <div className="olt">భృ</div>
                        <div className="olt">భౄ</div>
                        <div className="olt">భె</div>
                        <div className="olt">భే</div>
                        <div className="olt">భై</div>
                        <div className="olt">భొ</div>
                        <div className="olt">భో</div>
                        <div className="olt">భౌ</div>
                        <div className="olt">భం</div>
                        <div className="olt">భః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">మ</div>
                        <div className="olt">మా</div>
                        <div className="olt">మి</div>
                        <div className="olt">మీ</div>
                        <div className="olt">ము</div>
                        <div className="olt">మూ</div>
                        <div className="olt">మృ</div>
                        <div className="olt">మౄ</div>
                        <div className="olt">మె</div>
                        <div className="olt">మే</div>
                        <div className="olt">మై</div>
                        <div className="olt">మొ</div>
                        <div className="olt">మో</div>
                        <div className="olt">మౌ</div>
                        <div className="olt">మం</div>
                        <div className="olt">మః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">య</div>
                        <div className="olt">యా</div>
                        <div className="olt">యి</div>
                        <div className="olt">యీ</div>
                        <div className="olt">యు</div>
                        <div className="olt">యూ</div>
                        <div className="olt">యృ</div>
                        <div className="olt">యౄ</div>
                        <div className="olt">యె</div>
                        <div className="olt">యే</div>
                        <div className="olt">యై</div>
                        <div className="olt">యొ</div>
                        <div className="olt">యో</div>
                        <div className="olt">యౌ</div>
                        <div className="olt">యం</div>
                        <div className="olt">యః</div>
                    </div>            
                </div>
            </div>
            <div className="carousel-item" >
                <div className="oicontainer">
                    <div className="olet">
                        <div className="olt">ర</div>
                        <div className="olt">రా</div>
                        <div className="olt">రి</div>
                        <div className="olt">రీ</div>
                        <div className="olt">రు</div>
                        <div className="olt">రూ</div>
                        <div className="olt">రృ</div>
                        <div className="olt">రౄ</div>
                        <div className="olt">రె</div>
                        <div className="olt">రే</div>
                        <div className="olt">రై</div>
                        <div className="olt">రొ</div>
                        <div className="olt">రో</div>
                        <div className="olt">రౌ</div>
                        <div className="olt">రం</div>
                        <div className="olt">రః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ల</div>
                        <div className="olt">లా</div>
                        <div className="olt">లి</div>
                        <div className="olt">లీ</div>
                        <div className="olt">లు</div>
                        <div className="olt">లూ</div>
                        <div className="olt">లృ</div>
                        <div className="olt">లౄ</div>
                        <div className="olt">లె</div>
                        <div className="olt">లే</div>
                        <div className="olt">లై</div>
                        <div className="olt">లొ</div>
                        <div className="olt">లో</div>
                        <div className="olt">లౌ</div>
                        <div className="olt">లం</div>
                        <div className="olt">లః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">వ</div>
                        <div className="olt">వా</div>
                        <div className="olt">వి</div>
                        <div className="olt">వీ</div>
                        <div className="olt">వు</div>
                        <div className="olt">వూ</div>
                        <div className="olt">వృ</div>
                        <div className="olt">వౄ</div>
                        <div className="olt">వె</div>
                        <div className="olt">వే</div>
                        <div className="olt">వై</div>
                        <div className="olt">వొ</div>
                        <div className="olt">వో</div>
                        <div className="olt">వౌ</div>
                        <div className="olt">వం</div>
                        <div className="olt">వః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">శ</div>
                        <div className="olt">శా</div>
                        <div className="olt">శి</div>
                        <div className="olt">శీ</div>
                        <div className="olt">శు</div>
                        <div className="olt">శూ</div>
                        <div className="olt">శృ</div>
                        <div className="olt">శౄ</div>
                        <div className="olt">శె</div>
                        <div className="olt">శే</div>
                        <div className="olt">శై</div>
                        <div className="olt">శొ</div>
                        <div className="olt">శో</div>
                        <div className="olt">శౌ</div>
                        <div className="olt">శం</div>
                        <div className="olt">శః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">ష</div>
                        <div className="olt">షా</div>
                        <div className="olt">షి</div>
                        <div className="olt">షీ</div>
                        <div className="olt">షు</div>
                        <div className="olt">షూ</div>
                        <div className="olt">షృ</div>
                        <div className="olt">షౄ</div>
                        <div className="olt">షె</div>
                        <div className="olt">షే</div>
                        <div className="olt">షై</div>
                        <div className="olt">షొ</div>
                        <div className="olt">షో</div>
                        <div className="olt">షౌ</div>
                        <div className="olt">షం</div>
                        <div className="olt">షః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">స</div>
                        <div className="olt">సా</div>
                        <div className="olt">సి</div>
                        <div className="olt">సీ</div>
                        <div className="olt">సు</div>
                        <div className="olt">సూ</div>
                        <div className="olt">సృ</div>
                        <div className="olt">సౄ</div>
                        <div className="olt">సె</div>
                        <div className="olt">సే</div>
                        <div className="olt">సై</div>
                        <div className="olt">సొ</div>
                        <div className="olt">సో</div>
                        <div className="olt">సౌ</div>
                        <div className="olt">సం</div>
                        <div className="olt">సః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">హ</div>
                        <div className="olt">హా</div>
                        <div className="olt">హి</div>
                        <div className="olt">హీ</div>
                        <div className="olt">హు</div>
                        <div className="olt">హూ</div>
                        <div className="olt">హృ</div>
                        <div className="olt">హౄ</div>
                        <div className="olt">హె</div>
                        <div className="olt">హే</div>
                        <div className="olt">హై</div>
                        <div className="olt">హొ</div>
                        <div className="olt">హో</div>
                        <div className="olt">హౌ</div>
                        <div className="olt">హం</div>
                        <div className="olt">హః</div>
                    </div>
                    <hr />
                    <div className="olet">
                        <div className="olt">క్ష</div>
                        <div className="olt">క్షా</div>
                        <div className="olt">క్షి</div>
                        <div className="olt">క్షీ</div>
                        <div className="olt">క్షు</div>
                        <div className="olt">క్షూ</div>
                        <div className="olt">క్ష్</div>
                        <div className="olt">క్ష్</div>
                        <div className="olt">క్షె</div>
                        <div className="olt">క్షే</div>
                        <div className="olt">క్షే</div>
                        <div className="olt">క్షొ</div>
                        <div className="olt">క్షో</div>
                        <div className="olt">క్షౌ</div>
                        <div className="olt">క్షం</div>
                        <div className="olt">క్షః</div>
                    </div>            
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" onClick={handleLeftClick} data-bs-slide="prev" data-bs-target="#banners"><span className="carousel-control-prev-icon"></span></button>
        <button className="carousel-control-next" onClick={handleRightClick} data-bs-slide="next" data-bs-target="#banners"><span className="carousel-control-next-icon"></span></button>
    </div>
    </div>
  )
}

export default AlphaE
