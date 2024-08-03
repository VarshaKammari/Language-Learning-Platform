import React,{useState} from 'react';
import Quiz3 from '../Quizzes/Quiz3';
import './l1.css';

function L3() {
  const [result,setResult]=useState(false);
  function handleClick(){
      setResult(true);
  }
  return (
    result ? <Quiz3 /> :
    <div className='L1-body' style={{height:"auto"}}>
      <h1>Revision Time ⏰</h1>
      <article>Let's revise the concepts, that we have learnt till now.</article>
      <div className='l-display'>
        <div className='l-block'>
          <img src='/Letters/Vowels.png' className="img-fluid" height={400} width={400} alt='vowels' />
        </div>
        <div className='l-block'>
          <img src='/Letters/c1.png' className="img-fluid" height={400} width={400} alt='consonants1' />
        </div>
        <div className='l-block'>
          <img src='/Letters/c2.png' className="img-fluid" height={400} width={400} alt='consonants2' />
        </div>
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default L3
