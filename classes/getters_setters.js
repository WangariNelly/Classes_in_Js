class User{
    constructor(firstName,lastName){
        this._firstName = firstName; //_firstName with undescore shows the classs is internal to this class
        this._lastName = lastName;
    }

    //create a getter for the firstName
    get firstName(){
        return this._firstName;
    }

    //create a setter for te firstName

    set firstName(value){
        if (!firstName || firstName === ''){
            console.log("No input!")
        }
           if (typeof value === 'string')
          {
            this._firstName = value;
          } else {
            throw new Error("First name must be a string")
          }
    }

    get lastName(){
        return this._lastName;
    }

    //create a setter for te firstName

    set lastName(value){
        if (!lastName || lastName === ''){
            console.log("No input!")
        }
           if (typeof value === 'string')
          {
            this._lastName = value;
          } else {
            throw new Error("Last name must be a string")
          }
    }
}
const user = new User('Nelly','Wangari');
console.log(user.firstName);
console.log(user.lastName);