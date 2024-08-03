import React,{useState} from 'react';
import P2 from '../components/P2';
import './l1.css';

function L2() {
    const [result,setResult]=useState(false);
    function handleClick(){
        setResult(true);
    }
  return (
        result ? <P2 />   :
        <div className='L1-body'>
        <h1>Consonants</h1>
        <article>
          Learningconsonants is crucial for proper pronunciation, reading, and writing in Telugu. Whether you are a beginner or looking to refine your language skills, understanding these consonants will significantly enhance your grasp of Telugu.
          <br />
          The Telugu script has 36 primary consonants, each with a distinct sound and pronunciation. These consonants are categorized into five main groups based on their phonetic properties.
          <ol>
            <li>Guttural Consonants: క, ఖ, గ, ఘ, ఙ</li>
            <li>Palatal Consonants: చ, ఛ, జ, ఝ, ఞ</li>
            <li>Retroflex Consonants: ట, ఠ, డ, ఢ, ణ</li>
            <li>Dental Consonants: త, థ, ద, ధ, న</li>
            <li>Labial Consonants: ప, ఫ, బ, భ, మ</li>
            <li>Additional Consonants: య, ర, ల, వ, శ, ష, స, హ, ళ, క్ష, ఱ</li>
          </ol>
            Let's see the pronunciation of each consonant.
            Click on <u>Next</u> to continue.
        </article>
        <button onClick={handleClick}>Next</button>
        </div>
  )
}

export default L2
