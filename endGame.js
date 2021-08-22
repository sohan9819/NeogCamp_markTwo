// #############################
var readlineSync = require('readline-sync');
const chalk = require('chalk');

// console.log(chalk.yellow('name'));
let name = readlineSync.question(chalk.cyan("Name : "));
console.log(chalk.cyan(" Hello world , Nice to meet you ") + chalk.yellow.underline(name));
// console .log(chalk.orange(name)); 
console.log(chalk.green("\n  Welcome to this exciting animal quizz game  \n"));

console.log(chalk.yellowBright("Lets start the game \n"));

var score = 0;

console.log(chalk.green("Score  : " + score + "\n"));

var highest_Scores = [
  {
    name: "Sohan Shetty ",
    score: "10",
  }
]

// console.log(highest_Score[0]);

var question1 = {
  q: "1. How many pairs of wings do bees have?",
  options: ["one", "two", "three"],
  ans: 1,
}
var question2 = {
  q: "2. What bird is the symbol of peace?",
  options: ["Dove", "Peacock", "Parrot"],
  ans: 0,
}
var question3 = {
  q: "3. What is a baby sheep called?",
  options: ["bear cub", "A lamp", "tiger cub"],
  ans: 1,
}
var question4 = {
  q: "4. How many legs does an octopus have?",
  options: ["ten", "eight", "twelve"],
  ans: 1,
}
var question5 = {
  q: "5. The baby of which animal is called a joey?",
  options: ["Kangaroo", "Giraffe", "Dear"],
  ans: 0,
}

var questions = [question1, question2, question3, question4, question5]

for (let question of questions) {
  console.log(question.q);
  let index = readlineSync.keyInSelect(question.options, question.q);
  // console.log(index)
  if (index === question.ans) {
    score += 2;
  } else if (index === -1) {
    score += 0;
  }
  else {
    score -= 2;
  }
  // console.log("score : " + score);
  console.log(chalk.green("\nScore  : " + score + "\n"));
}

if (score === 10) {
  // console.log("Highest score");
  console.log(chalk.greenBright("\n Congratulations for scoring Highest score"));

  scorer = {name : `${name}`, score : `${score}`};
  // console.log ( scorer);
  highest_Scores.push(scorer);
}

console.log("\n #### TOP SCORERS ### \n");

for ( highScore of highest_Scores){
  console.log("\n -------------- \n");
  console.log (chalk.magentaBright("Name : " + highScore.name + "\n"));
  console.log (chalk.magentaBright("Score : " + highScore.score + "\n"));
  console.log("\n -------------- \n");
}