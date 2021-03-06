const Api = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const search = document.querySelector('#search')
const button = document.querySelector('#button')
const jumbotron = document.querySelector('#jumbotron')

// let response = fetch(Api);
// response.then(res=>console.log(res))
// response.then(dic=>dic.json())
// .then(data=>console.log(data))

async function findWord(id){
    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${id}`) 
    console.log(response)
    let data = await response.json();
    console.log(data)
    return data
    // return JSON.stringify(data)
}

button.addEventListener('click', (e) => {
    e.preventDefault() // om te voorkomen dat het vastloopt
    findWord(search.value).then(response=>{ // .then(Value = het resultaat van de functie daarvoor, .then(activeert gewoon de async functie))
       response.forEach(e => {return jumbotron.innerHTML = `
       <h3 class="word-text">${e.word}</h3>
                    <span class="pronunciation-text" style="color: #808080;">${e.phonetics[0].text}</span>
                    <div id="definitions-container">
                        <div class="row" style="border-top: solid 1px #e6e6e6; padding: 10px 0">
                            <div class="col-sm-9 my-auto"><i>${e.meanings[0].partOfSpeech}<span class="d-inline-block tip" data-toggle="tooltip"
                                        title="" tabindex="0" data-html="true" data-placement="right"
                                        data-original-title="Nouns are one of the four major word classes, along with verbs, adjectives and adverbs. Nouns are the largest word class.<br>
A noun refers to a person, animal, place or thing.
<a href='#LINK' target='_blank'></a>">?</span></i><br>${e.meanings[0].definitions[0].definition}<br></div>
<li><a href="${e.phonetics[0].audio}"><i class="fa fa-instagram">🔊</i></li>
                                    <!-- <div class="col-sm-3 text-right"><img
                                    src="https://5.imimg.com/data5/WT/GN/ZH/SELLER-3722283/pineapple-500x500.jpg"
                                    style="width: 110px; max-width: 100%; border-radius: 55px; border: solid 1px #dedede"> -->
                            </div>
                        </div>
                    </div>
                </div>
       `
        })
})
})

/* 
<span
                                    style="color: #808080; font-size: 14px;">Listen to the pronunciation <a id="audio-link" target="_blank"
                                        href="${e.word[0].phonetics[0].audio[0]}">here</a></span>
*/