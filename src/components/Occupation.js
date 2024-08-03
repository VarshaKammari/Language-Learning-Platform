import React, { useState } from 'react';
// import Quiz1 from '../Quizzes/Quiz1';
import './occ.css';
import Quiz11 from '../Quizzes/Quiz11';

function Occupation() {
    const [result, setResult] = useState(false);

    function handleClick() {
        setResult(true);
    }

    const handleSound=path=>{
        const ad=new Audio(path);
        ad.play();
    }

    return (
        result ? <Quiz11 /> :
        <div className='oc-cnr'>
            <h1>Occupations</h1>
            <div className="oc-main">
                <div className="oc-bx">
                    <div className="oc-b">
                        <img src="/Letters/doctor.jpeg" alt="Doctor" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/vaidyudu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>వైద్యుడు / Doctor</p>
                    </div>
                    <div className="oc-b">
                        <img src="/Letters/lawyer.jpg" alt="Lawyer" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/nyayavaadhi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>న్యాయవాది / Lawyer</p>
                    </div>
                    <div className="oc-b">
                        <img src="/Letters/police.jpg" alt="Police" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/rakshakabatudu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>రక్షకభటుడు / Police</p>
                    </div>
                </div>
                <div className="oc-bx">
                    <div className="oc-b">
                        <img src="/Letters/professor.jpeg" alt="Professor" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/acharyudu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>ఆచార్యుడు / Professor</p>
                    </div>
                    <div className="oc-b">
                        <img src="/Letters/soldier.jpeg" alt="Soldier" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/sainikudu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>సైనికుడు / Soldier</p>
                    </div>
                    <div className="oc-b">
                        <img src="/Letters/scientist.png" alt="Scientist" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/shastravetta.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>శాస్త్రవేత్త / Scientist</p>
                    </div>
                </div>
                <div className="oc-bx">
                    <div className="oc-b">
                        <img src="/Letters/carpenter.jpg" alt="Carpenter" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/vadrangi.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>వడ్రంగి / Carpenter</p>
                    </div>
                    <div className="oc-b">
                        <img src="/Letters/pexels-shkrabaanthony-7166981.jpg" alt="Goldsmith" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/swarnakarudu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>స్వర్ణకారుడు / Goldsmith</p>
                    </div>
                    <div className="oc-b">
                        <img src="/Letters/raithu.jpg" alt="Farmer" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/farmer.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>రైతు / Farmer</p>
                    </div>
                </div>
                <div className="oc-bx">
                    <div className="oc-b">
                        <img src="/Letters/pexels-reneterp-2544829.jpg" alt="Chef" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/chef.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>చెఫ్ / Chef</p>
                    </div>
                    <div className="oc-b">
                        <img src="/Letters/pexels-satyabrata-maiti-258455945-15857348.jpg" alt="Goatherd" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/gorrelakapari.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>గొర్రెల కాపరి / Shepherd</p>
                    </div>
                    <div className="oc-b">
                        <img src="/Letters/pexels-thgusstavo-2061820.jpg" alt="Barber" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/mangali.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>మంగలి / Barber</p>
                    </div>
                </div>
                <div className="oc-bx">
                    <div className="oc-b">
                        <img src="/Letters/pexels-panditwiguna-3585855.jpg" alt="Cloth Maker" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/nethapanivadu.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>నేత పనివాడు / Weaver</p>
                    </div>
                    <div className="oc-b">
                        <img src="/Letters/pexels-valeria-ushakova-603898-3094225.jpg" alt="Potter" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/kummari.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>కుమ్మరి / Potter</p>
                    </div>
                    <div className="oc-b">
                        <img src="/Letters/pexels-teona-swift-6850470.jpg" alt="Washerman" width="350" height="160" />
                        <button className='oc-bn' onClick={() => handleSound("/audio/chakali.mp3")}><i className="fa-solid fa-volume-high"></i></button>
                        <p>చాకలి / Washerman</p>
                    </div>
                </div>
            </div>
            <button className='oc-nbn' onClick={handleClick}>Next</button>
        </div>
    );
}

export default Occupation;
