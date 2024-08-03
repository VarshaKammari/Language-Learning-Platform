import React,{useState} from 'react';
import './letter.css';

function ConsoLetter(props) {
    const [currentSlide,setCurrentSlide]=useState(0);
    const handleCheck=(path)=>{
        const ad=new Audio(path);
        ad.play().catch((error) => {
            console.error("Audio playback failed:", error);
        });
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
            <h1>Words starting with each Consonant</h1>
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">క</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ka.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/kalamu.png" alt="letter-related image1" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/kalamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>క</u>లము</div>
                                <div className="w-m">(Pen)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/kamalam.jpg" alt="letter-related image2" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/kamalam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>క</u>మలం</div>
                                <div className="w-m">(Lotus)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/kappa.jpeg" alt="letter-related image3" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/kappa.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>క</u>ప్ప</div>
                                <div className="w-m">(Frog)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఖ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/kha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/khadgam.jpeg" alt="letter-related image4" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/khadgham.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఖ</u>డ్గం</div>
                                <div className="w-m">(Sword)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/kharamu.jpeg" alt="letter-related image5" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/kharamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఖ</u>రము</div>
                                <div className="w-m">(Donkey)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/kharjuram.jpeg" alt="letter-related image6" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/khajura.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఖ</u>ర్జూరం </div>
                                <div className="w-m">(Dates)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">గ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ga.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/garita.jpeg" alt="letter-related image7" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/garita.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>గ</u>రిట</div>
                                <div className="w-m">(Spoon)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/gunde.jpeg" alt="letter-related image8" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/heart.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>గుం</u>డె</div>
                                <div className="w-m">(Heart)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/gadiyaram.jpeg" alt="letter-related image9" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/clock.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>గ</u>డియారం</div>
                                <div className="w-m">(Clock)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                    <div className="outer-wl3">
                            <div className="wl">ఘ</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/gha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div> 
                        <div className="outer-wl3">
                            <div className="wl">ఙ</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/eni.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>    
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ghantika.jpeg" alt="letter-related image10" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/ghantika.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఘం</u>టిక</div>
                                <div className="w-m">(Bell)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/gharshana.jpeg" alt="letter-related image11" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/gharshana.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఘ</u>ర్షణ</div>
                                <div className="w-m">(Fight)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ghatamu.jpeg" alt="letter-related image12" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/ghatamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఘ</u>టము</div>
                                <div className="w-m">(Pot)</div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">చ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/cha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/chakram.jpeg" alt="letter-related image13" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/chakram.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>చ</u>క్రం</div>
                                <div className="w-m">(Wheel)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/chandamama.jpeg" alt="letter-related image14" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/moon.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>చం</u>దమామ</div>
                                <div className="w-m">(Moon)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/chokka.jpg" alt="letter-related image15" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/chokka.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>చొ</u>క్కా</div>
                                <div className="w-m">(Shirt)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఛ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/chha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/chhatrapathi.jpeg" alt="letter-related image16" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/chatrapthi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఛ</u>త్రపతి</div>
                                <div className="w-m">(King)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/chhatram.jpg" alt="letter-related image17" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/chatram.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఛ</u>త్రము</div>
                                <div className="w-m">(Umbrella)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/chhayachitram.png" alt="letter-related image18" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/chayachitram.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఛా</u>యాచిత్రం</div>
                                <div className="w-m">(Photograph)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">జ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ja.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/jada.jpeg" alt="letter-related image16" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/jada.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>జ</u>డ</div>
                                <div className="w-m">(Braid)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/jalleda.jpeg" alt="letter-related image17" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/jalleda.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>జ</u>ల్లెడ</div>
                                <div className="w-m">(Sieve)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/jaamaakaaya.jpg" alt="letter-related image18" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/jamakaya.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>జా</u>మకాయ</div>
                                <div className="w-m">(Guava)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl3">
                            <div className="wl">ఝ</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/jha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div> 
                        <div className="outer-wl3">
                            <div className="wl">ఞ</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/enya.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/jhanda.jpeg" alt="letter-related image16" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/jenda.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఝం</u>డా</div>
                                <div className="w-m">(Flag)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/jhari.jpg" alt="letter-related image17" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/jhari.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఝ</u>రి</div>
                                <div className="w-m">(Waterfall)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/jhashamu.jpeg" alt="letter-related image18" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/jhashamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఝ</u>షము</div>
                                <div className="w-m">(Fish)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ట</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ta.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/tenkaya.png" alt="letter-related image16" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/tenkaya.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>టెం</u>కాయ</div>
                                <div className="w-m">(Coconut)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/tomato.png" alt="letter-related image17" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/tomato.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ట</u>మాట</div>
                                <div className="w-m">(Tomato)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/toopi.jpeg" alt="letter-related image18" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/topi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>టో</u>పి</div>
                                <div className="w-m">(Hat)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఠ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/tta.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ttaana.jpg" alt="letter-related image16" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/ttana.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఠా</u>ణా</div>
                                <div className="w-m">(Police Station)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/tteevi.png" alt="letter-related image17" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/tv.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఠీ</u>వి</div>
                                <div className="w-m">(Loyalty)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/kanttam.jpg" alt="letter-related image18" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/kantam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w">కం<u>ఠం</u></div>
                                <div className="w-m">(Voice)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">డ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/da.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/dabba.jpg" alt="letter-related image16" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/dabba.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>డ</u>బ్బా</div>
                                <div className="w-m">(Box)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/dabbu.jpg" alt="letter-related image17" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/dabbu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>డ</u>బ్బు</div>
                                <div className="w-m">(Money)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/dappu.png" alt="letter-related image18" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/dappu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>డ</u>ప్పు</div>
                                <div className="w-m">(Drum)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl3">
                            <div className="wl">ఢ</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/dda.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div> 
                        <div className="outer-wl3">
                            <div className="wl">ణ</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/ana.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>    
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/Ddamarukham.jpg" alt="letter-related image16" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/ddamarukam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఢ</u>మరుకం</div>
                                <div className="w-m">(A type of musical instrument)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ddolu.jpeg" alt="letter-related image17" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/dolu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఢో</u>లు</div>
                                <div className="w-m">(A type of musical instrument)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ddeekonu.jpeg" alt="letter-related image18" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/ddikonu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఢీ</u>కొను</div>
                                <div className="w-m">(Collision)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">త</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/tha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/thalupu.png" alt="letter-related image16" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/thalupu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>త</u>లుపు</div>
                                <div className="w-m">(Door)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/thealu.png" alt="letter-related image17" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/thelu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>తే</u>లు</div>
                                <div className="w-m">(Scorpion)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/thookamu.jpg" alt="letter-related image18" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/thukamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>తూ</u>కము</div>
                                <div className="w-m">(Weighing Balance)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl3">
                            <div className="wl">థ</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/ttha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div> 
                        <div className="outer-wl3">
                            <div className="wl">ద</div>
                            <button className="wl3-btn" onClick={() => handleCheck("/audio/dha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/dhanda.jpeg" alt="letter-related image16" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/dhanda.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>దం</u>డ</div>
                                <div className="w-m">(Garland)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/dhindu.jpeg" alt="letter-related image17" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/dindu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>దిం</u>డు</div>
                                <div className="w-m">(Pillow)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/dhooda.jpeg" alt="letter-related image18" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/duda.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>దూ</u>డ</div>
                                <div className="w-m">(Calf)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ధ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/dhha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/dhhaanyamu.jpg" alt="letter-related image16" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/dhanyamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ధా</u>న్యము</div>
                                <div className="w-m">(Grains)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/dhhaniyaalu.png" alt="letter-related image17" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/dhaniyalu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ధ</u>నియాలు</div>
                                <div className="w-m">(Coriander Seeds)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/dhheerudu.jpeg" alt="letter-related image18" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/dhirudu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ధీ</u>రుడు</div>
                                <div className="w-m">(Brave)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">న</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/na.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/naga.jpeg" alt="letter-related image22" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/naga.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>న</u>గ</div>
                                <div className="w-m">(Jewellery)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/nattha.jpg" alt="letter-related image23" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/nattha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>న</u>త్త</div>
                                <div className="w-m">(Snail)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/nemali.jpg" alt="letter-related image24" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/nemali.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>నె</u>మలి</div>
                                <div className="w-m">(Peacock)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ప</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/pa.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/panjaram.jpeg" alt="letter-related image22" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/panjaram.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w">పంజరం</div>
                                <div className="w-m">(Cage)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/palaka.jpeg" alt="letter-related image23" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/palaka.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w">పలక</div>
                                <div className="w-m">(Slate)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/pandhi.jpeg" alt="letter-related image24" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/pandi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w">పంది</div>
                                <div className="w-m">(Pig)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ఫ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/pha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/phalam.jpg" alt="letter-related image25" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/phalamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w">ఫలము</div>
                                <div className="w-m">(Fruit)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/pheravamu.jpeg" alt="letter-related image26" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/pheravamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w">ఫేరవము</div>
                                <div className="w-m">(Jackal)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/phirangi.jpeg" alt="letter-related image27" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/phirangi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w">ఫిరంగి</div>
                                <div className="w-m">(Cannon)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">బ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ba.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/bellamu.png" alt="letter-related image25" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/bellamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>బె</u>ల్లం</div>
                                <div className="w-m">(Jaggery)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/balapam.jpg" alt="letter-related image26" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/balapam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>బ</u>లపం</div>
                                <div className="w-m">(Slate Pencil)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/banthi.jpeg" alt="letter-related image27" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/banti.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>బం</u>తి</div>
                                <div className="w-m">(Ball)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">భ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/bha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/bhhakti.jpg" alt="letter-related image25" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/bhakti.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>భ</u>క్తి</div>
                                <div className="w-m">(Devotion)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/bhhavanamu.png" alt="letter-related image26" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/bhavanamu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>భ</u>వనం</div>
                                <div className="w-m">(Building)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/bhharine.jpg" alt="letter-related image27" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/bharine.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>భ</u>రిణె</div>
                                <div className="w-m">(A box to store kumkum)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">మ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ma.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/maamidi.jpeg" alt="letter-related image25" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/mango.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>మా</u>మిడిపండు</div>
                                <div className="w-m">(Mango)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/meka.jpg" alt="letter-related image26" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/meka.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>మే</u>క</div>
                                <div className="w-m">(Goat)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/miriyaalu.jpeg" alt="letter-related image27" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/meriyalu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>మి</u>రియాలు</div>
                                <div className="w-m">(Pepper)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">య</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ya.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/yagnam.png" alt="letter-related image25" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/yagnam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>య</u>జ్ఞము</div>
                                <div className="w-m">(a ritual sacrifice with a specific objective)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/yantram.jpg" alt="letter-related image26" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/yantram.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>యం</u>త్రం</div>
                                <div className="w-m">(Machine)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/yuvatha.jpeg" alt="letter-related image27" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/yuvatha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>యు</u>వత</div>
                                <div className="w-m">(Youth)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ర</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ra.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/raaju.jpg" alt="letter-related image28" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/raju.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>రా</u>జు</div>
                                <div className="w-m">(King)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/raamachiluka.jpg" alt="letter-related image29" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/ramachiluka.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>రా</u>మచిలుక</div>
                                <div className="w-m">(Parrot)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/raithu.jpg" alt="letter-related image30" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/farmer.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>రై</u>తు</div>
                                <div className="w-m">(Farmer)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ల</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/la.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/laddu.jpeg" alt="letter-related image28" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/laddu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ల</u>డ్డు</div>
                                <div className="w-m">(a type of sweet)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/lavanam.jpeg" alt="letter-related image29" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/lavanam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ల</u>వణం</div>
                                <div className="w-m">(Salt)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ledi.jpg" alt="letter-related image30" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/ledi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>లే</u>డి</div>
                                <div className="w-m">(Deer)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">వ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/va.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/vanthena.jpeg" alt="letter-related image28" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/vanthena.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>వం</u>తెన</div>
                                <div className="w-m">(Bridge)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/vala.jpeg" alt="letter-related image29" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/vala.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>వ</u>ల</div>
                                <div className="w-m">(Net)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/vankaaya.jpg" alt="letter-related image30" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/vankaya.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w">వంకాయ</div>
                                <div className="w-m">(Brinjal)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">శ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/she.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/shenkam.jpeg" alt="letter-related image28" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/shankam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>శం</u>ఖం</div>
                                <div className="w-m">(Conch)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/shenagalu.jpeg" alt="letter-related image29" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/shanigalu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>శ</u>నగలు</div>
                                <div className="w-m">(Chickpeas)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/dhesham.jpg" alt="letter-related image30" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/dhesham.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w">దే<u>శం</u></div>
                                <div className="w-m">(Country)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">ష</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/sha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/shadbuji.jpeg" alt="letter-related image28" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/shedbhuji.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ష</u>డ్భుజి</div>
                                <div className="w-m">(Hexagon)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/shikaaru.jpeg" alt="letter-related image29" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/shekaru.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>షి</u>కారు</div>
                                <div className="w-m">(A walk)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/vesham.jpg" alt="letter-related image30" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/vesham.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w">వే<u>షం</u></div>
                                <div className="w-m">(Costume)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">స</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/sa.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/simham.jpg" alt="letter-related image28" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/simham.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>సిం</u>హం</div>
                                <div className="w-m">(Lion)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/seethaphalam.jpeg" alt="letter-related image29" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/seethaphalam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>సీ</u>తాఫలం</div>
                                <div className="w-m">(Custard apple)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/soodhi.jpeg" alt="letter-related image30" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/suudhi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>సూ</u>ది</div>
                                <div className="w-m">(Needle)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl">
                            <div className="wl">హ</div>
                            <button className="wl-btn" onClick={() => handleCheck("/audio/ha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/hamsa.jpg" alt="letter-related image28" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/Hamsa.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>హం</u>స</div>
                                <div className="w-m">(Swan)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/harivillu.png" alt="letter-related image29" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/harivillu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>హ</u>రివిల్లు</div>
                                <div className="w-m">(Rainbow)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/hechharika.jpeg" alt="letter-related image30" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/hecharika.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>హె</u>చ్చరిక</div>
                                <div className="w-m">(Warning)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item" >
                <div className="l-outer">
                    <div className="wl1">
                        <div className="outer-wl4">
                            <div className="wl">ళ</div>
                            <button className="wl4-btn" onClick={() => handleCheck("/audio/ala.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>
                        <div className="outer-wl4">
                            <div className="wl">క్ష</div>
                            <button className="wl4-btn" onClick={() => handleCheck("/audio/ksha.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div> 
                        <div className="outer-wl4">
                            <div className="wl">ఱ</div>
                            <button className="wl4-btn" onClick={() => handleCheck("/audio/routhi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        </div>   
                    </div>
                    <div className="wl2">
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/thaalam.jpeg" alt="letter-related image19" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/thaalam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w">తా<u>ళం</u></div>
                                <div className="w-m">(Lock)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/ksheeram.jpeg" alt="letter-related image20" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/kshiramu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>క్షీ</u>రం</div>
                                <div className="w-m">(Milk)</div>
                            </div>
                        </div>
                        <div className="w2">
                            <div className="wp">
                                <img src="./Letters/rampam.jpg" alt="letter-related image21" />
                                <button className="w-btn" onClick={() => handleCheck("/audio/rampam.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                            </div>
                            <div className="wn">
                                <div className="w-w"><u>ఱం</u>పం</div>
                                <div className="w-m">(HandSaw)</div>
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

export default ConsoLetter
