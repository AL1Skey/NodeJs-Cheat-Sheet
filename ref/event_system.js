const Emitter = require('events');

// Create class
class MyEmitter extends Emitter {};

// Init object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event',()=>console.log("EVENT EMITTED!!"));

// Init event
myEmitter.emit('event');