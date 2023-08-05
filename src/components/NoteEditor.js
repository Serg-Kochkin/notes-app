import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/actions/actions';
import { v4 as uuidv4 } from 'uuid';

const NoteEditor = () => {
    const [notes, setNotes] = useState('');
    const dispatch = useDispatch();

    const handleNoteChange = (e) => {
        setNotes(e.target.value);
    };

    const handleSubmit = () => {
        if (notes.trim() !== '') {
                dispatch(addNote({ id: uuidv4(), text: notes }));
            setNotes('');
        }
    };

    return (
        <div>
            <textarea
                value={notes}
                rows="4"
                onChange={handleNoteChange}
                placeholder="Enter your note..."
            />
            <button onClick={handleSubmit}>{'Add note'}</button>
        </div>
    );
};

export default NoteEditor;
