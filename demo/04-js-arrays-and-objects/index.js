// Topic: JS Arrays and Objects
// From 04-JS-Arrays-and-Objects.md

// Arrays
const hobbies = ["singing", "eating", "quidditch", "writing"];

for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}

// Objects, methods, and `this`
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};

console.log(robot.provideInfo());

// Factory function
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name,
    age,
    energySource,
    scare() {
      console.log(catchPhrase);
    },
  };
};

const ghost = monsterFactory("Ghouliath", 544, "ectoplasm", "BOO!");
ghost.scare(); // "BOO!"
