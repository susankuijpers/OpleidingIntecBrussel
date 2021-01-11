// https://api.exchangeratesapi.io/latest?base=EUR&symbol=USD

const Api = 'https://api.exchangeratesapi.io/latest?base=EUR&symbol=USD'
let amount = document.querySelector('#') //input field for the amout you want to convert
const convertButton = document.querySelector('#') //button to convert to the correct currency
let result = document.querySelector('#')  //output of result
let convertTo = document.querySelector('#') 

//fetching the data
async function getData(){
    let result = await fetch('https://api.exchangeratesapi.io/latest?base=EUR&symbol=USD');
    let data = await result.json()
    console.log(data)
    return data
}

//converting the data
convertButton.addEventListener('click', convertCurrency) 

function convertCurrency () {
    


    findWord(something.value).then(response=>{ //display converted result
       response.forEach(e => {return jumbotron.innerHTML = `<div id="result">${result}</div>`
        })
})
}
