import inquirer from "inquirer";
let balance = 40000;
let pincode = 3456;
let pininfo = await inquirer.prompt([{
        message: "Enter pin code",
        type: "number",
        name: "pin"
    }]);
if (pininfo.pin === pincode) {
    let operatorInfo = await inquirer.prompt([{
            message: "Select one operation",
            type: "list",
            choices: ['Withdraw', 'Current Balance'],
            name: "operator"
        }]);
    if (operatorInfo.operator === "Withdraw") {
        let amountInfo = await inquirer.prompt([{
                message: "Select amount",
                name: "amount",
                type: "list",
                choices: [10000, 20000, 30000, "another amount"]
            }]);
        if (amountInfo.amount === "another amount") {
            let amountAbout = await inquirer.prompt([{
                    message: "Please enter your amount",
                    name: "yourAmount",
                    type: "number"
                }]);
            if (balance >= amountAbout.yourAmount) {
                balance -= amountAbout.yourAmount;
                console.log(`Your remaining amount is ${balance}`);
            }
            else {
                console.log("You have insufficient balance");
            }
        }
        else {
            balance -= amountInfo.amount;
            console.log(`Your remaining balance is ${balance}`);
        }
    }
    else {
        console.log(`Your current balance is ${balance}`);
    }
}
else {
    console.log("Please enter correct pincode.");
}
