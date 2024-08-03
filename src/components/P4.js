import React, { useState } from 'react';
import Quiz8 from '../Quizzes/Quiz8';
import AlphaLetter from './AlphaLetter';

function P4() {
    const [showQuestion, setShowQuestion] = useState(false);

    const handleSlideChange = (currentSlide) => {
        if (currentSlide == 13) {
            setShowQuestion(true);
        } else {
            setShowQuestion(false);
        }
    };

    return (
        <div>
            {showQuestion ? <Quiz8 /> : <AlphaLetter onClick={handleSlideChange} />}
        </div>
    );
}

export default P4;
