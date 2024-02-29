let myName = "Pratap    ";
console.log(myName.length);
console.log(myName.trim().length);


Object.prototype.trueLength = function(){
    return trim().length
}
console.log(myName.trueLength());

// we are creating a custom methode  trueLength

let myHeros = ['Thor', 'Spiderman']

let heroPower = {
    thor : "Thunder",
    spiderman : "Sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}



// Everything is connected to object so if we create some cusetom function or methode and inject it to the object then technically Array, Function, String can use that custon function as well;

Object.prototype.pratap = function(){
    console.log('Pratap is present in all object');
}

// lets call the custom Pratap() function from the heroPower object
heroPower.pratap()

// lets call the custom Pratap() function from the myHeroes array
myHeros.pratap();


Array.prototype.arrayPratap = function(){
    console.log("arrayPratap function");
}


// calling the custom function from the array
myHeros.arrayPratap();


// calling the function from the object

// heroPower.arrayPratap()             
              // it will give an error because here we are giving the custom function to the Arrays so we can access the custom function from the Array only and not from other Functions, Strings and Objects 


// prototypal inheritance

const User = {
    name : 'Some Name',
    mail : 'somename@teaching.com'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "JS assignment",
    fullTime : true,
    __proto__ : TeachingSupport,
}
console.log('here we are accessing the TeachingSupport object from the TASupport object',TASupport);


// this is how Teacher object can access the properties of the User object
Teacher.__proto__ = User;
console.log('here we are accessing the User object from the Teacher object',Teacher);



// modern syntax
// here TeachingSupport is accessing the properties of Teacher
Object.setPrototypeOf(TeachingSupport, Teacher)