class Person {
    constructor (firstName, lastName, yearOfBirth) {
        this.fname = firstName;
        this.lname = lastName;
        this.yearOfBirth = yearOfBirth;
    }
      fullName() {
          console.log(`${this.fname} ${this.lname}`);
      }
      sayHi() {
            console.log(`Hello ${this.fname} ${this.lname}`);
        }
      birthDay(){
          console.log(`${this.fname} ${this.lname} was born in ${this.yearOfBirth}`)
      }
}


const me = new Person('Alonso', 'Castilleja', 1999);
me.fullName();
me.sayHi();
me.birthDay();

