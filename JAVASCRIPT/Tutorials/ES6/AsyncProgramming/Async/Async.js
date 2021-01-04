// callback hell in ES5

//callback you dont know how long to wait , but you have promise
//sometimes the solution doesnt give exact 


//promise syntax
/*

function printerService(string,callback){
    let timeout = Math.floor(math.random()*1000)
    setTimeout(function{
        console.log(string)
        console/log("ms: ", timeout);
        callback()
    },timeout)
}

printerService('First task',function(){
    printerService('second task', function(){
       printerService('third task', function(){
           console.log('done.')
       })
    })
})

// second example old way = a mess dont do it like this

function getUser(function(err,user){
//getuser json
getProfile(user,function(err,Profile){
    getAccount(profile,function(err,acc){
        getReport(acc,function(err,report){
             downloadService(download,function(e){
                  //programming
                })
            })
        })
    })
})

*/

//example two rewritten in ES6 is much more simple and bettter
//promise chain example 

/*

getUser().then(getProfile)
.then(getAccount)
.then(getReport)
.then(donwloadService)
.catch(function(e){ console.error(e) })

*/

//async Await is ES7

async function SendAsync(){ 
    let response = await "hello world"
    console.log(response)
}

SendAsync()

let comments = {
    
} 