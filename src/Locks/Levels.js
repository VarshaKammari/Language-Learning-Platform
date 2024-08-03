import React from 'react';
// import React,{useState,useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../components/AuthContext';
import './lock.css';


function Levels() {
    // const {user,updateScore}=useAuth();
    // const [progress,setProgress]=useState(user ? user.score : 0);
    // const [state,setState]=useState(false);
    // const navigate=useNavigate();

    // useEffect(() => {
    //     if (score >= target) {
    //         setProgress(1);
    //         setState(true);
    //     } else {
    //         setState(false);
    //     }
    // }, [score, target]);

    // const unlockLevel = (index) => {
    //     if(score>=target)
    //     {
            
    //         return index;
    //     }else{
    //         return <i className="fa-solid fa-lock"></i>;
    //     }
    // };

    // function handlePrevClick(){
    //     if(state)
    //     {
    //         window.location.reload();
    //     }
    // }

    // async function handleNextClick(){
    //     if(state){
    //         const res=await updateScore(progress);
    //         if (res) {
    //             navigate('/level2');
    //         } else {
    //             alert('Failed to update score');
    //         }
    //     }
    //     else{
    //         window.location.reload();
    //     }
    // }

  return (
    <div className="lmain">
        <div className="lbox">
            <div className="lrow">
                <div className="lgrid" id='ll1'>1</div>
                <div className="lgrid" id='ll5'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll9'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll13'><i className="fa-solid fa-lock"></i></div>
            </div>
            <div className="lrow">
                <div className="lgrid" id='ll2'>2</div>
                <div className="lgrid" id='ll6'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll10'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll14'><i className="fa-solid fa-lock"></i></div>
            </div>
            <div className="lrow">
                <div className="lgrid" id='ll3'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll7'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll11'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll15'><i className="fa-solid fa-lock"></i></div>
            </div>
            <div className="lrow">
                <div className="lgrid" id='ll4'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll8'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll12'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll16'><i className="fa-solid fa-lock"></i></div>
            </div>
        </div>
        <div className='btn-group custom-btn-group'>
            <button className='btn btn-secondary disabled'><i className="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;Previous</button>
            <button className="btn btn-primary">Next&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
  )
}

export default Levels;

