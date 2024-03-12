//import './App.css'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './styles.css'


 function Home() {
const [quote, setQuote] = useState('')

const getQuote =() => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
        console.log(res.data.content)
        setQuote(res.data.content)
    }).catch(err => {
        console.log(err)
    })
}
    return(
        <div className='background'>
        <div>
             <h2 className='title'>Random Quote Generator</h2>
             <div className ='Application'>
                <div>
                <button classname="btn "button onClick={getQuote}>Get quote</button>
                </div>
            
             <div className='quoteContainer'>
             { quote && <p className='quote'>{quote}</p>}
             </div>
           
             </div>
            
        </div>
        </div>
        
    )
}

export default Home;