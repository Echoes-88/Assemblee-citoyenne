import { COMMENTS, SUBMIT_COMMENT } from '../actions/comments';

import { CHANGE_INPUT_VALUE } from '../actions/field';

export const initialState = {
    comments: [],
    newCommentContent: ''
};

const comments = (state = initialState, action = {}) => {
  switch (action.type) {
    case COMMENTS:
        return {
          ...state,
          comments: [
            ...state.comments,
            action.datas,
          ],
        };
    case CHANGE_INPUT_VALUE:
        return {
          ...state,
          [action.key]: action.value
        }
    default:
      return state;
  }
};

export default comments;
