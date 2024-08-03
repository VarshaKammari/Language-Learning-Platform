import React, { useState } from 'react';
import ConsoComponent from './ConsoComponent';
import Quiz2 from '../Quizzes/Quiz2';

function P2() {
    const [showQuestion, setShowQuestion] = useState(false);

    const handleSlideChange = (currentSlide) => {
        if (currentSlide == 8) {
            setShowQuestion(true);
        } else {
            setShowQuestion(false);
        }
    };

    return (
        <div>
            {showQuestion ? <Quiz2 /> : <ConsoComponent onClick={handleSlideChange} />}
        </div>
    );
}

export default P2;
