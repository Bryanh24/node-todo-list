const fs = require("fs");

let todoList = [];

const saveDB = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error("Could´n save the file", err);
    });
};

const loadDB = () => {
    try {
        todoList = require("../db/data.json");
    } catch (error) {
        todoList = [];
    }
};

const create = (description) => {
    loadDB();
    let todo = {
        description,
        complete: false,
    };

    todoList.push(todo);
    saveDB();
    return todo;
};

const getTodoList = () => {
    loadDB();
    return todoList;
};

const update = (description, complete = true) => {
    loadDB();
    let index = todoList.findIndex((todo) => todo.description === description);
    if (index >= 0) {
        todoList[index].complete = complete;
        saveDB();
        return true;
    }
    return false;
};

const deleteTodo = (description) => {
    loadDB();
    let newList = todoList.filter(tarea => tarea.description !== description);

    if (todoList.length === newList.length) {
        return false;
    } else {
        todoList = newList;
        saveDB();
        return true;
    }
};
module.exports = {
    create,
    getTodoList,
    update,
    deleteTodo,
};