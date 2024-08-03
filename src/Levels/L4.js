import React,{useState} from 'react';
import VowelSCompo from '../components/VowelSCompo';
import './l1.css';

function L4() {
    const [result,setResult]=useState(false);
    function handleClick(){
        setResult(true);
    }
  return (
        result ? <VowelSCompo />   :
        <div className='L1-body' style={{height:"auto"}}>
        <h1>Vowel Signs</h1>
        <article>
        The vowel signs, or mātras, play a crucial role in modifying the base consonants to create syllables. Understanding these vowel signs is essential for reading, writing, and proper pronunciation in Telugu.
          <br />
          In Telugu, each vowel has a corresponding vowel sign that attaches to a consonant to form a complete syllable. Here are the vowel signs associated with each primary vowel:
          <ol>
            <li>
                Short Vowel Signs
                <ol>
                    <li>అ - ✓</li>
                    <li>ఇ -  ి</li>
                    <li>ఉ - ు</li>
                    <li>ఋ - ృ</li>
                </ol>
            </li>
            <li>Long Vowel Signs
                <ol>
                    <li>ఆ -  ా</li>
                    <li>ఈ -  ీ</li>
                    <li>ఊ - ూ</li>
                    <li>ౠ - ౄ</li>
                </ol>
            </li>
            <li>Diphthong Signs
                <ol>
                    <li>ఎ -  ె</li>
                    <li>ఏ -  ే</li>
                    <li>ఐ -   ై</li>
                    <li>ఒ -   ొ</li>
                    <li>ఓ -   ో</li>
                    <li>ఔ -   ౌ</li>
                </ol>
            </li>
            <li>Special Vowel Signs
                <ol>
                    <li>అం -  ం</li>
                    <li>అః -  ః</li>
                </ol>
            </li>
          </ol>
            Let's see the pronunciation of each vowel sign.
            Click on <u>Next</u> to continue.
        </article>
        <button onClick={handleClick}>Next</button>
        </div>
  )
}

export default L4
