import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import '../style.scss';

const Comment = ({comment}) => {

    return (
        <>
            {comment.map((comment) => (
                <div class="comment" key={comment.id}>
                    <p>{comment.name}</p>
                    <p>{comment.date}</p>
                    <p>{comment.text}</p>
                </div>
            ))}
        </>
    )
}

Comment.propTypes = {
    comment: PropTypes.array.isRequired,
  };
  
  // == Export
  export default Comment;
  