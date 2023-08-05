import React from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import TagsList from './components/TagsList';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import notesReducer from './redux/reducers/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    notesReducer,
    composeEnhancers()
)

const App = () => {
    return (
        <Provider store={store}>
            <div className='main-section'>
                <h1>Notes Test App</h1>
                <NoteEditor />
                <NoteList />
                <TagsList />
            </div>
        </Provider>
    );
};

export default App;
