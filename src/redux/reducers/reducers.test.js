import notesReducer from './reducers';

describe('Notes Reducer', () => {
    it('should add a new note after ADD_NOTE action', () => {
        const initialState = { notes: [] };
        const newNote = { id: '123', text: 'Test note' };
        const action = { type: 'ADD_NOTE', payload: newNote };
        const newState = notesReducer(initialState, action);
        expect(newState.notes.length).toEqual(1);
        expect(newState.notes[0]).toEqual(newNote);
    });

    it('should update a note after EDIT_NOTE action', () => {
        const initialState = { notes: [{ id: '123', text: 'Before changes note' }] };
        const updatedNote = { id: '123', text: 'After changes note' };
        const action = { type: 'EDIT_NOTE', payload: { id: '123', note: updatedNote } };
        const newState = notesReducer(initialState, action);
        expect(newState.notes.length).toEqual(1);
        expect(newState.notes[0]).toEqual(updatedNote);
    });

    it('should delete a note after DELETE_NOTE action', () => {
        const initialState = { notes: [{ id: '123', text: 'To be deleted' }] };
        const action = { type: 'DELETE_NOTE', payload: '123' };
        const newState = notesReducer(initialState, action);
        expect(newState.notes.length).toEqual(0);
    });
});
