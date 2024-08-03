import React,{useState} from 'react'
import './l1.css';
import Quiz14 from '../Quizzes/Quiz14';

function L14() {
  const [result,setResult]=useState(false);
  function handleClick(){
      setResult(true);
  }
  return (
    result ? <Quiz14 /> :
    <div className='L1-body' id='height'>
      <h1 className='text-center'>Sentence Structure in Telugu</h1>
      <article>
        In English, the basic sentence structure is Subject-Verb-Object (SVO). However, in Telugu, the structure is typically Subject-Object-Verb (SOV).
        <br/>
        <br/>
        <b>Example:</b>
        <br/>
        <b>English:</b>
        &nbsp;&nbsp;She eats a banana.
        <br />
        <b>Telugu: </b>
        &nbsp;&nbsp;ఆమె ఒక అరటిపండు తింటుంది.
        <br /> <br/>
        Here, ఆమె is the subject, <br />ఒక అరటిపండు is the object,<br/> తింటుంది is the verb.
      </article>
      <h1>Pronouns</h1>
      <article>
        Understanding pronouns is crucial for forming sentences. Here are some common pronouns in Telugu:
        <ul>
            <li>I : నేను</li>
            <li>You (singular informal) : నువ్వు</li>
            <li>You (singular formal) : మీరు</li>
            <li>He : అతడు / ఆయన (formal)</li>
            <li>She : ఆమె</li>
            <li>We : మేము</li>
            <li>They : వాళ్ళు</li>
        </ul>
      </article>
      <h1>Verb Conjugation</h1>
      <article>
        Verbs in Telugu change form based on tense, person, and number. Here are some examples:
        <h6>Present Tense:</h6>
        <ul>
            <li>I am eating : నేను తింటున్నాను</li>
            <li>You are eating : మీరు తింటున్నారు</li>
            <li>He is eating : అతడు తింటున్నాడు</li>
            <li>She is eating : ఆమె తింటోంది</li>
        </ul>
        <h6>Past Tense:</h6>
        <ul>
            <li>I ate : నేను తిన్నాను</li>
            <li>You ate : నువ్వు తిన్నావు</li>
            <li>He ate : అతడు తిన్నాడు</li>
            <li>She ate : ఆమె తిన్నది</li>
        </ul>
        <h6>Future Tense:</h6>
        <ul>
            <li>I will eat : నేను తింటాను</li>
            <li>You will eat : నువ్వు తింటావు</li>
            <li>He will eat : అతడు తింటాడు</li>
            <li>She will eat : ఆమె తింటది</li>
        </ul>
      </article>
      <h1>Questions</h1>
      <article>
        Questions in Telugu can be formed by adding question words like ఏమి (what), ఎక్కడ (where), ఎప్పుడు (when), ఎందుకు (why), ఎలా (how).
        <h6>Examples:</h6>
        <ul>
            <li>What are you doing? : నువ్వు ఏమి చేస్తున్నావు?</li>
            <li>Where are you going? : నువ్వు ఎక్కడికి వెళ్తున్నావ్?</li>
            <li>When will you come? : నువ్వు ఎప్పుడు వస్తావు?</li>
        </ul>
      </article>
      <h1>Negation statements</h1>
      <article>
        To negate a sentence in Telugu, add లేదు after the verb.
        <ol>
            <li>I don’t eat: నేను తినను</li>
            <li>She doesn’t eat: ఆమె తినదు</li>
            <li>He didn’t eat: అతడు తినలేదు</li>
        </ol>
      </article>
      <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default L14
