import React from 'react'
import NoteN from './noteN'
import NoteD from './noteD'
import NoteE from './noteE'

const List = ({ arrDone, arrNotDone }) => {
    return (
        <div>
            <ul className="uncompleted-notes">
                {arrNotDone.map((el, i) => el.editing ? <NoteE el={el} key={i} id={el.id} /> : <NoteN el={el} key={i} id={el.id} /> )}
            </ul>
            <hr />
            <ul className="completed-notes">
                <h1>Completed list</h1>
                {arrDone.map((el, i) => <NoteD el={el} key={i} id={el.id} /> ) }
            </ul>
        </div>
    )
}

export default List