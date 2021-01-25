// REWATCH THIS https://www.youtube.com/watch?v=l20MBBFZAmA

const EventEmitter = require('events'); //class bv.: human / blueprint
const emitter = new EventEmitter(); //object bv.: susan / a specific human

// register a listener for your event
// emitter.addlistener : old way of writing
// new way of writing:
emitter.on('messageLogged', function(){
  console.log('listener called')
}) 


//raise an event
emitter.emit('messageLogged');
// emit =  making a noise or producing something or signaling event happend

