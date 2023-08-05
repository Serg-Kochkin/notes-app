import React from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import TagsList from './components/TagsList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import notesReducer from './redux/reducers/reducers';

const store = createStore(notesReducer);

const App = () => {
    return (
        <Provider store={store}>
            <div className='main-section'>
                <h1>Notes Test App</h1>
                <NoteEditor/>
                <NoteList />
                <TagsList />
            </div>
        </Provider>
    );
};

export default App;
