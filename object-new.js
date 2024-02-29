function multiplyBy5(n){
    return n * 5;
}

multiplyBy5.power = 2; 
multiplyBy5.power = "something"; 


console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(typeof multiplyBy5.power);
console.log(multiplyBy5.prototype);   // this will print empty {}, means object


function createUser(username, score){
     this.username = username;
     this.score = score;
}



// injecting self-created function to the createUser function through prototype

createUser.prototype.increment = function(){
    // by writing this way it is very confusing that which's score is going to going to be incremented cahi or tea
    // because it is not have the context so, for giving this context we write 'this', means who is having this that's score is going to be incremented
    // score++

    // this is why
    this.score++
}



// we are injecting one more function to the createUser function through prototype

// it will print the score of the score who is having this
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

// chai and tea is username --- and 25 and 250 is score

const cahi = new createUser('chai',25)
const tea = new createUser('tea',250)

// printing the score value using the printMe function
cahi.printMe();



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/