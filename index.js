
function play(question,answer){
    var ask = readlineSync.question(chalk.bgBlueBright(question));
    if (ask.toUpperCase() === answer.toUpperCase()){
      console.log(chalk.bgGreenBright('You are right'));
      score++
    }else{
      console.log(chalk.bgRed('You are wrong'));
    }
  }
  var chalk = require('chalk');
  
  //console.log(chalk.green('hello world'));
  
  var highScorer = {name:'Dipin',score:0};
  var readlineSync = require('readline-sync');
  
  
  var newPrompt = readlineSync.keyInYN(chalk.green("Do You want to see how well you know me?  [y/n]:"),{guide : false});
  // console.log(newPrompt);
  if (!(newPrompt)){
    console.log(chalk.bgGreen("Ok! Have Fun whatever you do!!"));
    process.exit();
  }else{
      newPrompt = readlineSync.keyInYN(chalk.magenta("You will need to provide answers to the following questions. \nAre you Ready?  [y/n]:"),{guide : false});
    // console.log(newPrompt);
  }
  if (!(newPrompt)){
    console.log(chalk.bgGreen("Ok! Have Fun whatever you do!!"));
    process.exit();
  }
  
  var playerName = readlineSync.question(chalk.bgYellow('Enter Your Name '));
  var score = 0;
  var questions = [{
    question: 'Which Country was I born? ',
    answer: 'India'
  },{
     question: 'Which State I did my schooling? ',
     answer: 'Andhra Pradesh'
   },{
    question: 'Which state most of my relatives reside in? ',
    answer: 'Punjab'
   },{
    question: 'Which continent did I visit with 10 of my friends? ',
    answer: 'Europe'
    },{
    question: 'Which school I studied the longest in? ',
    answer: 'Siva Sivani Public School'
    }]
  for (var i = 0; i < questions.length; i++){
    play(questions[i].question,questions[i].answer);
  }
  console.log(chalk.bgGreenBright('You scored : '+score));
  if (score > highScorer.score){
    console.log(chalk.hex('#78D278')('You are the new Highest scorer. Congrats!!'));
    console.log(chalk.hex('#FFC0CB')('Send me a screenshot of your score.'));
  }
  var feedback = [
    chalk.bgYellowBright('It was Ok'),
    chalk.bgYellowBright('It was Interesting'),
    chalk.bgYellowBright('It was Amazing'),
    chalk.bgYellowBright('It was Awesome'),
    chalk.bgYellowBright('It was out of this World')];
  var userFeedback = readlineSync.keyInSelect(feedback,chalk.bgYellowBright('Out of rating of 5 how would you rate this quiz? [1...5]:'), {cancel : false , guide : false});
  // console.log(userFeedback);