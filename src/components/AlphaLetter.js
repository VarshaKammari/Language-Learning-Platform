import React,{useState} from 'react';
import './letter.css';

function AlphaLetter(props) {
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
    <div className='word-cnr'>
    <div className="carousel slide" data-bs-ride="false" data-bs-interval="false" id="banners">
        <div className="carousel-inner">
            <div className="carousel-item active" >
                <h1>Words starting with each Vowel</h1>
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">అ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/a.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/Amma.jpg" alt="letter-related image1" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/Amma.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>అ</u>మ్మ</div>
                                <div className="w-m">(Mom)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/arati.png" alt="letter-related image2" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/Banana.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>అ</u>రటిపండు</div>
                                <div className="w-m">(Banana)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ala.jpg" alt="letter-related image3" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/Wave.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>అ</u>ల</div>
                                <div className="w-m">(Wave)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఆ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/aa.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/aavu.png" alt="letter-related image4" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/aavu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఆ</u>వు</div>
                                <div className="w-m">(Cow)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/aaku.jpg" alt="letter-related image5" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/leaf.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఆ</u>కు</div>
                                <div className="w-m">(Leaf)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/aakasham.jpg" alt="letter-related image6" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/sky.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఆ</u>కాశం</div>
                                <div className="w-m">(Sky)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఇ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/e.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/illu.jpg" alt="letter-related image7" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/house.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఇ</u>ల్లు</div>
                                <div className="w-m">(House)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/isuka.jpeg" alt="letter-related image8" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/sand.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఇ</u>సుక</div>
                                <div className="w-m">(Sand)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ituka.PNG" alt="letter-related image9" />
                                <button className="w-btn"onClick={() => handleCheck("/audio/brick.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఇ</u>టుక</div>
                                <div className="w-m">(Brick)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఈ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ee.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/eega.jpg" alt="letter-related image10" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/housefly.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఈ</u>గ</div>
                                <div className="w-m">(HouseFly)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/eela.png" alt="letter-related image11" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/whistle.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఈ</u>ల</div>
                                <div className="w-m">(Whistle)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/eeka.jpeg" alt="letter-related image12" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/feather.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఈ</u>క</div>
                                <div className="w-m">(Feather)</div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఉ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/u.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/udutha.jpeg" alt="letter-related image13" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/squirrel.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఉ</u>డత</div>
                                <div className="w-m">(Squirrel)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ungaram.jpg" alt="letter-related image14" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/ring.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఉం</u>గరం</div>
                                <div className="w-m">(Ring)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/usiri.jpeg" alt="letter-related image15" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/usiri.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఉ</u>సిరికాయ</div>
                                <div className="w-m">(Amla)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఊ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/uu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ooyala.jpg" alt="letter-related image16" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/cradle.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఊ</u>యల</div>
                                <div className="w-m">(Cradle)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ooha.jpeg" alt="letter-related image17" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/imagination.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఊ</u>హ</div>
                                <div className="w-m">(Imagination)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ootha.jpeg" alt="letter-related image18" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/blow.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఊ</u>త</div>
                                <div className="w-m">(Blow)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl3">
                            <div className="wl">ఋ</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/ru.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div> 
                        <div className="outer-wl3">
                            <div className="wl">ౠ</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/ruu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/rushi.png" alt="letter-related image19" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/rushi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఋ</u>షి</div>
                                <div className="w-m">(Sage)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ruthuvu.png" alt="letter-related image20" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/season.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఋ</u>తువు</div>
                                <div className="w-m">(Season)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/runam.jpg" alt="letter-related image21" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/loan.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఋ</u>ణం</div>
                                <div className="w-m">(Loan)</div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఎ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ae.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/eluka.jpeg" alt="letter-related image22" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/rat.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఎ</u>లుక</div>
                                <div className="w-m">(Rat)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ekaram.jpeg" alt="letter-related image23" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/Acre.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఎ</u>కరం</div>
                                <div className="w-m">(Acre)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/eruvulu.jpeg" alt="letter-related image24" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/Fertiliser.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఎ</u>రువులు</div>
                                <div className="w-m">(Fertiliser)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఏ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/aee.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/aenugu.jpg" alt="letter-related image25" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/elephant.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఏ</u>నుగు</div>
                                <div className="w-m">(Elephant)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/aedu.jpeg" alt="letter-related image26" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/seven.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఏ</u>డు</div>
                                <div className="w-m">(Seven)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/aemiti.jpeg" alt="letter-related image27" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/what.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఏ</u>మిటి</div>
                                <div className="w-m">(What)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఐ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/i.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/airavatham.jpg" alt="letter-related image28" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/iravatham.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఐ</u>రావతం</div>
                                <div className="w-m">(Vehicle of Lord Indra)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/aidhu.jpeg" alt="letter-related image29" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/5.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఐ</u>దు</div>
                                <div className="w-m">(Five)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/aishwaryam.jpg" alt="letter-related image30" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/wealth.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఐ</u>శ్వర్యం</div>
                                <div className="w-m">(Wealth)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                 <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఒ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/o.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/onte.jpg" alt="letter-related image31" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/camel.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఒం</u>టె</div>
                                <div className="w-m">(Onte)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/okati.jpeg" alt="letter-related image32" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/1.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఒ</u>కటి</div>
                                <div className="w-m">(One)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/odi.jpeg" alt="letter-related image33" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/lap.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఒ</u>డి</div>
                                <div className="w-m">(Lap)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఓ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/oo.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                        <div className="outer-wl">
                            <div className="wl">ఔ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ou.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>  
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/oada.jpeg" alt="letter-related image34" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/ship.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఓ</u>డ</div>
                                <div className="w-m">(Ship)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/oatami.jpeg" alt="letter-related image35" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/defeat.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఓ</u>టమి</div>
                                <div className="w-m">(Defeat)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/oushadam.jpeg" alt="letter-related image36" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/madicine.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఔ</u>షధం</div>
                                <div className="w-m">(Medicine)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl3">
                            <div className="wl">అం</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/aum.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>
                        <div className="outer-wl3">
                            <div className="wl">అః</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/aha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ankelu.jpeg" alt="letter-related image37" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/number.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>అం</u>కెలు</div>
                                <div className="w-m">(Numbers)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/Ambali.jpeg" alt="letter-related image38" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/ambhali.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>అం</u>బలి</div>
                                <div className="w-m">(a healthy and nutritious drink)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/Andhe.jpeg" alt="letter-related image39" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/andhelu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>అం</u>దెలు</div>
                                <div className="w-m">(a type of jewellery wore to the anklet)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" onClick={handleLeftClick} data-bs-slide="prev" data-bs-target="#banners"><span className="carousel-control-prev-icon"></span></button>
            <button className="carousel-control-next" onClick={handleRightClick} data-bs-slide="next" data-bs-target="#banners"><span className="carousel-control-next-icon"></span></button>
        </div>
    </div>
    </div>
  )
}

export default AlphaLetter
