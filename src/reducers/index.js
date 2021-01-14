import { combineReducers } from 'redux';
import comments from './comments';
import pdfViewer from './pdfViewer';
import user from './user';

export default combineReducers({
    comments,
    pdfViewer,
    user
});
