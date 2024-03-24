#! /usr/bin/env node
import inquirer from "inquirer";
// printing a Welcome Message
console.log("\n\twelcome To \'qareerulain\' - CLI Simple Calculator\n");
// Askin Question from Users through Inquirer
const answers = await inquirer.prompt([
    { message: "Enter your First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "select one Operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multipication", "Division"],
    },
]);
// conditional statement If-Else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(+answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multipication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
