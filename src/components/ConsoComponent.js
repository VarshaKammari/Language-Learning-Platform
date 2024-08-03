import React,{useState} from 'react'
import './conso.css';

function ConsoComponent(props) {
    const [currentSlide,setCurrentSlide]=useState(0);

    const handleCheck=(path)=>{
        const ad=new Audio(path);
        ad.play();
    }

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
    <div className='c-body'>
    <div className="carousel slide" data-bs-ride="carousel" id="banners">
    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="100000">
            <div className='c-content'>
                <h1>Consonants</h1>
            </div>
            <div className="cbx">
                <div className="rw">
                    <div className="clcnr"  id="cl1">
                        <div className="cletter">క</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/ka.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl3">
                        <div className="cletter" >గ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/ga.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl5">
                        <div className="cletter" >ఙ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/eni.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
                <div className="rw">
                    <div className="clcnr" id="cl2">
                    <div className="cletter">ఖ</div>
                        <button className="cbn"  onClick={()=>handleCheck("/audio/kha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr"  id="cl4">
                        <div className="cletter">ఘ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/gha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item" data-bs-interval="100000">
            <div className="cbx c-top">
                <div className="rw">
                    <div className="clcnr"  id="cl1">
                        <div className="cletter">చ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/cha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl3">
                        <div className="cletter" >జ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/ja.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl5">
                        <div className="cletter" >ఞ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/enya.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
                <div className="rw">
                    <div className="clcnr" id="cl2">
                    <div className="cletter">ఛ</div>
                        <button className="cbn"  onClick={()=>handleCheck("/audio/chha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr"  id="cl4">
                        <div className="cletter">ఝ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/jha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item" data-bs-interval="100000">
            <div className="cbx c-top">
                <div className="rw">
                    <div className="clcnr"  id="cl1">
                        <div className="cletter">ట</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/ta.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl3">
                        <div className="cletter" >డ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/da.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl5">
                        <div className="cletter" >ణ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/ana.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
                <div className="rw">
                    <div className="clcnr" id="cl2">
                    <div className="cletter">ఠ</div>
                        <button className="cbn"  onClick={()=>handleCheck("/audio/tta.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr"  id="cl4">
                        <div className="cletter">ఢ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/dda.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item" data-bs-interval="100000">
            <div className="cbx c-top">
                <div className="rw">
                    <div className="clcnr"  id="cl1">
                        <div className="cletter">త</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/tha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl3">
                        <div className="cletter" >ద</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/dha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl5">
                        <div className="cletter" >న</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/na.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
                <div className="rw">
                    <div className="clcnr" id="cl2">
                    <div className="cletter">థ</div>
                        <button className="cbn"  onClick={()=>handleCheck("/audio/thha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr"  id="cl4">
                        <div className="cletter">ధ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/dhha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="carousel-item" data-bs-interval="100000">
            <div className="cbx c-top">
                <div className="rw">
                    <div className="clcnr"  id="cl1">
                        <div className="cletter">ప</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/pa.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl3">
                        <div className="cletter" >బ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/ba.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl5">
                        <div className="cletter" >మ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/ma.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
                <div className="rw">
                    <div className="clcnr" id="cl2">
                    <div className="cletter">ఫ</div>
                        <button className="cbn"  onClick={()=>handleCheck("/audio/pha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr"  id="cl4">
                        <div className="cletter">భ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/bha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item" data-bs-interval="100000">
            <div className="cbx c-top">
                <div className="rw">
                    <div className="clcnr"  id="cl1">
                        <div className="cletter">య</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/ya.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl3">
                        <div className="cletter" >ల</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/la.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
                <div className="rw">
                    <div className="clcnr" id="cl2">
                    <div className="cletter">ర</div>
                        <button className="cbn"  onClick={()=>handleCheck("/audio/ra.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr"  id="cl4">
                        <div className="cletter">వ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/va.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item" data-bs-interval="100000">
            <div className="cbx c-top">
                <div className="rw">
                    <div className="clcnr"  id="cl1">
                        <div className="cletter">శ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/she.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr" id="cl3">
                        <div className="cletter" >స</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/sa.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
                <div className="rw">
                    <div className="clcnr" id="cl2">
                    <div className="cletter">ష</div>
                        <button className="cbn"  onClick={()=>handleCheck("/audio/sha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr"  id="cl4">
                        <div className="cletter">హ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/ha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-item" data-bs-interval="100000">
            <div className="cbx c-top">
                <div className="rw">
                    <div className="clcnr"  id="cl1">
                        <div className="cletter">ళ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/ala.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                </div>
                <div className="rw">
                    <div className="clcnr" id="cl2">
                    <div className="cletter">క్ష</div>
                        <button className="cbn"  onClick={()=>handleCheck("/audio/ksha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
                    <div className="clcnr"  id="cl4">
                        <div className="cletter">ఱ</div>
                        <button className="cbn" onClick={()=>handleCheck("/audio/routhi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                    </div>
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

export default ConsoComponent
