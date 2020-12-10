
//return data and bind to function
let firstName = document.querySelector('#inputFirstName')//input firstName
let lastName = document.querySelector('#inputLastName')//input lastName
let userName = document.querySelector('#inputUserName')//input userName
let city = document.querySelector('#inputCity') //input city
let zip = document.querySelector('#inputZip') //input zip
let submitButton = document.querySelector('#theSubmitButton') //onclick submit button

function submitInfo(event){ 
    // add all userNames and fullLocaltion to sessionStorage
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(userName.value);
    console.log(city.value);
    console.log(zip.value);
    sessionStorage.setItem(firstName.value,lastName.value,userName.value,city.value,zip.value);
}

submitButton.addEventListener('click',submitInfo)

//function that needs to become binded with the above input
const allNames = {
    getAllNames: function () {
        const sentence =
        "My name is " +
        this.firstName.value +
        " " +
        this.lastName.value +
        " and I chose " +
        this.UserName.value +
        " as my username and"
      return sentence;
    }
}

const fullLocation = {
    getFullLocation: function () {
        const sentence =
        "The place where i work is" +
        this.city.value +
        "and this is the zipcode:" +
        this.zip.value;
      return sentence;
    }
}

// the actual binding
const getFullSentence = allNames.getAllNames.bind(getAllNames);
const getFullSentencetwo = fullLocation.getFullLocation.bind(getFullLocation);

console.log(getFullSentence())
console.log(getFullSentencetwo())