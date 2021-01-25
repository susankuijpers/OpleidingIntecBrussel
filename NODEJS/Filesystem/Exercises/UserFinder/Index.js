/*
Mission 2

1)
make a nodejs module (do not forget export it) 
define your class in that Module with constructor and method(printUser) X

2)
import custom module in mainjs file(index.js/app.js)

3)
Use "new" keyword to create an object from the module.

4)
Fill constructor out with id number and username

5)
call method of the class in the node.js module. printUser() X

Done.
*/

const printUser = require('./customModule')

newUser('12345','Susan')
printUser()