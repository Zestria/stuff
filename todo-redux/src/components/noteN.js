import React from 'react'
import { removeNote, completeNote, changeNote } from '../actions'
import { useDispatch } from 'react-redux'

const NoteN = ({ el, id }) => {
    const dispatch = useDispatch()

    return (
        <li className='todo'>
            <span>{el.note}</span>
            <section className="note-button">
                <button className="Edit">Edit</button>
                <button onClick={() => dispatch(completeNote(id))} className="Status">Done</button>
                <button onClick={() => dispatch(removeNote(id))} className="Remove">Remove</button>
            </section>
        </li>
    )
}

export default NoteN