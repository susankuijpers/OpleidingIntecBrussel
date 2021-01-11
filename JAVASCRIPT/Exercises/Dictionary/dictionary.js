// API LINK : https://api.dictionaryapi.dev/api/v2/entries/en/

/*
const api = "https://api.dictionaryapi.dev/api/v2/entries/en/"

let searchInput = document.querySelector('#search');
let searchButton = document.querySelector('#button') ///eeeeeeeeeuuuuuuhm
let temp = []; /////eeeeeuuuuuhhmmm

let wordTitle = document.querySelector(".word-text")
let phoneticsTitle = document.querySelector(".phonetics")
let definitionText = document.querySelector(".definition")


fetch(api)
.then(ap=>ap.json()) // fetch API

.then(res=>{ // create inner html with correct info
  for(i=0;i<res.length;i++){ 
    let html = `
    <div class="row bg-warning">
      <div class="col-sm-10 offset-sm-1 ui-box">
        <h3 class="word-text">${res[i].word}</h3>
        <span class="pronunciation-text" style="color: #808080;">${res[i].phonetics}</span>
        <div id="definitions-container">
            <div class="row" style="border-top: solid 1px #e6e6e6; padding: 10px 0">
                <div class="col-sm-9 my-auto"><i>noun<span class="d-inline-block tip" data-toggle="tooltip"
                            title="" tabindex="0" data-html="true" data-placement="right"
                            data-original-title="Nouns are one of the four major word classes, along with verbs, adjectives and adverbs. Nouns are the largest word class.<br>
                            A noun refers to a person, animal, place or thing.
                        <a href='#LINK' target='_blank'>Read more about nouns in Cambridge website.</a>">?</span></i><br>${res[i].definition}<br><span
                        style="color: #808080; font-size: 14px;">"Watch <a
                            href="#VIDEO">this video</a> to learn how you can grow a
                        pineapple plant at home."</span></div>
                <div class="col-sm-3 text-right"><img
                        src="https://5.imimg.com/data5/WT/GN/ZH/SELLER-3722283/pineapple-500x500.jpg"
                        style="width: 110px; max-width: 100%; border-radius: 55px; border: solid 1px #dedede">
                </div>
            </div>
        </div>
    </div>
</div>`
    temp.push(html) 
  }
 searchButton.innerHTML = temp.join("")
})

// event voor dictionary search knop
searchButton.addEventListener('click',e=>{
   if(e.target.className == 'link'){
     fetch(api)
     .then(ap=>ap.json())
     .then(res=>{
       for(i=0;i<res.length;i++){
         if (res[i].title == e.target.innerHTML){
          wordTitle.innerText = res[i].word-text
          phoneticsTitle = res[i].phonetics
          definitionText.innerText = res[i].definition
         }
       }
     })
   }
})
*/

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
    console.log('test')
    findWord(search).then(response=>{
        console.log(response)
    });
})

*/

/*
[{"word":"apple","phonetics":[{"text":"/ËˆÃ¦pÉ™l/","audio":"https://lex-audio.useremarkable.com/mp3/apple_us_1.mp3"}],"meanings":[{"partOfSpeech":"noun","definitions":[{"definition":"The round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider.","example":"It could be something specific, Victoria plum skins or green apples."},{"definition":"The tree which bears apples.","example":"The whole house is covered in Virginia creeper and among the trees are an apple tree, cedar, Japanese cedar and large cypress."},{"definition":"short for Big Apple","example":"Five Points, where the action takes place, looks alien to anything currently considered Big in the Apple."}]}]}]
*/