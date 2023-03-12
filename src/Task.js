export default class Task {
    constructor(name, dueDate = "No date") {
      this.name = name;
      this.dueDate = dueDate;
    }
  
    setName(newName) {
        this.name = newName;
    }
  
    getName() {
        return this.name;
    }

    setDate(dueDate) {
        this.dueDate = dueDate;
    }

    getDate() {
        return this.dueDate;
    }
};