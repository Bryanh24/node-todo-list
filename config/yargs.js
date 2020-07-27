const desciption = {
    demand: true,
    alias: "d",
};
const complete = {
    default: true,
    alias: "c",
}

const argv = require("yargs")
    .command("create", "Create a new to do.", {
        desciption,
    })
    .command("update", "update a todo state.", {
        desciption,
        complete
    })
    .command("delete", "Delete an elemen from the todo list.", {
        desciption,
    })
    .command("list", "Displays on screnn the todo list", {
        complete
    })
    .help().argv;

module.exports = {
    argv,
};