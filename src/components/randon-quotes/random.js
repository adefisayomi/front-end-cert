import { useEffect, useState } from 'react'
import { Icon } from 'semantic-ui-react'
import '../../styles/random.css'

const Random =  () => {

    const [num, setNum] = useState(20)

    const [quote, setQuote] = useState({by: '', message: ''})

    
    const getNum = () => {
        setNum(Math.floor(Math.random()*1000))
    }

    useEffect(() => {
        getNum()
    }, [])

    const getQuotes = async () => {
        const res = await fetch("https://type.fit/api/quotes")
        const data = await res.json()
        if(data && data[num]){
            setQuote({by: data[num].author, message: data[num].text})
        }
        else{
            setQuote({by: '', message: ''})
        }
        }
       
   
    useEffect(() => {
        getQuotes()
    }, [num])

    return(
        <div id= 'quote-container' style= {{backgroundColor: `#${num}`, transition: '0.6s'}}>
            <div id= 'quote-box'>
                <p id="text" style= {{color: `#${num}`}}>{`"${quote.message}`}</p>
                <p id="author" style= {{color: `#${num}`}}>{quote.by}</p>
                <span>
                    <span>
                    <a href= "twitter.com/intent/tweet" target= '_blank' id="tweet-quote" style= {{backgroundColor: `#${num}`}}>
                    <Icon name= 'twitter' link size = 'large'/>
                    </a>
                    <a href= "twitter.com/intent/tweet" target= '_blank' id="tweet-quote" style= {{backgroundColor: `#${num}`}}>
                    <Icon name= 'linkedin alternate' link size = 'large' />
                    </a>
                    </span>
                    
                    <button id="new-quote" onClick= {getNum} style= {{backgroundColor: `#${num}`}}>
                        New quote
                    </button>
                </span>
            </div>
            <h1>
                <a href="https://devbyclace.com" target= '_blank'  rel="noreferrer" > By Dolapo Oluwole</a>
            </h1>
        </div>
    )
}

export default Random