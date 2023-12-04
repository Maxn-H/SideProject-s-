import './App.css'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'


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
        <div className="Application">
             <h2>Random Quote Generator</h2>
             <button button onClick={getQuote}>Get quote</button>
            { quote && <p className='quote'>{quote}</p>}
        </div>
        </div>
        
    )
}

export default Home;