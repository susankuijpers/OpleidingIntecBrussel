
//return data and bind to function
let firstName = document.querySelector('#inputFirstName')//input firstName
let lastName = document.querySelector('#inputLastName')//input lastName
let userName = document.querySelector('#inputUserName')//input userName
let city = document.querySelector('#inputCity') //input city
let zip = document.querySelector('#inputZip') //input zip
let submitButton = document.querySelector('#theSubmitButton') //onclick submit button

//function that needs to become binded with the above input
function getAllNames() {
        let sentence =
        "My name is " +
        this.firstName.value +
        " " +
        this.lastName.value +
        " and I chose " +
        this.UserName.value +
        " as my username"
      return sentence;
}

function getFullLocation() {
        let sentence =
        "The place where i work is" +
        this.city.value +
        "and this is the zipcode:" +
        this.zip.value;
      return sentence;
}

function submitInfo(event){
  let allNames = {
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
  }
  let fullLocation = {
    city: city.value,
    zip: zip.value
  }
}

// the actual binding
let getFullSentence = getAllNames.getAllNames.bind(getAllNames);
let getFullSentencetwo = getFullLocation.getFullLocation.bind(getFullLocation);

sessionStorage.setItem(firstName.value, lastName.value, userName.value, city.value, zip.value)
console.log(getFullSentence())
console.log(getFullSentencetwo())

submitButton.addEventListener('click', submitInfo)