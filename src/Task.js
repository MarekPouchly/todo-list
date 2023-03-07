export const Task = (name, date = "No date") => {
    
    const setName = ( taskName ) => {
        name = taskName;
    }

    const getName = () => {
        return name;       
    }

    const setDate = ( newDate ) => {
        date = newDate;
    }

    const getDate = () => {
        return date;
    }

    return {
        setName,
        getName,
        setDate,
        getDate,
    }

}