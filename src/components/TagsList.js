import React from 'react';
import { useSelector } from 'react-redux';

const TagsList = () => {
    const notes = useSelector((state) => state.notes);

    const extractTags = () => {
        const tagsSet = new Set();

        notes.forEach((note) => {
            const tags = note.text && note.text.match(/#[a-zA-Z0-9]+/g);
            if (tags) {
                tags.forEach((tag) => {
                    tagsSet.add(tag);
                });
            }
        });

        return Array.from(tagsSet);
    };

    const tags = extractTags();

    return (
        <div>
            <h3>Tags List:</h3>
            {tags.map((tag, index) => (
                <span key={index}>{tag} </span>
            ))}
        </div>
    );
};

export default TagsList;
