import React from 'react'
import { removeNote, uncompleteNote } from '../actions'
import { useDispatch } from 'react-redux'

const NoteD = ({ el, id }) => {
    const dispatch = useDispatch()

    return (
        <li className='todo'>
            <span>{el.note}</span>
            <section className="note-button">
                <button onClick={() => dispatch(uncompleteNote(id))} className="Status">Not done</button>
                <button onClick={() => dispatch(removeNote(id))} className="Remove">Remove</button>
            </section>
        </li>
    )
}

export default NoteD