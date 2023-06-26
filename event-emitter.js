//___EVENT DRIVEN PROGRAMMNING___________
//___listen function_ .on('') = event's name___________
//__LOGIC______
//_LG1__.on function with same event's name may be many__so that when that event is emitted --all that function works__
//_LG2__listen firts emit later____
//_LG3___emit() can take arguments and the .on() can accept
//_LG4___events are the core building block of Node.js___so that can be used in anywhere
const EventEmitter = require('events');

const eventone = new EventEmitter();

eventone.on('reponse', (name ,id) => {
    console.log(`user name is ${name} with id: ${id}`)
})

// .on() won't be effective after emit() that event's name
eventone.emit('reponse', 'Sai Wunna', 44);

// so this .on() event won't work
eventone.on('reponse', () => {
    console.log("Event trying......")
})