const api = "http://localhost:3000/database" //link of info server

fetch(api)
.then(intec=>intec.text()) //fetch data from api
.then(data=>console.log(data)) //filter data

/*
retreive data from users api endpoint

parse response data as json format

filter this data by city 'mckenziehave'

annd then print data in the last method
*/