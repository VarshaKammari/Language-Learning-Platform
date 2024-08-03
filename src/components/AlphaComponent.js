import React,{useState} from 'react';
import './alpha.css';


function AlphaComponent(props) {
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
    <div className='abody'>
        <div className="carousel slide" data-bs-ride="false" data-bs-interval="false" id="banners">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='a-content'>
                        <h1>Vowels</h1>
                    </div>
                    <div className="abx">
                        <div className="rw">
                            <div className="alcnr"  id="al1">
                                <div className="aletter">అ</div>
                                <button className="abn" onClick={() => handleCheck("/audio/a.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="alcnr" id="al3">
                                <div className="aletter" >ఇ</div>
                                <button className="abn" onClick={() => handleCheck("/audio/e.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                        </div>
                        <div className="rw">
                            <div className="alcnr" id="al2">
                            <div className="aletter">ఆ</div>
                                <button className="abn"  onClick={() => handleCheck("/audio/aa.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="alcnr"  id="al4">
                                <div className="aletter" >ఈ</div>
                                <button className="abn" onClick={() => handleCheck("/audio/ee.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="abx a-top">
                        <div className="rw">
                            <div className="alcnr"  id="al1">
                                <div className="aletter">ఉ</div>
                                <button className="abn" onClick={() => handleCheck("/audio/u.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="alcnr" id="al3">
                                <div className="aletter" >ఋ</div>
                                <button className="abn" onClick={() => handleCheck("/audio/ru.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                        </div>
                        <div className="rw">
                            <div className="alcnr" id="al2">
                            <div className="aletter">ఊ</div>
                                <button className="abn"  onClick={() => handleCheck("/audio/uu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="alcnr"  id="al4">
                                <div className="aletter">ౠ</div>
                                <button className="abn" onClick={() => handleCheck("/audio/ruu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="abx a-top">
                        <div className="rw">
                            <div className="alcnr"  id="al1">
                                <div className="aletter">ఎ</div>
                                <button className="abn" onClick={() => handleCheck("/audio/ae.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                        </div>
                        <div className="rw">
                            <div className="alcnr" id="al2">
                            <div className="aletter">ఏ</div>
                                <button className="abn"  onClick={() => handleCheck("/audio/aee.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="alcnr"  id="al4">
                                <div className="aletter">ఐ</div>
                                <button className="abn" onClick={() => handleCheck("/audio/i.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="abx a-top">
                        <div className="rw">
                            <div className="alcnr"  id="al1">
                                <div className="aletter">ఒ</div>
                                <button className="abn" onClick={() => handleCheck("/audio/o.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                        </div>
                        <div className="rw">
                            <div className="alcnr" id="al2">
                            <div className="aletter">ఓ</div>
                                <button className="abn"  onClick={() => handleCheck("/audio/oo.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="alcnr"  id="al4">
                                <div className="aletter">ఔ</div>
                                <button className="abn" onClick={() => handleCheck("/audio/ou.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="abx a-top">
                        <div className="rw">
                            <div className="alcnr"  id="al1">
                                <div className="aletter">అం</div>
                                <button className="abn" onClick={() => handleCheck("/audio/aum.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                        </div>
                        <div className="rw">
                            <div className="alcnr" id="al2">
                            <div className="aletter">అః</div>
                                <button className="abn"  onClick={() => handleCheck("/audio/aha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
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

export default AlphaComponent
