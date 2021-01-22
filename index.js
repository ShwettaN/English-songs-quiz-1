const chalk = require('chalk');
var readlineSync=require("readline-sync");
var score=0;
var player=readlineSync.question('Enter your name to play this quiz?');

console.log(chalk.bgMagenta.bold("               WELCOME "+ chalk.bgCyan.bold(player+"!!               "))+"\n" +"\n" +chalk.red.bold(" Let's check your knowledge of "+ chalk.cyan.bold("ENGLISH SONGS!\n")))
function play(questions,answers)
{
  // console.log(questions);
  // var userAnswer=readlineSync.question('Enter your chosen option?');
  if(userAnswer.toUpperCase()==quiz[i].answer)
  {
    console.log(chalk.green("Yayy!! that's correct"));
    score++;
  }
  else{
     console.log(chalk.red("Ooops! thats a wrong answer"));
     console.log(chalk.yellowBright("The correct answer is "+ quiz[i].answer));
  }

  console.log(chalk.bold.cyan.italic("your current score :" +score));
  console.log("-----------");

}

var quiz = [
  {
    question :"Q1.Past life is sung by?"+"\n "+"A.selena and trevor"+"\n "+"B.taylor and djkhaled", 
    answer : "A"
    },


  {
    question:"Q2.Dynamite is a song by?"+"\n "+"A.EXO"+"\n "+"B.Justin Beiber"+"\n "+"C.Charlie Puth"+"\n "+"D.BTS",
    answer:"D"
  },

  {
    question:"Q3.Wolves is sung by?"+"\n "+"A.Trevor daniel"+"\n "+"B.Cardi B"+"\n "+"C.Selena Gomez"+"\n "+"D.Harry styles",
    answer:"C"
  },

  {
    question:"Q4.Trampoline is sung by?"+"\n "+"A.DJ Snake"+"\n "+"B.DJ Khaled"+"\n "+"C.Zayn Malik"+"\n "+"D.Charlie Puth",
    answer:"C"
  },

  {
    question:"Q5.Blank Space is sung by?"+"\n "+"A.Selena Gomez"+"\n "+"B.Taylor Swift"+"\n "+"C.Ariana Grande"+"\n "+"D.Adele ",
    answer:"B"
  }
]

for(var i=0;i<quiz.length;i++)
{
  
  console.log(quiz[i].question);
  var userAnswer=readlineSync.question('Enter your chosen option?');
  play(quiz[i].question,userAnswer);

}
if(score==5)
{
  console.log(chalk.bold.bgRed.italic("\n Congrats " + player +  " you have surpassed the top scorer with a score of " + score +" !! "));
}
else{
console.log(chalk.bgCyan.bold.italic("\n Thanks a lot " + player +" for playing this quiz ,Your final score is :" + score+"  "));
}
console.log(chalk.yellowBright.bold("              -------- HAVE A NICE DAY "+ player+" ;) --------"))