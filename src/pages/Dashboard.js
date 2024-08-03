import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'

const Dashboard=()=>{
    const location=useLocation()
    const {email}=location.state;
    const [quote,setQuote]=useState('');
    const [tempQuote,setTempQuote]=useState('');

    async function populateQuote(){
        const req= await fetch(`http://localhost:1337/api/quote?email=${email}`)
        const data=await req.json();
        console.log(data);
        if(data.status==='ok')
        {
            setQuote(data.quote);
        }
        else{
            alert(data.error);
        }
    }
    async function updateQuote(event){
        event.preventDefault();
        try{
            const req= await fetch('http://localhost:1337/api/quote/update',{
                method:'POST',
                headers:{
                    'Content-type':'application/json',
                },
                body:JSON.stringify({
                    email:email,
                    quote:tempQuote
                }),
            })
            
            const data=await req.json();
            console.log('updateQuote response:',data);
            if(data.status==='ok')
            {
                setQuote(tempQuote);
                setTempQuote('');
            }
            else{
                alert(data.error);
            }
        }catch(error){
            console.error('Error updating quote:',error);
        }
    }           
    useEffect(() => {
        if(email){
            populateQuote();
        }
    }, [email]);

    return(
        <div>
            <h1>Your quote: {quote || 'quote not found'}</h1>
            <form onSubmit={updateQuote}>
                <input type="text" placeholder="Quote" value={tempQuote} onChange={(e)=>{setTempQuote(e.target.value)}} />
                <input type="submit" value="Update quote" />
            </form>
        </div>
    );
}

export default Dashboard;