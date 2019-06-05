const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([
    { input: [1, 2], output: [1]}, // Team 2 won
    { input: [1, 3], output: [1]}, // Team 3 won
    { input: [2, 3], output: [0]}, // Team 2 won
    { input: [2, 4], output: [1]}, // Team 4 won
    { input: [1, 2], output: [0]}, // Team 1 won
    { input: [1, 3], output: [0]}, // Team 1 won
    { input: [3, 4], output: [0]} // Team 3 won
]);

const output = network.run([1,4]);

console.log(`Prob: ${output}`);