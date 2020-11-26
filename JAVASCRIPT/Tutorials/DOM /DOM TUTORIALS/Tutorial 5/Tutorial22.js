//selectors{} []

/*var inputs =  document.querySelectorAll('input');

var firstname = input [0]

console.log(firstname.placeholder)*/

var [firstname, lastname, email, street, city, zipcode, birthdate, phone, pass, confrim_pass, term] = document.querySelectorAll('input');

var [country, gender, country_code] = document.querySelectorAll('select');

let submitButton= document.querySelector('button')

let formDatas = []

submitButton.addEventListener('click',function(e){

    if(term.checked == true){
        console.log('accepted')//add new array
        let formObj = {
            firstname:firstname.value,
            lastname:lastname.value,
            email:mail.value,
            street:street.value,
            city:city.value,
            country:country.selectedOptions[0].value,
            zipcode:zipcode.value,
            gender:gender.selectedOptions[0].value,
            birthdate:birthdate.value,
            phone:country_code.selectedOptions[0].value + phone.value,// + 32 + 04745393424
            password:pass.value,
            confirm:confirm_pass.value,
        }
        console.log(formObj)
        let temp = formDatas
        temp.push(formObj) //update
        formDatas = temp; //updated array with new obj

    }else{
        console.log('not accepted')
    }

    console.log(formDatas)

    e.preventDefault();

})

console.log(formDatas)

/*function myArray(){
    return ['name1','name2','name3']
}

var [n1,n2,n3] = myArray();

console.log(firstname, lastname, email, street, city, zipcode, birthdate, phone, pass, confrim_pass, term)*/