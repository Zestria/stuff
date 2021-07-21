import React, { useState, useEffect } from 'react'
import { addNote, getNote } from './actions'
import { useSelector, useDispatch } from 'react-redux'
import List from './components/list'

const App = () => {
    const notes = useSelector(state => state.notes)
    const dispatch = useDispatch()

    const [text, setText] = useState('')
    const notesDone = notes.filter(note => note.status === true)
    const notesNotDone = notes.filter(note => note.status === false)

    useEffect(() => {
        dispatch(getNote())
    }, [])

    const onSubmit = e => {
        e.preventDefault()
        dispatch(addNote({
            note: text,
            status: false
        }))
        setText('')
    } 

    return (
        <div className="App">
            <div className="top">
                <form onSubmit={onSubmit} className="enter-note">
                    <input type="text" onChange={e => setText(e.target.value)} value={text} />
                    <button type="submit">+</button>
                </form>
            </div>
            <List arrDone={notesDone} arrNotDone={notesNotDone} />
        </div>
    )
}

export default App