import React, { useState } from 'react';
import AlphaComponent from './AlphaComponent';
import Quiz1 from '../Quizzes/Quiz1';

function P1() {
    const [showQuestion, setShowQuestion] = useState(false);

    const handleSlideChange = (currentSlide) => {
        if (currentSlide == 5) {
            setShowQuestion(true);
        } else {
            setShowQuestion(false);
        }
    };

    return (
        <div>
            {showQuestion ? <Quiz1 /> : <AlphaComponent onClick={handleSlideChange} />}
        </div>
    );
}

export default P1;
