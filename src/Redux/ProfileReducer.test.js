import React from 'react';
import ProfileReducer, {addPostActionCreator, deletePost} from './ProfileReducer';

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("Lexa");

    let state = {
        posts: [
            { id: 1, message: 'Hello', likesCounter: 125 },
            { id: 2, message: 'Bye', likesCounter: 1020 },
        ]
    };

    let newState = ProfileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('message must be correct', () => {
    let action = addPostActionCreator("Lexa");

    let state = {
        posts: [
            { id: 1, message: 'Hello', likesCounter: 125 },
            { id: 2, message: 'Bye', likesCounter: 1020 },
        ]
    };

    let newState = ProfileReducer(state, action);

    expect(newState.posts[2].message).toBe("Lexa");
});

it('post must be deleted', () => {
    let action = deletePost(1);

    let state = {
        posts: [
            { id: 1, message: 'Hello', likesCounter: 125 },
            { id: 2, message: 'Bye', likesCounter: 1020 },
        ]
    };

    let newState = ProfileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});
