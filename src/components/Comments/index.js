import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Comment from './Comment';
import Field from '../../containers/Field';

const Comments = ({getComments, comments, submitComment}) => {

    useEffect(() => {
        getComments();
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        submitComment();
    }

    return (
        <>
        <div className="comments-container">
            {comments.map((comment, index) => (
                <div key={comment[index]}>
                <Comment comment={comment} />
                </div>
            ))}
        </div>
        <form className="add-comment" onSubmit={handleOnSubmit}>
        <Field type="textarea" name="newCommentContent" placeholder="Votre commentaire" />
        <button type="submit">Envoyer</button>
        </form>
        </>
    )
}

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
  };
  
  // == Export
  export default Comments;
  