/*
const Api = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
 
const search = document.querySelector('#search').value
const button = document.querySelector('#button')
 
let response = fetch(Api);
response.then(res=>console.log(res))
response.then(dic=>dic.json())
.then(data=>console.log(data))
 
async function findWord(id){
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${id}`)
    let data = await response.json();
    console.log(data)
    // return JSON.stringify(data)
}
 
button.addEventListener('click', (e) => {
    e.preventDefault()
    e.meanings[0].definitions[0].definition()
    console.log('test')
    findWord(search).then(response=>{
        console.log(response)
    });
})
*/

//SOLUTION ARNE


const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const input = document.querySelector('#search')
const searchBtn = document.querySelector('#btn')
let audioLink = document.querySelector('#audio-link')
let title = document.querySelector('.word-text')
let pron = document.querySelector('.pronunciation-text')
let bodyText = document.querySelector('#body-text')
let wordClass = document.querySelector('#word-class')

searchBtn.addEventListener('click',()=>{
    fetch(`${api}${input.value}`)
.then(data=>data.json())
.then(res=>{
    console.log(res)
    if(res.title == 'No Definitions Found'){
        title.innerText = res.title
        bodyText.innerText = res.message
        pron.innerText = res.resolution
        wordClass.innerText = "undefined"
        audioLink.href = '#'
    
    }else{
        title.innerText = input.value
        bodyText.innerText = res[0].meanings[0].definitions[0].definition
        pron.innerText = res[0].phonetics[0].text
        wordClass.innerText = res[0].meanings[0].partOfSpeech
        audioLink.href = res[0].phonetics[0].audio
    }

})        
})