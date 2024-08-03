import React from 'react';
import {useNavigate} from 'react-router-dom';
import "../Levels/l1.css";

function End() {
    const navigate = useNavigate();
  function handleClick(){
    navigate("/");
  }
  return (
    <div className='L1-body'>
      <h1 className='text-center'>Achieve Mastery in Telugu</h1>
      <article>To truly excel in learning Telugu, it's essential to immerse yourself in the language beyond structured lessons. Here are some effective ways to gain practical experience and deepen your expertise:</article>
      <h5>Read Telugu Books and Journals</h5>
      <h5>Watch Telugu Movies and TV Shows</h5>
      <article>Immersing yourself in these real-world resources allows you to experience the language in its natural context. This practical exposure is invaluable in achieving fluency and confidence.</article>
      <h5>Start Your Journey Today!</h5>
      <h5 className='text-center'>Happy learning!</h5>
      <article className='text-center'>The Language Learning Platform Team</article>
      <button onClick={handleClick} id='l-bn'>Go Back</button>
    </div>
  )
}

export default End
