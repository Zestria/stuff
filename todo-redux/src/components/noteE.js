import React, { useState } from 'react'
import { saveNote } from '../actions'
import { useDispatch } from 'react-redux'
const NoteE = ({ el, id }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(el.note)
    return (
        <li className='todo'>
            <input className="editing-input" value={value} onChange={e => setValue(e.target.value)} />
            <section className="note-button">
                <button onClick={() => dispatch(saveNote())} className="Save">Save</button>
                <button disabled className="Status">Done</button>
                <button disabled className="Remove">Remove</button>
            </section>
        </li>
    )
}

export default NoteE