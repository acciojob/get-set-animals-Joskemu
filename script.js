// Animal Class
class Animal {
  // Constructor accepts species for the animal
  constructor(species) {
    this.species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Dog Class inherits from Animal
class Dog extends Animal {
  // Constructor calls the parent constructor with species
  constructor(species) {
    super(species); // Call to Animal's constructor
  }

  // Method specific to Dog to bark
  bark() {
    console.log('woof');
  }
}

// Cat Class inherits from Animal
class Cat extends Animal {
  // Constructor calls the parent constructor with species
  constructor(species) {
    super(species); // Call to Animal's constructor
  }

  // Method specific to Cat to purr
  purr() {
    console.log('purr');
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
