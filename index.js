// task 1
let user = {
  name: "Yuliia",
  lastName: "Nazarin",
  email: "jnazarin0319@gmail.com",
  password: "Lungo0319",
  phoneNumber: "571425920",
  adress: {
    city: "Wroclaw",
    street: "Hubska",
    apartament: "62",
  },
};

// task 2
function greetUser(user1) {
  return `Hello, ${user1.firstName} ${user1.lastName}`;
}
const user1 = {
  firstName: "Yuliia",
  lastName: "Nazarin",
};
console.log(greetUser(user1));

// task 3
function printUserInfo(user) {
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
}

printUserInfo(user);

// task 4
const car = {
  color: "blue",
  model: "MC20",
  brand: "Maserati",
  engineVolume: "3l",
  capacity: "2",
  speed: "0",
  maxSpeed: "325",

  accelerate(kmh) {
    this.speed += kmh;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    console.log(`Speed: ${this.speed} km/h`);
  },

  decelerate(kmh) {
    this.speed -= kmh;
    if (this.speed < 0) {
      this.speed = 0;
    }
    console.log(`Speed: ${this.speed} km/h`);
  },

  stop() {
    this.speed = 0;
    console.log(`Stop. Speed: ${this.speed} km/h`);
  },
};
car.accelerate(100);
car.decelerate(50);
car.stop();

// task 5

function Car(color, model, brand, engineVolume, capacity, speed, maxSpeed) {
  this.color = color;
  this.model = model;
  this.brand = brand;
  this.engineVolume = engineVolume;
  this.capacity = Number(capacity);
  this.speed = 0;
  this.maxSpeed = Number(maxSpeed);
  this.accelerate = function (value) {
    this.speed += value;
    if (this.speed > maxSpeed) {
      this.speed = maxSpeed;
    }
    return this.speed;
  };

  this.decelerate = function (value) {
    this.speed -= value;
    if (this.speed < 0) {
      this.speed = 0;
    }
    return this.speed;
  };

  this.stop = function () {
    return (this.speed = 0);
  };
}
const car1 = new Car("blue", "MC20", "Maserati", "3l", "2", "0", "325");
const car2 = new Car("blue", "MC20", "Maserati", "3l", "2", "0", "330");
const car3 = new Car("blue", "MC20", "Maserati", "3l", "2", "0", "335");
console.log(car1.accelerate300);
