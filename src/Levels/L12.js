import React,{useState} from 'react';
import './l1.css';
import Quiz12 from '../Quizzes/Quiz12';

function L12() {
  const [result,setResult]=useState(false);
  function handleClick(){
      setResult(true);
  }
  return (
    result ? <Quiz12 /> :
    <div className='L1-body h-100'>
      <h1 className='text-center'>Numbers(సంఖ్యలు)</h1>
      <table className="table table-hover table-bordered table-striped text-center">
        <thead>
            <tr>
                <th>Number</th>
                <th>Telugu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>ఒకటి</td>
            </tr>
            <tr>
                <td>2</td>
                <td>రెండు</td>
            </tr>
            <tr>
                <td>3</td>
                <td>మూడు</td>
            </tr>
            <tr>
                <td>4</td>
                <td>నాలుగు</td>
            </tr>
            <tr>
                <td>5</td>
                <td>ఐదు</td>
            </tr>
            <tr>
                <td>6</td>
                <td>ఆరు</td>
            </tr>
            <tr>
                <td>7</td>
                <td>ఏడు</td>
            </tr>
            <tr>
                <td>8</td>
                <td>ఎనిమిది</td>
            </tr>
            <tr>
                <td>9</td>
                <td>తొమ్మిది</td>
            </tr>
            <tr>
                <td>10</td>
                <td>పది</td>
            </tr>
            <tr>
                <td>20</td>
                <td>ఇరవై</td>
            </tr>
            <tr>
                <td>30</td>
                <td>ముప్పై</td>
            </tr>
            <tr>
                <td>40</td>
                <td>నలభై</td>
            </tr>
            <tr>
                <td>50</td>
                <td>యాభై</td>
            </tr>
            <tr>
                <td>60</td>
                <td>అరవై</td>
            </tr>
            <tr>
                <td>70</td>
                <td>డెబ్బై</td>
            </tr>
            <tr>
                <td>80</td>
                <td>ఎనభై</td>
            </tr>
            <tr>
                <td>90</td>
                <td>తొంభై</td>
            </tr>
            <tr>
                <td>100</td>
                <td>వంద</td>
            </tr>
            <tr>
                <td>1000</td>
                <td>వెయ్యి</td>
            </tr>
        </tbody>
      </table>
      <br />
      <h1 className='text-center'>Days of the Week</h1>
      <table className="table text-center table-bordered table-striped table-hover">
        <thead>
            <tr>
                <th>English</th>
                <th>Telugu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sunday</td>
                <td>ఆదివారం</td>
            </tr>
            <tr>
                <td>Monday</td>
                <td>సోమవారం</td>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>మంగళవారం </td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>బుధవారం</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>గురువారం</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>శుక్రవారం</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>శనివారం</td>
            </tr>
        </tbody>
            
       </table>
       <button id="l-bn" onClick={handleClick}>Next</button>
    </div>
  )
}

export default L12
