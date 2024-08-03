import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './components/AuthContext';
// import P1 from './components/P1';
// import Quiz7 from './Quizzes/Quiz7';
// import P2 from './components/P2';
// import Levels from './Locks/Levels';
import L13 from './Levels/L13';
import Occupation from './components/Occupation';
import L14 from './Levels/L14';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
    // <L4 />
    // <L3 />
    // <L7 />
    // <L13 />
    // <L14 />
    // <P3 />
    // <Levels />
    // <HomeComponent />
    // <L5 />
    // <AlphaLetter />
    // <QuestionComponent5 />
    // <Occupation />
    // <ConsoLetter />
    // <VowelSCompo />
    // <P2 />
    // <Quiz7 />
);