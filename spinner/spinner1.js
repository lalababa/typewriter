process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   a');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   a');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   a');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   a'); 
}, 700);

// ... fill in the rest yourself ...