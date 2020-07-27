const argv = require("./config/yargs").argv;
const todo = require("./todo/todo");
const colors = require("colors");

let command = argv._[0];

switch (command) {
    case "create":
        let tarea = todo.create(argv.description);
        console.log(tarea)
        break;

    case "list":
        let list = todo.getTodoList();
        for (let todo of list) {
            console.log("=======To Do==========".green)
            console.log(todo.description.blue)
            console.log(`State ${todo.complete}`.blue)
            console.log("======================".green)
        }
        break;

    case "update":
        let updated = todo.update(argv.description, argv.complete);
        console.log(updated);
        break;
    case "delete":
        let deleted = todo.deleteTodo(argv.description);
        console.log(deleted);
        break;
    default:
        console.log("Command is not recognized.");
}