import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import './lock.css';


function Lock6({ score ,target}) {
    const {user,updateScore}=useAuth();
    const [progress,setProgress]=useState(user ? user.score : 0);
    const [state,setState]=useState(false);
    const navigate=useNavigate();

    useEffect(() => {
        if (score >= target) {
            setProgress(6);
            setState(true);
        } else {
            setState(false);
        }
    }, [score, target]);

    const unlockLevel = (index) => {
        if(score>=target)
        {
            return index;
        }else{
            return <i className="fa-solid fa-lock"></i>;
        }
    };

    function handlePrevClick(){
        if(state)
        {
            window.location.reload();
        }else{
            navigate('/level5');
        }
    }

    async function handleNextClick(){
        if(state){
            const res=await updateScore(progress);
            if (res) {
                navigate('/level7');
            } else {
                alert('Failed to update score');
            }
        }
        else{
            window.location.reload();
        }
    }

  return (
    <div className="lmain">
        <div className="lbox">
            <div className="lrow">
                <div className="lgrid" id='ll1'>1</div>
                <div className="lgrid" id='ll5'>5</div>
                <div className="lgrid" id='ll9'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll13'><i className="fa-solid fa-lock"></i></div>
            </div>
            <div className="lrow">
                <div className="lgrid" id='ll2'>2</div>
                <div className="lgrid" id='ll6'>6</div>
                <div className="lgrid" id='ll10'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll14'><i className="fa-solid fa-lock"></i></div>
            </div>
            <div className="lrow">
                <div className="lgrid" id='ll3'>3</div>
                <div className="lgrid" id='ll7'>{unlockLevel(7)}</div>
                <div className="lgrid" id='ll11'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll15'><i className="fa-solid fa-lock"></i></div>
            </div>
            <div className="lrow">
                <div className="lgrid" id='ll4'>4</div>
                <div className="lgrid" id='ll8'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll12'><i className="fa-solid fa-lock"></i></div>
                <div className="lgrid" id='ll16'><i className="fa-solid fa-lock"></i></div>
            </div>
        </div>
        <div className='btn-group custom-btn-group'>
            <button className="btn btn-secondary" onClick={handlePrevClick}><i className="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;Previous</button>
            <button className="btn btn-primary" onClick={handleNextClick}>Next&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
  )
}

export default Lock6;

