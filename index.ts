#! /usr/bin/env node


import inquirer from "inquirer";

// 1) Computer will generate a random number //done

// 2) User input for guessing number

// 3) Compare user input with computer generated number and show result


const randomNumber = Math.floor(Math.random()* 6 + 1 );

const answers = await inquirer.prompt([
    {
     name:"userGuessedNumber",
     type:"number" , 
      message: "Please guess a number between (1 to 6):"  
    }
])

if (answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You Guessed Correct Number")

} 
else {console.log("You Guessed Wrong Number");
}