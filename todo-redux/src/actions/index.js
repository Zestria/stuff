export const addNote = (arg) => {
    return {
        type: 'ADD_NOTE',
        note: arg.text,
        status: arg.status
    }
}

export const removeNote = (id) => {
    return {
        type: "REMOVE_NOTE",
        id: id
    }
}

export const completeNote = (id) => {
    return {
        type: "COMPLETE_NOTE",
        id: id
    }
}

export const uncompleteNote = (id) => {
    return {
        type: "UNCOMPLETE_NOTE",
        id: id
    }
}

export const getNote = () => {
    return {
        type: "GET_NOTE"
    }
}

export const changeNote = () => {
    return {
        type: "CHANGE_NOTE"
    }
}

export const saveNote = () => {
    return {
        type: "SAVE_NOTE"
    }
}

export const sortC = () => {
    return {
        type: "COMPLETED"
    }
}

export const sortU = () => {
    return {
        type: "UNCOMPLETED"
    }
}