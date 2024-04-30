Define a Car class with properties (color and make) and methods (register and star).
---
Use the constructor function to initialize the properties of each car when it's created.
---
Create two instances of cars (redCar and blackCar) based on the Car class.
Call methods (register and start) on the car instances to perform actions specific to each car.
---

### class expressions 
These are just like classes but are not hoisted at the top like classes . Thet are used when the class doesnt need to be referenced elsewhere inthe code.

### Getters and Setters 
special methods in JavaScript that allow you to define how properties of an object are accessed and modified. They provide a way to control access to object properties and perform validation or computations when getting or setting their values.

1. Getter: 
A getter is a method that gets the value of a specific property. When you access the property using dot notation or bracket notation, the getter function is automatically invoked, and its return value is used as the value of the property. Getters are defined using the get keyword followed by the property name.
2. Setter: 
A setter is a method that sets the value of a specific property. When you assign a value to the property using the assignment operator (=), the setter function is automatically invoked with the assigned value. Setters are defined using the set keyword followed by the property name.


### Class Fields

Class fields, also known as class properties or instance variables, are variables declared within a class that are associated with each instance of the class. They are used to store data that is unique to each instance of a class.