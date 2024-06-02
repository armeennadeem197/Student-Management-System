import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() + 9000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter Student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the cousres to enrolled:",
        choices: ["MS.office", "HTML", "Javascript", "Typescript", "Python"],
    }
]);
const tutionFee = {
    "MS.office": 2000,
    "HTML": 2500,
    "Javascript": 5000,
    "Typescript": 6000,
    "Python": 10000
};
console.log(`\nTution Fees:${tutionFee[answer.couses]}/-\n`);
console.log(`Balance:${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easypasisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        }
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}`);
const tutionFees = [tutionFee[answer.courses]];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentType) {
    console.log(`Congratulation, you have sucessfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select == "View Status")
        console.log("\n*********Status***********\n");
    console.log(`Student Name:${answer.student}`);
    console.log(`Student ID: ${randomNumber}`);
    console.log(`Courses:${answer.cousrses}`);
    console.log(`Tution Fees Paid:${paymentAmount}`);
    console.log(`Balance: ${myBalance += paymentAmount}`);
}
else {
    console.log("\nExiting Student Management Student\n");
}
