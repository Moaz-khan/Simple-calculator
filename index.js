#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter frist number", type: "number", name: "fristNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtruction", "Multiplication", "divison", "Percentage"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.fristNumber + answer.secondNumber);
}
else if (answer.operator === "Subtruction") {
    console.log(answer.fristNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.fristNumber * answer.secondNumber);
}
else if (answer.operator === "divison") {
    console.log(answer.fristNumber / answer.secondNumber);
}
else if (answer.operator === "Percentage") {
    console.log((answer.fristNumber * answer.secondNumber) / 100);
}
else {
    console.log("please select valid operator");
}
