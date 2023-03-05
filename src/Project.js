export const Project = (name) => {
    const tasks = [];

    const setName = (newName) => {
        name = newName;
    }

    const getName = () => {
        return name;
    }

    const addTask = (task) => {
        tasks.push(task);
    }

    const removeTask = (taskName) => {
        const task = tasks.find( (task) => task.name === taskName);
        tasks.splice(tasks.indexOf(task), 1);
    }

    const getTask = (taskName) => {
        return tasks.find( (task) => task.name === taskName);
    }

    const getTasks = () => {
        return tasks;
    }

    return {
        setName,
        getName,
        addTask,
        removeTask,
        getTask,
        getTasks,
    };
}