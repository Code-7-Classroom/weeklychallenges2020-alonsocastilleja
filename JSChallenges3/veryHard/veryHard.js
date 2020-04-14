

// 1        //Constructor for Person
var Person = function(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age
}

// 2 
Person.prototype.exercise = function() {
    return console.log(`${this.name} loves going to the gym.`);
}

// 3
Person.prototype.fetchJob = function() {
    return console.log(`${this.name} is a ${this.job}`);
}

// 4 
var Programmer = function(name, job, age) {
    Person.call(this, name, job, age);
    this.languages = [];
    this.busy = true;
}

// 5 
Programmer.prototype.completeTask = function() {
    this.busy = false;
}

// 6 
Programmer.prototype.offerNewTask = function() {
    if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
    }       
}

// 7 
Programmer.prototype.listLanguages = function(oldLanguages) {
    this.languages = [oldLanguages];
}

Programmer.prototype.learnLanguages = function(newLanguages) {
    return this.languages.push(newLanguages);
}

// 8
const alonso = new Person('Alonso', 'Front End Developer', 20);
console.log(alonso);
console.log(alonso.fetchJob());
console.log(alonso.exercise());



const mark = new Programmer('Mark', 'Back-end Developer', 26);
console.log(mark.listLanguages(['HTML', 'CSS', 'Javascript']));
mark.learnLanguages('Java');
mark.learnLanguages('Ruby');
console.log(mark.offerNewTask());




