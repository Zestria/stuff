import { completeNote } from "../actions"

const noteReducer = (state=[], action) => {
    switch(action.type) {
        case "ADD_NOTE":
            state.unshift({
                note: action.note,
                status: action.status,
                id: state.length,
                editing: false
            })
            localStorage.setItem('notes', JSON.stringify(state))
            return state
        case "REMOVE_NOTE":
            const removeState = state.filter(el => el.id !== action.id)
            localStorage.setItem('notes', JSON.stringify(removeState))
            return removeState
        case "COMPLETE_NOTE": 
            const complState = state.map(el => {
                if(el.id === action.id) {
                    el.status = true
                    return el
                } else {
                    return el
                }
            })
            localStorage.setItem('notes', JSON.stringify(complState))
            return complState
        case "UNCOMPLETE_NOTE": 
            const uncomplState = state.map(el => {
                if(el.id === action.id) {
                    el.status = false
                    return el
                } else {
                    return el
                }
            })
            localStorage.setItem('notes', JSON.stringify(uncomplState))
        case "GET_NOTE":
            if(localStorage.getItem('notes') === null || localStorage.getItem('notes') === '') {
                localStorage.setItem('notes', JSON.stringify(state))
                return state
            } else {
                return JSON.parse(localStorage.getItem('notes'))
            }
            
        default:
            return state
    }
}

export default noteReducer