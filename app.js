// app.js
import chalk from 'chalk';

console.log(chalk.green('Success! Your app is working 🚀'));
console.log(chalk.blue.bold('Hello Vinayk!'));
console.log(chalk.red.bgWhiteBright('Something went wrong!'));


// ES2015 template literal
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);