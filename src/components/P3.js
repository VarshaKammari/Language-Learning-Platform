import React, { useState } from 'react';
import AlphaE from './AlphaE';
import Quiz5 from '../Quizzes/Quiz5';

function P3() {
    const [showQuestion, setShowQuestion] = useState(false);

    const handleSlideChange = (currentSlide) => {
        if (currentSlide == 9) {
            setShowQuestion(true);
        } else {
            setShowQuestion(false);
        }
    };

    return (
        <div>
            {showQuestion ? <Quiz5 /> : <AlphaE onClick={handleSlideChange} />}
        </div>
    );
}

export default P3;
