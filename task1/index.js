process.stdin.on('data', (msg) => {
  process.stdout.write(reverseMessage(msg.toString().trimEnd()));
  process.stdout.write(`\n`);
});

function reverseMessage(text = '') {
  return text.split('').reverse().join('');
}
