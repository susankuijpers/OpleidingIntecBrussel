let buttons = document.querySelectorAll('button');


buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(button.className === 'btn btn-primary increase'){
            console.log('increase')
        }if (button.className === 'btn btn-danger decrease'){
            console.log('decrease')
        }if (button.className === 'btn btn-warning reset'){
            console.log('reset')
        }
    })
})

function incMethod(){
    console.log('increase')
    sessionStorage.counter= Number(sessionSTorage.counter)+1;
    output.innerHTML=`You clicked ${sessionStorage.counter} times`
}

function decMethod(){
    console.log('decMethod')
    console.log(sessionStorage.counter)
    sessionStorage.counter= Number(sessionSTorage.counter)-1;
    output.innerHTML=`You clicked ${sessionStorage.counter} times`
}

function resetMethod(){
    console.log('resetMethod')
    sessionStorage.clear()
    return sessionStorage.counter=0;
}