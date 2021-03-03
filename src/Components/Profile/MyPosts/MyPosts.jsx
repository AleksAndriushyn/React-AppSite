import React from 'react';
import AddPostForm from './AddPostForm';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo(props => {

    let PostElements = props.posts.map(p => <Post message={p.message} likesCounter={p.likesCounter} />);

    let addPostText = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddPostForm onSubmit={addPostText} />
            <div className={s.posts}>
                {PostElements}
            </div>
        </div>
    )
});

export default MyPosts;