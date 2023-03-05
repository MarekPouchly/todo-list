export const ProjectsList = () => {
    const projects = [];

    const addProject = ( project ) => {
        if (projects.includes(project)) return;
        projects.push(project)
    }

    const removeProject = ( projectName ) =>{
        const project = projects.find(( project ) => {
            project.name === projectName;
        })
        projects.splice(projects.indexOf(project), 1);
    }

    const getProject = ( projectName ) => {
        return projects.find(( project ) => project.name === projectName)
    }

    const getProjects = () => {
        return projects;
    }

    return {
        addProject,
        removeProject,
        getProject,
        getProjects,
    }
}