import { connect } from 'react-redux';
import Comments from '../components/Comments';
import { getComments, submitComment } from '../actions/comments';

const mapStateToProps = (state) => ({
    comments: state.comments.comments,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    getComments: () => {
      dispatch(getComments());
    },
    submitComment: () => {
      dispatch(submitComment());
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
