import React from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import TagsList from './components/TagsList';
import { Provider } from 'react-redux';
import notesReducer from './redux/reducers/reducers';

const App = () => {
    return (
        <Provider store={notesReducer}>
            <div>
                <h1>Notes App</h1>
                <NoteEditor />
                <NoteList />
                <TagsList />
            </div>
        </Provider>
    );
};

export default App;
