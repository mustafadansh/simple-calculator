import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { massage: "Enter first number", type: "number", name: "firstNumber" },
    { massage: "Enter second number", type: "number", name: "secondNumber" },
    {
        massage: "Select one of the oparator to perform the oparation",
        type: "list",
        name: "oparator",
        choices: ["Addition", "Subtraction", "Multipilication", "Division"],
    },
]);
// Conditional statement
if (answer.oparator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.oparator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.oparator === "Multipilication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.oparator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid oparator ");
}
