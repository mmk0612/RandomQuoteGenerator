import React,{useState,useEffect} from 'react';

function Quotes(){
    const [quote,setQuote] = useState('');
    const [author,setAuthor] = useState('');
    
    const getQuote = () => {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        })
    }

    useEffect(() => {
        getQuote();
    },[]);

    const handleClick=()=>{
        getQuote();
    }

    return (
        <div id="quote-box">
            <div id="text"><p>{quote}</p></div>
            <div id="author"><p>~{author}</p></div>
            <div id="buttons">
                <div id="social-media">
                    <a href="#" id="twet-quote"><i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" id="insta-quote"><i class="fa-brands fa-instagram"></i>
                    </a>
                    <button type="button" class="btn btn-info btn-lg" id="new-quotes" onClick={handleClick}>New Quote</button>
                </div>
            </div>
        </div>
    );
}

export default Quotes;