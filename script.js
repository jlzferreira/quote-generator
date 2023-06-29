// Citações

const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

// Mostrar loader
function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}

// Esconder loader
function complete() {
    quoteContainer.hidden = false
    loader.hidden = true
}


// Mostrar novas citações
function newQuote() {
    loading();
    // Seleciona uma frase aleatória multiplicando a tamanho do array por um numero aleatorio
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    
    //  Checa se o campo autor nao esta vazio para definir como "Desconhecido"
    if (!quote.author){
        authorText.textContent = 'Desconhecido'
    } else {
        authorText.textContent = quote.author
    }
    
    // Chega o tamanho da citação para de finir o estilo
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    //  mostrar citação e esconder load
    quoteText.textContent = quote.text
    complete();
}

// tweetar citação
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

// ON LOAD
newQuote();