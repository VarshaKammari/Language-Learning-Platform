import React, { useState } from 'react';
import Quiz9 from '../Quizzes/Quiz9';
import ConsoLetter from './ConsoLetter';

function P5() {
    const [showQuestion, setShowQuestion] = useState(false);

    const handleSlideChange = (currentSlide) => {
        if (currentSlide == 30) {
            setShowQuestion(true);
        } else {
            setShowQuestion(false);
        }
    };

    return (
        <div>
            {showQuestion ? <Quiz9 /> : <ConsoLetter onClick={handleSlideChange} />}
        </div>
    );
}

export default P5;
