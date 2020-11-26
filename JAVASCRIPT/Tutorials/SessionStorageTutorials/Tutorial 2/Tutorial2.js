// EXERCISE 1: 

let insertButton = document.querySelector('#buttonInsert'); // insertbutton
let inputKey = document.querySelector('#inputKey'); // sleutel
let inputValue = document.querySelector('#inputValue');// waarde

let StorageButton = document.querySelector('#getDataFromStorage'); // button 1
let KeyButton = document.querySelector('#getDataByKey'); //  button 2
let storageText = document.querySelector('#getValueFromStorage'); //  inputfield
let output = document.querySelector('.output')

// event listener
insertButton.addEventListener('click',function(e){
    console.log(inputKey.value); 
    console.log(inputValue.value); 
    return sessionStorage.setItem(inputKey.value,inputValue.value)
})

//EXERCISE 2:
//get storage data 

let sessionData;

StorageButton.addEventListener('click', function(e){
    sessionData = []
    let temp;
    for (let index = 0; index < sessionStorage.length; index ++){
        let key = sessionStorage.key(index)
        let value = sessionStorage.getItem(key)
        console.log(`key:${inputKey.value} value:${inputValue.value}`)
        temp={
            key:key,//??? wtf
            value:value //??? wtf
        }
        sessionData.push(temp)
        output.innerHTML+= `key:${inputKey.value} value:${inputValue.value}`
    }
    console.log(sessionData)
    e.preventDefault()
})

/* 
//2de poging Susan
let sessionData

StorageButton.addEventListener('click',function(e){
    for (let index = 0 ; index < sessionStorage.length ; index++){
        let key = sessionStorage.key(index);
        let value = sessionStorage.getItem(key);
        output.innerHTML += `Hello ${inputKey.value} with a value of ${inputValue.value} <br>`;
        console.log(key)
    }
})

KeyButton.addEventListener('click',function(e){
    for (let index = 0 ; index < sessionStorage.length ; index++)
    console.log(sessionStorage.key(index))
})
*/

/*
// 1st poging SUSAN
//1st button show sessionStorage data 

StorageButton.addEventListener('click',function(e){
    console.log('testing'); 
    storageText.innerHTML += sessionStorage.getItem(inputValue.value)
})
 
//2de button sessionStorage by key 

KeyButton.addEventListener('click',function(e){
    console.log('testing'); 
    storageText.innerHTML += sessionStorage.getItem(inputValue.value)
})
*/

