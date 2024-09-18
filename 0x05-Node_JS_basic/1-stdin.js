const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

let name = '';
const keepGoing = true;

while (keepGoing) {
  name += rl.question('', (chunk) => {
    if (chunk) {
      process.stdout.write(`Your name is: ${chunk}`);
      rl.close();
    } else {
      process.stdout.write('This important software is now closing\n');
    }
  });
}
