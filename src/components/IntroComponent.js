import React,{useState} from 'react';
import L1 from '../Levels/L1';
import '../Levels/l1.css';

function IntroComponent() {
   const [check,setCheck]=useState(false);

  function handleClick(){
    setCheck(true);
  }

  return (
    check ? <L1 />
    :
    <div className='L1-body'>
      <h1>Telugu</h1>
      <article>
        Telugu, a Dravidian language , is known for its melodic script and phonetic richness.Telugu is spoken predominantly in the Indian states of Andhra Pradesh and Telangana, has a rich script characterized by its unique consonants and vowels.
        There are 52 alphabets in Telugu.These alphabets are divided into two categories.They are:
        <ol>
            <li>Vowels (16)</li>
            <li>Consonants (36)</li>
        </ol>
        Let's learn Vowels.Click on <u>Next</u> to start the journey of learning with vowels.
      </article>
      <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default IntroComponent;
