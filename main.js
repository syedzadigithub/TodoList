import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bgBlue.bold("\n \t Wellcome to SyedaHuma - Todo-List Application"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.red("Enter your New Task:")
        }
    ]);
    todoList.push(addTask.task);
    console.log(` ${addTask.task} Task added in Todo-List successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.bgGray("Do you want to add more task ?"),
            default: "False",
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your updated Todo-list:", todoList);
