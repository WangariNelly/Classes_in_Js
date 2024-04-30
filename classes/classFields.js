class User{
    // class fields 
    firstName = '';
    lastName = '';

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
}
  // Method
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  }
}
//creating an instance of the User class.
const user = new User('Nelly','Wangari');

//calling the method.
user.greet();