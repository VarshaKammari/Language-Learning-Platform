import React,{useState} from 'react';
import './l1.css';
import Quiz15 from '../Quizzes/Quiz15';

function L15() {
  const [result,setResult]=useState(false);
  function handleClick(){
      setResult(true);
  }
  return (
    result ? <Quiz15 /> :
    <div className='L1-body' id='height'>
      <h1 className='text-center'>Simple & Common phrases in Telugu</h1>
      <table className="table table-hover table-bordered table-striped text-center">
        <thead>
            <tr>
                <th>English</th>
                <th>Telugu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Hello</td>
                <td>నమస్కారం</td>
            </tr>
            <tr>
                <td>How are you?</td>
                <td>మీరు ఎలా ఉన్నారు?</td>
            </tr>
            
            <tr>
                <td>I am fine</td>
                <td>నేను బాగున్నాను</td>
            </tr>
            <tr>
                <td>Thank you</td>
                <td>ధన్యవాదాలు</td>
            </tr>
            <tr>
                <td>Please</td>
                <td>దయచేసి</td>
            </tr>
            <tr>
                <td>Yes</td>
                <td>అవును</td>
            </tr>
            <tr>
                <td>No</td>
                <td>కాదు</td>
            </tr>
            <tr>
                <td>Good morning</td>
                <td>శుభోదయం</td>
            </tr>
            <tr>
                <td>Good night</td>
                <td>శుభ రాత్రి</td>
            </tr>
            <tr>
                <td>Goodbye</td>
                <td>వీడ్కోలు</td>
            </tr>
            <tr>
                <td>Excuse me</td>
                <td>క్షమించండి</td>
            </tr>
            <tr>
                <td>I am sorry</td>
                <td>నన్ను క్షమించండి</td>
            </tr>
            <tr>
                <td>I don't understand</td>
                <td>నాకు అర్థం కాలేదుమరిది</td>
            </tr>
            <tr>
                <td>Can you help me?</td>
                <td>మీరు నాకు సహాయం చేయగలరా?</td>
            </tr>
            <tr>
                <td>What is your name?</td>
                <td>మీ పేరు ఏమిటి?</td>
            </tr>
            <tr>
                <td>My name is [Name]</td>
                <td>నా పేరు [Name]</td>
            </tr>
            <tr>
                <td>How much is this?</td>
                <td>ఇది ఎంత?</td>
            </tr>
            <tr>
                <td>I am hungry</td>
                <td>నాకు ఆకలి వేస్తుంది</td>
            </tr>
            <tr>
                <td>Can I get the bill?</td>
                <td>నా బిల్లు ఇవ్వండి</td>
            </tr>
            <tr>
                <td>Do you speak English?</td>
                <td>మీరు ఇంగ్లీష్ మాట్లాడగలరా?</td>
            </tr>
            
        </tbody>
      </table>
      <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default L15
