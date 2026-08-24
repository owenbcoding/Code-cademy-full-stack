// Topic: JS Arrays and Objects
// - Arrays are ordered, zero-indexed lists: []
// - Objects are unordered key-value pairs: {}
// - const arrays/objects can still be mutated, just not reassigned

const hobbies = ["singing", "eating", "coding"];

for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my energy level is ${this.energyLevel}.`;
  },
};

console.log(robot.provideInfo());
