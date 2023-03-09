import { Project } from './Project.js';

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
        const project = this.projects.find(project => project.getName() === projectName);
        console.log(project);
        if (project !== null) {
            return project;
        } else {
            return true;
        }
    }

    contains(projectName) {
        return this.projects.some((project) => project.name === projectName);
      }
  
    getAllProjects() {
      return this.projects;
    }
}