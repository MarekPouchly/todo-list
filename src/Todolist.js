import { Project } from './project.js';

export class TodoList {
    constructor() {
      this.projects = [];
    }
  
    addProject(projectName) {
      const project = new Project(projectName);
      this.projects.push(project);
    }
  
    deleteProject(projectName) {
        const project = projects.find(project => project.getName() === projectName);
        projects.splice(projects.indexOf(project), 1);
    }
  
    getProject(projectName) {
      return this.projects.find(project => project.getName() === projectName);
    }
  
    getAllProjects() {
      return this.projects;
    }
}