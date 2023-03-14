export default class Task {
    constructor(name, dueDate = "No date") {
      this.name = name;
      this.dueDate = dueDate;
      this.completed = false;
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
    
    setCompleted(isCompleted) {
        this.completed = isCompleted;
    }

    getCompleted() {
        return this.completed;
    }
};