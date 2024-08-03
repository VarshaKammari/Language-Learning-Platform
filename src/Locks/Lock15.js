import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import './lock.css';


function Lock15({ score ,target}) {
    const {user,updateScore}=useAuth();
    const [progress,setProgress]=useState(user ? user.score : 0);
    const [state,setState]=useState(false);
    const navigate=useNavigate();

    useEffect(() => {
        if (score >= target) {
            setProgress(15);
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
            navigate('/level14');
        }
    }

    async function handleNextClick(){
        if(state){
            const res=await updateScore(progress);
            if (res) {
                navigate('/level16');
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
                <div className="lgrid" id='ll9'>9</div>
                <div className="lgrid" id='ll13'>13</div>
            </div>
            <div className="lrow">
                <div className="lgrid" id='ll2'>2</div>
                <div className="lgrid" id='ll6'>6</div>
                <div className="lgrid" id='ll10'>10</div>
                <div className="lgrid" id='ll14'>14</div>
            </div>
            <div className="lrow">
                <div className="lgrid" id='ll3'>3</div>
                <div className="lgrid" id='ll7'>7</div>
                <div className="lgrid" id='ll11'>11</div>
                <div className="lgrid" id='ll15'>15</div>
            </div>
            <div className="lrow">
                <div className="lgrid" id='ll4'>4</div>
                <div className="lgrid" id='ll8'>8</div>
                <div className="lgrid" id='ll12'>12</div>
                <div className="lgrid" id='ll16'>{unlockLevel(16)}</div>
            </div>
        </div>
        <div className='btn-group custom-btn-group'>
            <button className="btn btn-secondary" onClick={handlePrevClick}><i className="fa-solid fa-chevron-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;Previous</button>
            <button className="btn btn-primary" onClick={handleNextClick}>Next&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
  )
}

export default Lock15;

