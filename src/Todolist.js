import Project from './Project';

export default class TodoList {
    constructor() {
      this.projects = [];
      
    };
  
    addProject(projectName) {
      const project = new Project(projectName);
      this.projects.push(project);
    };
  
    deleteProject(projectName) {
        const project = this.projects.find((project) => project.name === projectName);
        this.projects.splice(this.projects.indexOf(project), 1);
    };
  
    getProject(projectName) {
        return Object.assign(new Project(), this.projects.find((project) => project.name === projectName));
    }

    contains(projectName) {
        return this.projects.some((project) => project.name === projectName);
    }
  
    getAllProjects() {
      return this.projects;
    }
}