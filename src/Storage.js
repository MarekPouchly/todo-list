import ProjectsList from "./ProjectsList";

export const Storage = () => {
    const saveProjectsList = (data) => {
        localStorage.setItem("projectsList", JSON.stringify(data));
    }

    const getProjectsList = () => {
        return JSON.parse(localStorage.getItem("projectsList"));
    }

    const addProject = (project) => {
        const projectsList = ProjectsList();
        if (getProjectsList() !== null) {
            projectsList = Object.assign(ProjectsList(), getProjectsList())
        }
        projectsList.addProject(project);
        saveProjectsList(projectsList);
    }

    const deleteProject = (project) => {
        const projectsList = Object.assign(ProjectsList(), getProjectsList());
        projectsList.deleteProject(project);
        saveProjectsList(projectsList);
    }

    return {
        saveProjectsList,
        getProjectsList,
        addProject,
        deleteProject,
    }
}