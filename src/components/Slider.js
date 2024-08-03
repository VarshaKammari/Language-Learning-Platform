import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Slider() {
    const navigate = useNavigate();
    const { fetchScore, token } = useAuth();

    const handleNext = async () => {
        if (token) {
            try {
                const score = await fetchScore();
                if (score === 0) {
                    navigate('/level1');
                } else if (score === 1) {
                    navigate('/level2');
                } else if (score === 2) {
                    navigate('/level3');
                } else if(score===3){
                    navigate('/level4');
                } else if(score===4){
                    navigate('/level5');
                } else if(score===5){
                    navigate('/level6');
                } else if(score===6){
                    navigate('/level7');
                } else if(score===7){
                    navigate('/level8');
                } else if(score===8){
                    navigate('/level9');
                } else if(score===9){
                    navigate('/level10');
                } else if(score===10){
                    navigate('/level11');
                } else if(score===11){
                    navigate('/level12');
                } else if(score===12){
                    navigate('/level13');
                } else if(score===13){
                    navigate('/level14');
                } else if(score===14){
                    navigate('/level15');
                }else if(score===15){
                    navigate('/level16');
                }else {
                    navigate('/End');
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    // useEffect(() => {
    //     handleNext();
    // }, [token]);
  return (
    <div className="carousel slide" data-bs-ride="false" id="banners">
        <div className="carousel-inner">
            <div className="carousel-item active bg-dark ">
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>
                                <img src="/Letters/telugu.png" className='mx-auto rounded-circle' width="200" height="200" alt='telugu'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Telugu</h5>
                                    <p className='card-text'>Telangana & AndhraPradesh</p>
                                    <button className='btn border-black' onClick={handleNext}><i className="bi bi-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>
                                    <img src="/Letters/hindi.jpeg" className='m-auto rounded-circle'  width="200" height="200" alt='Hindi'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Hindi</h5>
                                    <p className='card-text'>India</p>
                                    <button className='btn border-black disabled m-auto'><i className="bi bi-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>
                                    <img src="/Letters/sanskrit.jpeg" className='m-auto rounded-circle' width="200" height="200" alt='sanskrit'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Sanskrit</h5>
                                    <p className='card-text'>India</p>
                                    <button className='btn border-black disabled m-auto'><i className="bi bi-caret-right"></i></button>                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>
                                    <img src="/Letters/kannada.jpg" className='m-auto rounded-circle' width="200" height="200" alt='Kannada'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Kannada</h5>
                                    <p className='card-text'>Karnataka</p>
                                    <button className='btn border-black disabled m-auto'><i className="bi bi-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item bg-dark">
                <div className='container p-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>
                                    <img src="/Letters/tamil.jpg" className='m-auto rounded-circle' width="200" height="200" alt='Tamil'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Tamil</h5>
                                    <p className='card-text'>TamilNadu</p>
                                    <button className='btn border-black disabled m-auto'><i className="bi bi-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>
                                    <img src="/Letters/marati.jpg" className='m-auto rounded-circle' width="200" height="200" alt='Marathi'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Marathi</h5>
                                    <p className='card-text'>Maharashtra</p>
                                    <button className='btn border-black disabled m-auto'><i className="bi bi-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>
                                    <img src="/Letters/gujarathi.png" className='m-auto rounded-circle' width="200" height="200" alt='Gujarathi'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Gujarathi</h5>
                                    <p className='card-text'>Gujarat</p>
                                    <button className='btn border-black disabled m-auto'><i className="bi bi-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>
                                    <img src="./Letters/french.jpeg" className='m-auto rounded-circle' width="200" height="200" alt='French'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>French</h5>
                                    <p className='card-text'>France</p>
                                    <button className='btn border-black disabled m-auto'><i className="bi bi-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item bg-dark">
                <div className='container p-5'>
                    <div className='row'>
                        
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>
                                    <img src="/Letters/urdu.jpeg" className='m-auto rounded-circle' width="200" height="200" alt='Urdu'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Urdu</h5>
                                    <p className='card-text'>Pakistan</p>
                                    <button className='btn border-black disabled m-auto'><i className="bi bi-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>
                                    <img src="/Letters/japanese.jpg" className='m-auto rounded-circle' width="200" height="200" alt='Japanese'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Japanese</h5>
                                    <p className='card-text'>Japan</p>
                                    <button className='btn border-black disabled m-auto'><i className="bi bi-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>  
                                    <img src="/Letters/korean.jpeg" className='m-auto rounded-circle' width="200" height="200" alt='Korean'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Korean</h5>
                                    <p className='card-text'>South Korea</p>
                                    <button className='btn border-black disabled m-auto'><i className="bi bi-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header bg-dark text-center'>
                                    <img src="/Letters/chinese.jpg" className='m-auto rounded-circle' width="200" height="200" alt='Chinese'/>
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Chinese</h5>
                                    <p className='card-text'>China</p>
                                    <button className='btn border-black disabled m-auto'><i className="bi bi-caret-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#banners"><span className="carousel-control-prev-icon"></span><span className="visually-hidden"></span></button>
        <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#banners"><span className="carousel-control-next-icon"></span><span className="visually-hidden"></span></button>
    </div>
        
  )
}

export default Slider;
