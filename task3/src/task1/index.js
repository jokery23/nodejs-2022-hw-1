import { stdin, stdout } from 'node:process';

stdin.on('data', (msg) => {
  stdout.write(reverseMessage(msg.toString().trimEnd()));
  stdout.write(`\n`);
});

function reverseMessage(text = '') {
  return text.split('').reverse().join('');
}
