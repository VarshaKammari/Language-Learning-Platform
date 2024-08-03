import React,{useState} from 'react'
import './l1.css';
import Quiz13 from '../Quizzes/Quiz13';

function L13() {
  const [result,setResult]=useState(false);
  function handleClick(){
      setResult(true);
  }
  return (
    result ? <Quiz13 /> :
    <div className='L1-body h-100'>
      <h1 className='text-center'>Relations</h1>
      <table className="table table-hover table-bordered table-striped text-center">
        <thead>
            <tr>
                <th>English</th>
                <th>Telugu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Father</td>
                <td>తండ్రి</td>
            </tr>
            <tr>
                <td>Mother</td>
                <td>తల్లి</td>
            </tr>
            
            <tr>
                <td>Elder Brother</td>
                <td>అన్నయ్య</td>
            </tr>
            <tr>
                <td>Younger Brother</td>
                <td>తమ్ముడు</td>
            </tr>
            <tr>
                <td>Elder Sister</td>
                <td>అక్క</td>
            </tr>
            <tr>
                <td>Younger Sister</td>
                <td>చెల్లి</td>
            </tr>
            <tr>
                <td>Son</td>
                <td>కొడుకు</td>
            </tr>
            <tr>
                <td>Daughter</td>
                <td>కూతురు</td>
            </tr>
            <tr>
                <td>Husband</td>
                <td>భర్త</td>
            </tr>
            <tr>
                <td>Wife</td>
                <td>భార్య</td>
            </tr>
            <tr>
                <td>Father-in-law</td>
                <td>మామయ్య</td>
            </tr>
            <tr>
                <td>Mother-in-law</td>
                <td>అత్త</td>
            </tr>
            <tr>
                <td>Brother-in-law</td>
                <td>మరిది</td>
            </tr>
            <tr>
                <td>Sister-in-law</td>
                <td>మరదలు</td>
            </tr>
            <tr>
                <td>Uncle</td>
                <td>మామయ్య</td>
            </tr>
            <tr>
                <td>Aunt</td>
                <td>అత్త</td>
            </tr>
            <tr>
                <td>Grandfather (Father's father)</td>
                <td>తాత</td>
            </tr>
            <tr>
                <td>Grandmother (Father's mother)</td>
                <td>నానమ్మ</td>
            </tr>
            <tr>
                <td>Grandfather (Mother's father)</td>
                <td>తాత</td>
            </tr>
            <tr>
                <td>Grandmother (Mother's mother)</td>
                <td>అమ్మమ్మ</td>
            </tr>
            
        </tbody>
      </table>
      <br />
      <h1 className='text-center'>Time</h1>
      <table className="table text-center table-bordered table-striped table-hover">
        <thead>
            <tr>
                <th>English</th>
                <th>Telugu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Today</td>
                <td>ఈ రోజు</td>
            </tr>
            <tr>
                <td>Tomorrow</td>
                <td>రేపు</td>
            </tr>
            <tr>
                <td>Yesterday</td>
                <td>నిన్న</td>
            </tr>
            <tr>
                <td>Now</td>
                <td>ఇప్పుడు</td>
            </tr>
            <tr>
                <td>Later</td>
                <td>తరువాత</td>
            </tr>
        </tbody>
            
       </table>
      <button id='l-bn' onClick={handleClick}>Next</button>
    </div>
  )
}

export default L13
