#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.cyanBright.bold("\n\tWelcome to Bismillah Kanwal - Currency Converter\n"))

//define the list of currencies and there rates
let exchange_rate : any = {
    "USD" : 1, //Base Currency
    "EUR" : 0.9, //European Currency(Euro)
    "JYP" : 113, // Japenese Currency(Yendor)
    "CAD" : 1.3, // Canadian Dollar
    "AUD" : 1.65, // Austrelian Dollar
    "PKR" : 278.10 //Pakistani Rupees
    //add more currencies and there exchange rates here
}
//promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name : "from_currency",
        type : "list",
        message : "Select the Currency to Convert from:",
        choices : ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name : "to_currency",
        type : "list",
        message : "Select the Currency to convert into:",
        choices : ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name : "amount",
        type : "input",
        message :"Enter the amount to convert:"
    }
]);
//perfom currency to conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion
let base_amount = amount/ from_amount
let converted_amount = base_amount * to_amount

//display the converted amount
console.log(chalk.cyan(`Converted_Amount = ${chalk.green(converted_amount.toFixed(2))}`) );