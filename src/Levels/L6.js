import React,{useState} from 'react'
import ConsoSCompo from '../components/ConsoSCompo';

function L6() {
    const [result,setResult]=useState(false);
    function handleClick(){
        setResult(true);
    }
  return (
        result ? <ConsoSCompo />   :
        <div className='L1-body'>
        <h1>Consonant Signs</h1>
        <p>
        Consonant signs, also known as conjunct consonants or ligatures, play an important role in representing certain sounds and enhancing the phonetic diversity of the language. Understanding these consonant signs is essential for proper pronunciation, reading, and writing in Telugu.
          <br />
          <br/>
          Consonant signs in Telugu are formed by combining two or more consonants, often with a vowel sign. These combinations create complex sounds that are integral to the language.
        <br/>
        <br/>
            Let's see each consonant and it's respective consonant sign.
            Click on <u>Next</u> to continue.
        </p>
        <button onClick={handleClick}>Next</button>
        </div>
    )
}

export default L6
