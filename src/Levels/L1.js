import React, { useState } from 'react';
import P1 from '../components/P1';
import './l1.css';

function L1() {
    const [result,setResult]=useState(false);
    function handleClick(){
        setResult(true);
    }
  return (
        result ? <P1 />   :
        <div className='L1-body'>
        <h1>Vowels</h1>
        <article>Vowels in Telugu play a crucial role in the pronunciation and formation of words. Understanding these vowels is essential for mastering the language.
            <br />
            The Telugu script consists of 16 primary vowels, each with a distinct sound and pronunciation. These vowels can be broadly categorized into short vowels, long vowels, diphthongs and special vowels.
            <ol>
                <li>Short Vowels: అ, ఇ, ఉ, ఋ</li>
                <li>Long Vowels: ఆ, ఈ, ఊ, ౠ</li>
                <li>Diphthongs: ఎ, ఎ, ఐ, ఒ, ఓ, ఔ</li>
                <li>Special Vowels: అం, అః</li>
            </ol>
            Let's see the pronunciation of each vowel. Click on <u>Next</u> to continue.
        </article>
        <button onClick={handleClick}>Next</button>
        </div>
  )
}

export default L1
