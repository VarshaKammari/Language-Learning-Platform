import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomeComponent from "./pages/HomeComponent";
import L2 from "./Levels/L2";
import L3 from "./Levels/L3";
import L4 from "./Levels/L4";
import L6 from "./Levels/L6";
import Quiz7 from './Quizzes/Quiz7';
import Quiz10 from './Quizzes/Quiz10';
import P3 from "./components/P3";
import P4 from "./components/P4";
import Language from "./components/Language";
import IntroComponent from "./components/IntroComponent";
import NavBar from "./components/NavBar";
import P5 from "./components/P5";
import Occupation from "./components/Occupation";
import L12 from "./Levels/L12";
import L13 from "./Levels/L13";
import L14 from "./Levels/L14";
import L15 from "./Levels/L15";
import Quiz16 from "./Quizzes/Quiz16";
import End from "./components/End";

const App=()=>{
    return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<HomeComponent />}/>
                <Route path="/register" exact element={<><NavBar /><Signup /></>}/>
                <Route path="/login" exact element={<><NavBar /><Login /></>}/>
                <Route path="/course" exact element={<><NavBar /><Language/></>} />
                <Route path="/level1" exact element={<><NavBar /><IntroComponent/></>} />
                <Route path="/level2" exact element={<><NavBar /><L2/></>} />
                <Route path="/level3" exact element={<><NavBar /><L3/></>} />
                <Route path="/level4" exact element={<><NavBar /><L4/></>} />
                <Route path="/level5" exact element={<><NavBar /><P3/></>} />
                <Route path="/level6" exact element={<><NavBar /><L6/></>} />
                <Route path="/level7" exact element={<><NavBar /><Quiz7/></>} />
                <Route path="/level8" exact element={<><NavBar /><P4 /></>} />
                <Route path="/level9" exact element={<><NavBar /><P5 /></>} />
                <Route path="/level10" exact element={<><NavBar /><Quiz10/></>} />
                <Route path="/level11" exact element={<><NavBar /><Occupation/></>} />
                <Route path="/level12" exact element={<><NavBar /><L12/></>} />
                <Route path="/level13" exact element={<><NavBar /><L13/></>} />
                <Route path="/level14" exact element={<><NavBar /><L14/></>} />
                <Route path="/level15" exact element={<><NavBar /><L15/></>} />
                <Route path="/level16" exact element={<><NavBar /><Quiz16/></>} />
                <Route path="/End" exact element={<><NavBar /><End /></>} />
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;