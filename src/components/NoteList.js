import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../redux/actions/actions';

const NoteList = () => {
    const [tagFilter, setTagFilter] = useState('');

    const notes = useSelector((state) => state.notes);
    const dispatch = useDispatch();

    const handleTagFilterChange = (e) => {
        setTagFilter(e.target.value);
    };

    const filteredNotes = notes.filter((note) =>
        tagFilter ? note.text.includes(`#${tagFilter}`) : true
    );

    const handleDelete = (id) => {
        dispatch(deleteNote(id));
    };

    const handleEdit = (id, newText) => {
        dispatch(editNote(id, { ...notes.find((note) => note.id === id), text: newText }));
    };

    const editText = (text) => {
        let newText = prompt('Edit note:', text);
        return newText === null ? text : newText
    };

    return (
        <div>
            <input
                type="text"
                value={tagFilter}
                onChange={handleTagFilterChange}
                placeholder="Filter by tag..."
            />
            <ul>
                {filteredNotes.map((note) => (
                    <li key={note.id}>
                        {note.text}
                        <button onClick={() => handleDelete(note.id)}>Delete</button>
                        <button onClick={() => handleEdit(note.id, editText(note.text))}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;
