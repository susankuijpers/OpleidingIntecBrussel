
//password exercise []{}
/*
password policy : password
(password policy indicates highest and lowest number times a given letter must appear for the password to be valid)

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
*/

//doing it seperately per password

// password policy A
let passwordA = "abcde";
let passwordCheck = /[a{1-3}]/g;
let result = passwordCheck.test(passwordA);


// password policy B
let passwordB = "cdefg";
let passwordCheck = /[b{1-3}]/g;
let result = passwordCheck.test(passwordB);


// password policy C
let passwordC = "ccccccccc";
let passwordCheck = /[c{2-9}]/g; 
let result = passwordCheck.test(passwordC);




///////////////////////////////////////////////////////////////////////
//doing it seperately per password

let passArray = ["abcde","cdefg","ccccccccc"];
let pass = [passA = "abcde", passB = "cdefg", passC = "ccccccccc"];
let passPolicyCheck = /a{1-3},b{1-3},c{2-9}/g;
let result = passPolicyCheck.test(passA,passB,passC);



